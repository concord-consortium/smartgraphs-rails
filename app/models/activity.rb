class Activity < ActiveRecord::Base
  has_many :guide_pages
end

# == Schema Information
#
# Table name: activities
#
#  id         :integer         not null, primary key
#  created_at :datetime
#  updated_at :datetime
#  name       :string(255)
#

