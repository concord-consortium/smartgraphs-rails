require 'spec_helper'

describe "/activity_pages/index.html.erb" do
  include ActivityPagesHelper

  before(:each) do
    assigns[:activity_pages] = [
      stub_model(ActivityPage,
        :name => "value for name",
        :index => 1,
        :intro_text => "value for intro_text"
      ),
      stub_model(ActivityPage,
        :name => "value for name",
        :index => 1,
        :intro_text => "value for intro_text"
      )
    ]
  end

  it "renders a list of activity_pages" do
    render
    response.should have_tag("tr>td", "value for name".to_s, 2)
    response.should have_tag("tr>td", 1.to_s, 2)
    response.should have_tag("tr>td", "value for intro_text".to_s, 2)
  end
end
