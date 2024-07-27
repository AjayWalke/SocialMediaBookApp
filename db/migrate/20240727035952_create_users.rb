class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :address
      t.string :name

      t.timestamps
    end
  end
end
