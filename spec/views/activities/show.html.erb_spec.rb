require 'spec_helper'

describe "activities/show.html.erb" do
  before(:each) do
    @activity_pages =  [mock_model(ActivityPage, :name => "page name", :intro_text => "intro_text")]
    @activity = mock_model(Activity, :title => "title of activity", :activity_pages => @activity_pages)
    assigns[:activity] = @activity
  end

  it "renders HTML of @activity without major errors" do
    render
  end
end
