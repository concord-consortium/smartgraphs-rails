require 'spec_helper'

describe ActivityPage do
  before(:each) do
    @valid_attributes = {
      :name => "value for name",
      :index => 1,
      :intro_text => "value for intro_text"
    }
  end

  it "should create a new instance given valid attributes" do
    ActivityPage.create!(@valid_attributes)
  end
end
