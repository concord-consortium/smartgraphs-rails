class CreateActivitySteps < ActiveRecord::Migration
  def self.up
    create_table :activity_steps do |t|
      t.references :activity_page
      t.string :url

      t.timestamps
    end
  end

  def self.down
    drop_table :activity_steps
  end
end
