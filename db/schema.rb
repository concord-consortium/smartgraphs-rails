# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20100702173922) do

  create_table "guide_page_sequences", :force => true do |t|
    t.string   "guid"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "guide_pages", :force => true do |t|
    t.string   "guide_page_sequence_id"
    t.integer  "index"
    t.string   "title"
    t.text     "introText"
    t.string   "firstDialogTurn_id"
    t.string   "dataSeries_id"
    t.string   "axes_id"
    t.boolean  "sensorAppletShouldBeEnabled"
    t.boolean  "shoulDdShowImage"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
