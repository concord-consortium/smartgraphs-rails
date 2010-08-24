#---
# Excerpted from "The RSpec Book",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material, 
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose. 
# Visit http://www.pragmaticprogrammer.com/titles/achbd for more book information.
#---
require 'spec_helper'

describe "activities/show.json.erb" do
  before(:each) do
    @activity_pages =  [ActivityPage.create(:name => "page name", :intro_text => "intro_text")]
    @activity = Activity.create(:title => "title of activity", :activity_pages => @activity_pages)
    assigns[:activity] = @activity
  end

  it "renders JSON of @activity as Smartgraphs expects it" do
    # p "@activity:"
    # p @activity
    # p ""
    # p "@activity.as_json:"
    # p @activity.as_json
    # p ""
    # p "activity_pages_path(@activity):"
    # p activity_pages_path(@activity)
    # p ""
    
    render
    # p "response.body:"
    # p response.body
    # p ""
    response.body.should match("page_list_url")
  end
end
