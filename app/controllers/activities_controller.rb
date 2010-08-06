class ActivitiesController < ApplicationController
  
  before_filter :find_activity, :only => [:show, :edit, :update, :destroy]

  # GET /activities
  def index
    @activities = Activity.all

    respond_to do |format|
      format.html # index.html.erb
      #format.json { ... }
    end
  end

  # GET /activity/1
  def show
    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => add_to(sc_json_for(@activity), { :pages_index_url => activity_page_path(@activity) }) }
    end
  end

  # GET /activities/new
  def new
    @activity = Activity.new
  end

  # GET /activity/1/edit
  def edit
  end

  # POST /activities
  def create
    @activity = Activity.new(params[:activity])

    respond_to do |format|
      if @activity.save
        format.html { redirect_to(@activity, :notice => 'Activity was successfully created.') }
        #format.xml  { render :xml => @activity, :status => :created, :location => @activity }
      else
        format.html { render :action => "new" }
        #format.xml  { render :xml => @activity.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /activities/1
  def update
    respond_to do |format|
      if @activity.update_attributes(params[:activity])
        format.html { redirect_to(@activity, :notice => 'Activity was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @activity.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /activity/1
  def destroy
    @activity.destroy

    respond_to do |format|
      format.html { redirect_to(activities_url) }
      format.xml  { head :ok }
    end
  end
  
  
  private
    def find_activity
      @activity = Activity.find(params[:id])
    end
    
end
