# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details

  # Scrub sensitive parameters from your log
  # filter_parameter_logging :password
  
  def sc_json_for(record)
    content = record.as_json(:except => [:created_at, :updated_at, :id])[record.class.name.underscore]

    # process all the associations (has_many, has_one, etc.)
    associations = record.class.reflect_on_all_associations
    associations.each do |association|
      record_or_records = case association.macro
        when :has_many, :has_and_belongs_to_many
          # record :has_many children; return array of record['child_name']
          record.send(association.name).to_a
        when :has_one, :belongs_to
          # record :has_one child; return record['child_name']
          record.send(association.name)
      end
      
      # turn the associated record(s) into urls
      unless record_or_records.nil?
        if record_or_records.is_a?(Enumerable)
          content[association.name] = record_or_records.map { |r| polymorphic_path(r) } 
        else
          content[association.name] = polymorphic_path(record_or_records)
        end
      end
      
      # # if we have_many X, give the app hints where to find the url
      # 
      # if association.macro == :has_many
      #   content[association.name+'_index_url'] = polymorphic_path(record, 
      # end
    end

    { :location => polymorphic_path(record), :content => content }
  end
  
  def add_to(sc_json, hash)
    sc_json = sc_json.dup
    sc_json[:content].merge! hash
    sc_json
  end

  
end

