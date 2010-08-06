require 'spec_helper'

describe "/activity_pages/show.html.erb" do
  include ActivityPagesHelper
  before(:each) do
    assigns[:activity_page] = @activity_page = stub_model(ActivityPage,
      :name => "value for name",
      :index => 1,
      :intro_text => "value for intro_text"
    )
  end

  it "renders attributes in <p>" do
    render
    response.should have_text(/value\ for\ name/)
    response.should have_text(/1/)
    response.should have_text(/value\ for\ intro_text/)
  end
end
