include ActionController::UrlWriter
class Activity < ActiveRecord::Base
  has_many :activity_pages

  # for a web service, URIs are *data* not just some accident of the view layer.
  def url
    activity_path(self)
  end
  
  # EXPLICIT IS BETTER THAN IMPLICIT!!
  # http://www.python.org/dev/peps/pep-0020/
  # :)
  
  def as_json(options={})
    super(:methods => :url, :except => [:id, :created_at, :updated_at]).merge(:pages => self.activity_pages.map { |p| p.url })
  end

end
