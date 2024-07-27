class CreateLikeAssociations < ActiveRecord::Migration[7.1]
  def change
    create_table :like_associations do |t|
      t.string :associate_type, null: false
      t.integer :associate_id, null: false
      t.integer :like_id, null: false

      t.timestamps
    end

    add_index :like_associations, [:associate_type, :associate_id]
    add_index :like_associations, :like_id
    add_foreign_key :like_associations, :likes
  end
end
