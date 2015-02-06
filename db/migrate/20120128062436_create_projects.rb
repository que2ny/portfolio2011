class CreateProjects < ActiveRecord::Migration
  def self.up
    create_table :projects do |t|
      t.string :name
      t.string :tagline
      t.string :content
      t.string :title
      t.string :small_image
      t.timestamps
    end
  end

  def self.down
    drop_table :projects
  end
end
