class ActivityPagesController < ApplicationController
  # GET /activity_pages
  # GET /activity_pages.xml
  def index
    @activity_pages = ActivityPage.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @activity_pages }
    end
  end

  # GET /activity_pages/1
  # GET /activity_pages/1.xml
  def show
    @activity_page = ActivityPage.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @activity_page }
    end
  end

  # GET /activity_pages/new
  # GET /activity_pages/new.xml
  def new
    @activity_page = ActivityPage.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @activity_page }
    end
  end

  # GET /activity_pages/1/edit
  def edit
    @activity_page = ActivityPage.find(params[:id])
  end

  # POST /activity_pages
  # POST /activity_pages.xml
  def create
    @activity_page = ActivityPage.new(params[:activity_page])

    respond_to do |format|
      if @activity_page.save
        format.html { redirect_to(@activity_page, :notice => 'ActivityPage was successfully created.') }
        format.xml  { render :xml => @activity_page, :status => :created, :location => @activity_page }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @activity_page.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /activity_pages/1
  # PUT /activity_pages/1.xml
  def update
    @activity_page = ActivityPage.find(params[:id])

    respond_to do |format|
      if @activity_page.update_attributes(params[:activity_page])
        format.html { redirect_to(@activity_page, :notice => 'ActivityPage was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @activity_page.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /activity_pages/1
  # DELETE /activity_pages/1.xml
  def destroy
    @activity_page = ActivityPage.find(params[:id])
    @activity_page.destroy

    respond_to do |format|
      format.html { redirect_to(activity_pages_url) }
      format.xml  { head :ok }
    end
  end
end
