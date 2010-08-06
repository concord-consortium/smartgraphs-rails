include ActionController::UrlWriter
class ActivityPage < ActiveRecord::Base
  belongs_to :activity
  has_many :activity_steps
  
  def url
    activity_page_path(self.activity, self)
  end
  
  def as_json(options={})
    super({ :methods => :url }).merge(:steps => self.activity_steps.map { |s| s.url })
  end
  
end
