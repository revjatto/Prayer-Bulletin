class CreatePrayers < ActiveRecord::Migration
  def change
    create_table :prayers do |t|
      t.string :title
      t.text :content
      t.string :created_by

      t.timestamps null: false
    end
  end
end
