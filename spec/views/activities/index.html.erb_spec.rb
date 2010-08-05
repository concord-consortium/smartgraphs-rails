require 'spec_helper'

describe "/activities/index.html.erb" do
  include ActivitiesHelper

  before(:each) do
    assigns[:activities] = [
      stub_model(Activity,
        :name => "value for name"
      ),
      stub_model(Activity,
        :name => "value for name"
      )
    ]
  end

  it "renders a list of activities" do
    render
    response.should have_tag("tr>td", "value for name".to_s, 2)
  end
end
