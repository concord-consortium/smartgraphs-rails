class RenameGuidePageSequenceToActivity < ActiveRecord::Migration
  def self.up
    rename_table :guide_page_sequences, :activities
  end

  def self.down
    rename_table :activities, :guide_page_sequences
  end
end
