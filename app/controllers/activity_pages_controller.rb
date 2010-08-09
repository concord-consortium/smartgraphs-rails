class ActivityPagesController < ApplicationController

  before_filter :find_activity
  before_filter :find_page, :only => [:show, :edit, :update, :destroy]
  
  def index
    @pages = @activity.activity_pages
    urls = @pages.map { |p| activity_page_path(p.activity, p) }

    respond_to do |format|
      format.html
      format.json { render :json => @pages.map { |p| p.as_json } }
    end
  end

  def new
    @page = ActivityPage.new(:activity => @activity)
  end
  
  def update
    respond_to do |format|
      if @page.update_attributes(params[:activity_page])
        format.html { redirect_to( params[:return_to] ? params[:return_to] : activity_page_path(@activity, @page) ) }
      else
        format.html { render :action => "new" }
      end
    end
  end
  
  def create
    @page = @activity.activity_pages.new(params[:activity_page])
    
    respond_to do |format|
      if @page.save
        format.html { redirect_to(:action => 'show', :activity_id => @activity.id, :id => @page.id, :notice => 'Activity was successfully created.') }
      else
        format.html { render :action => "new" }
      end
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render :json => @page }
    end
  end

  def edit
  end
  
  def destroy
    @page.destroy
    respond_to do |format|
      format.html { redirect_to(:controller => 'activities', :id => @activity.id, :action => 'show', :notice => 'Page was deleted.') }
    end
  end
  
  private
    def find_activity
      @activity = Activity.find(params[:activity_id])
    end
    
    def find_page
      @page = @activity.activity_pages.find(params[:id])
    end

end
