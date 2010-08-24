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
  it "renders JSON of @activity as Smartgraphs expects it" do
    # Activity.stub(:find).with("37").and_return(mock_activity)
      # get :show, :id => "37", :format=>"application/json"
    @activity = stub_model(Activity, :id => "37", :title => "title of activity 37", :activity_id => "37")
    p "@activity:"
    p @activity
    p ""
    p "activity_pages_path(@activity):"
    p activity_pages_path(@activity)
    p ""
    # :id = "37"
    # :activity_id = "37"
    # pages = [stub_model(ActivityPage)]
    # p "pages = [stub_model(ActivityPage)]:"
    # p pages
    # p ""
    
    render
    p "rendered:"
    p rendered
    p ""
    rendered.should contain("page_list_url")
  end
end
