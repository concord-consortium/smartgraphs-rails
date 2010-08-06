require 'spec_helper'

describe "/activity_pages/edit.html.erb" do
  include ActivityPagesHelper

  before(:each) do
    assigns[:activity_page] = @activity_page = stub_model(ActivityPage,
      :new_record? => false,
      :name => "value for name",
      :index => 1,
      :intro_text => "value for intro_text"
    )
  end

  it "renders the edit activity_page form" do
    render

    response.should have_tag("form[action=#{activity_page_path(@activity_page)}][method=post]") do
      with_tag('input#activity_page_name[name=?]', "activity_page[name]")
      with_tag('input#activity_page_index[name=?]', "activity_page[index]")
      with_tag('textarea#activity_page_intro_text[name=?]', "activity_page[intro_text]")
    end
  end
end
