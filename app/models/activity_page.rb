include ActionController::UrlWriter
class ActivityPage < ActiveRecord::Base
  belongs_to :activity
  has_many :activity_steps
  belongs_to :first_step, :class_name => 'ActivityStep'
  
  def url
    activity_page_path(self.activity, self)
  end
  
  def as_json(options={})
    super(
      :methods => :url, 
      :except => [:id, :created_at, :updated_at, :activity_id, :first_step_id]
    ).merge(
      :steps => self.activity_steps.map { |s| s.url },
      :activity => self.activity.url,
      :first_step => self.first_step.url
    )
  end
  
end
