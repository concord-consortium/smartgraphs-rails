require 'spec_helper'

describe ActivityPagesController do

  def mock_activity_page(stubs={})
    @mock_activity_page ||= mock_model(ActivityPage, stubs)
  end

  describe "GET index" do
    it "assigns all activity_pages as @activity_pages" do
      ActivityPage.stub(:find).with(:all).and_return([mock_activity_page])
      get :index
      assigns[:activity_pages].should == [mock_activity_page]
    end
  end

  describe "GET show" do
    it "assigns the requested activity_page as @activity_page" do
      ActivityPage.stub(:find).with("37").and_return(mock_activity_page)
      get :show, :id => "37"
      assigns[:activity_page].should equal(mock_activity_page)
    end
  end

  describe "GET new" do
    it "assigns a new activity_page as @activity_page" do
      ActivityPage.stub(:new).and_return(mock_activity_page)
      get :new
      assigns[:activity_page].should equal(mock_activity_page)
    end
  end

  describe "GET edit" do
    it "assigns the requested activity_page as @activity_page" do
      ActivityPage.stub(:find).with("37").and_return(mock_activity_page)
      get :edit, :id => "37"
      assigns[:activity_page].should equal(mock_activity_page)
    end
  end

  describe "POST create" do

    describe "with valid params" do
      it "assigns a newly created activity_page as @activity_page" do
        ActivityPage.stub(:new).with({'these' => 'params'}).and_return(mock_activity_page(:save => true))
        post :create, :activity_page => {:these => 'params'}
        assigns[:activity_page].should equal(mock_activity_page)
      end

      it "redirects to the created activity_page" do
        ActivityPage.stub(:new).and_return(mock_activity_page(:save => true))
        post :create, :activity_page => {}
        response.should redirect_to(activity_page_url(mock_activity_page))
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved activity_page as @activity_page" do
        ActivityPage.stub(:new).with({'these' => 'params'}).and_return(mock_activity_page(:save => false))
        post :create, :activity_page => {:these => 'params'}
        assigns[:activity_page].should equal(mock_activity_page)
      end

      it "re-renders the 'new' template" do
        ActivityPage.stub(:new).and_return(mock_activity_page(:save => false))
        post :create, :activity_page => {}
        response.should render_template('new')
      end
    end

  end

  describe "PUT update" do

    describe "with valid params" do
      it "updates the requested activity_page" do
        ActivityPage.should_receive(:find).with("37").and_return(mock_activity_page)
        mock_activity_page.should_receive(:update_attributes).with({'these' => 'params'})
        put :update, :id => "37", :activity_page => {:these => 'params'}
      end

      it "assigns the requested activity_page as @activity_page" do
        ActivityPage.stub(:find).and_return(mock_activity_page(:update_attributes => true))
        put :update, :id => "1"
        assigns[:activity_page].should equal(mock_activity_page)
      end

      it "redirects to the activity_page" do
        ActivityPage.stub(:find).and_return(mock_activity_page(:update_attributes => true))
        put :update, :id => "1"
        response.should redirect_to(activity_page_url(mock_activity_page))
      end
    end

    describe "with invalid params" do
      it "updates the requested activity_page" do
        ActivityPage.should_receive(:find).with("37").and_return(mock_activity_page)
        mock_activity_page.should_receive(:update_attributes).with({'these' => 'params'})
        put :update, :id => "37", :activity_page => {:these => 'params'}
      end

      it "assigns the activity_page as @activity_page" do
        ActivityPage.stub(:find).and_return(mock_activity_page(:update_attributes => false))
        put :update, :id => "1"
        assigns[:activity_page].should equal(mock_activity_page)
      end

      it "re-renders the 'edit' template" do
        ActivityPage.stub(:find).and_return(mock_activity_page(:update_attributes => false))
        put :update, :id => "1"
        response.should render_template('edit')
      end
    end

  end

  describe "DELETE destroy" do
    it "destroys the requested activity_page" do
      ActivityPage.should_receive(:find).with("37").and_return(mock_activity_page)
      mock_activity_page.should_receive(:destroy)
      delete :destroy, :id => "37"
    end

    it "redirects to the activity_pages list" do
      ActivityPage.stub(:find).and_return(mock_activity_page(:destroy => true))
      delete :destroy, :id => "1"
      response.should redirect_to(activity_pages_url)
    end
  end

end
