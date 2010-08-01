require 'spec_helper'

describe "/guide_page_sequences/index.html.erb" do
  include GuidePageSequencesHelper

  before(:each) do
    assigns[:guide_page_sequences] = [
      stub_model(GuidePageSequence,
        :name => "value for name"
      ),
      stub_model(GuidePageSequence,
        :name => "value for name"
      )
    ]
  end

  it "renders a list of guide_page_sequences" do
    render
    response.should have_tag("tr>td", "value for name".to_s, 2)
  end
end
