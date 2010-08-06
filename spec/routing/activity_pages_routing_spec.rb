require 'spec_helper'

describe ActivityPagesController do
  describe "routing" do
    it "recognizes and generates #index" do
      { :get => "/activity_pages" }.should route_to(:controller => "activity_pages", :action => "index")
    end

    it "recognizes and generates #new" do
      { :get => "/activity_pages/new" }.should route_to(:controller => "activity_pages", :action => "new")
    end

    it "recognizes and generates #show" do
      { :get => "/activity_pages/1" }.should route_to(:controller => "activity_pages", :action => "show", :id => "1")
    end

    it "recognizes and generates #edit" do
      { :get => "/activity_pages/1/edit" }.should route_to(:controller => "activity_pages", :action => "edit", :id => "1")
    end

    it "recognizes and generates #create" do
      { :post => "/activity_pages" }.should route_to(:controller => "activity_pages", :action => "create") 
    end

    it "recognizes and generates #update" do
      { :put => "/activity_pages/1" }.should route_to(:controller => "activity_pages", :action => "update", :id => "1") 
    end

    it "recognizes and generates #destroy" do
      { :delete => "/activity_pages/1" }.should route_to(:controller => "activity_pages", :action => "destroy", :id => "1") 
    end
  end
end
