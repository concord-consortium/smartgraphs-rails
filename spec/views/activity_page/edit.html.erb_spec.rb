require 'spec_helper'

describe "/activity_page/edit" do
  before(:each) do
    render 'activity_page/edit'
  end

  #Delete this example and add some real ones or delete this file
  it "should tell you where to find the file" do
    response.should have_tag('p', %r[Find me in app/views/activity_page/edit])
  end
end
