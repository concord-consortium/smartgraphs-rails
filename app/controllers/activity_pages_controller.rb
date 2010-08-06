class ActivityPagesController < ApplicationController
  def index
    @activity = Activity.find(params[:activity_id])
    @pages = @activity.activity_pages
  end

  def show
  end

  def new
  end

  def edit
  end

end
