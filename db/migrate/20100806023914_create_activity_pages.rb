class CreateActivityPages < ActiveRecord::Migration
  def self.up
    create_table :activity_pages do |t|
      t.string :name
      t.integer :index
      t.text :intro_text

      t.timestamps
    end
  end

  def self.down
    drop_table :activity_pages
  end
end
