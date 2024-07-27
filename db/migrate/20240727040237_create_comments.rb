class CreateComments < ActiveRecord::Migration[7.1]
  def change
    create_table :comments do |t|
      t.integer :parent_id
      t.text :comment_msg, null: false
      t.datetime :date_of_post, null: false

      t.timestamps
    end

    add_index :comments, :parent_id
  end
end
