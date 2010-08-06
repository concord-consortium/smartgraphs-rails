class ActivityPagesController < ApplicationController

  before_filter :find_activity
  
  def index
    @pages = @activity.activity_pages
  end

  def new
    @page = ActivityPage.new(:activity => @activity)
  end
  
  def update
    @page = @activity.activity_pages.find(params[:id])
    
    respond_to do |format|
      if @page.update_attributes(params[:activity_page])
        format.html { redirect_to(:action => 'show', :activity_id => @activity.id, :id => @page.id, :notice => 'Activity was successfully updated.') }
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
    @page = @activity.activity_pages.find(params[:id])
  end

  def edit
    @page = @activity.activity_pages.find(params[:id])
  end
  
  def destroy
    @page = @activity.activity_pages.find(params[:id])    
    @page.destroy
    respond_to do |format|
      format.html { redirect_to(:controller => 'activities', :id => @activity.id, :action => 'show', :notice => 'Page was deleted.') }
    end
  end
  
  private
    def find_activity
      @activity = Activity.find(params[:activity_id])
    end

end
