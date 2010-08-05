class ActivitiesController < ApplicationController
  # GET /activities
  # GET /activities.xml
  # TODO: correct json formatting which is including activities like this:
  # {
  #     "content": [{
  #         "activities": [], //THIS LINE SHOULD NOT BE HERE
  #         "activity": {
  #             "guid": "/rails/activities/1"
  #         }
  #     }]
  # }
  def index
    @activities = Activity.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @activities }
      format.json { 
        activities = @activities.map {
          |activity| sproutcore_json(activity)["activity"] 
        }
        render :json => { :content => activities } 
      }
    end
  end

  # GET /activities/1
  # GET /activities/1.xml
  def show
    @activity = Activity.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @activity }
      format.json do
        render :json => {
          :content => sproutcore_json(@activity)["activity"],
          :location => activity_path(@activity)
        }
      end
    end
  end

  # GET /activities/new
  # GET /activities/new.xml
  def new
    @activity = Activity.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @activity }
    end
  end

  # GET /activities/1/edit
  def edit
    @activity = Activity.find(params[:id])
  end

  # POST /activities
  # POST /activities.xml
  def create
    @activity = Activity.new(params[:activity])

    respond_to do |format|
      if @activity.save
        format.html { redirect_to(@activity, :notice => 'Activity was successfully created.') }
        format.xml  { render :xml => @activity, :status => :created, :location => @activity }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @activity.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /activities/1
  # PUT /activities/1.xml
  def update
    @activity = Activity.find(params[:id])

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

  # DELETE /activities/1
  # DELETE /activities/1.xml
  def destroy
    @activity = Activity.find(params[:id])
    @activity.destroy

    respond_to do |format|
      format.html { redirect_to(activities_url) }
      format.xml  { head :ok }
    end
  end
end
