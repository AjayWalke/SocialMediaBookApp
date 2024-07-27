class CreateCommentAssociations < ActiveRecord::Migration[7.1]
  def change
    create_table :comment_associations do |t|
      t.integer :post_id, null: false
      t.integer :comment_id, null: false

      t.timestamps
    end

    add_index :comment_associations, :post_id
    add_index :comment_associations, :comment_id
    add_foreign_key :comment_associations, :posts
    add_foreign_key :comment_associations, :comments
  end
end
