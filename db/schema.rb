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

ActiveRecord::Schema.define(:version => 20100806235657) do

  create_table "activities", :force => true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "activity_pages", :force => true do |t|
    t.integer  "activity_id"
    t.string   "name"
    t.integer  "index"
    t.text     "intro_text"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "first_step_id"
  end

  create_table "activity_steps", :force => true do |t|
    t.integer  "activity_page_id"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
