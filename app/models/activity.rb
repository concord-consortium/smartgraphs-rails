include ActionController::UrlWriter
class Activity < ActiveRecord::Base
  has_many :activity_pages

  # for a web service, URIs are *data* not just some accident of the view layer.
  def uri
    activity_path(self)
  end
  
  # EXPLICIT IS BETTER THAN IMPLICIT!!
  # http://www.python.org/dev/peps/pep-0020/
  # :)
  
  def as_json(options={})
    super({ :methods => :uri }).merge(:pages => self.activity_pages.map { |p| p.uri })
  end

end
