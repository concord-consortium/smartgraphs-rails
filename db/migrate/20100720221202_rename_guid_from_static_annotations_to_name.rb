class RenameGuidFromStaticAnnotationsToName < ActiveRecord::Migration
  def self.up
		rename_column :static_annotations, :guid, :name
	end
  
  def self.down
		rename_column :static_annotations, :name, :guid
  end
end
   