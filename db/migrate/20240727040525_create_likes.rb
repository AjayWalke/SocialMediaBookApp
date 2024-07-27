class CreateLikes < ActiveRecord::Migration[7.1]
  def change
    create_table :likes do |t|
      t.integer :count, default: 0, null: false

      t.timestamps
    end
  end
end
