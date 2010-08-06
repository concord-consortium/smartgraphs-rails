include ActionController::UrlWriter
class ActivityPage < ActiveRecord::Base
  belongs_to :activity
  
  def uri
    activity_page_path(self.activity, self)
  end
  
  def as_json(options={})
    super({ :methods => :uri })
  end
  
end
