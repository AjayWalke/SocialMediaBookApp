class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.datetime :date_of_post, null: false
      t.string :image_link
      t.text :post_msg

      t.timestamps
    end

    add_index :posts, :user_id
    add_foreign_key :posts, :users
  end
end
