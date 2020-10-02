class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :pTitle
      t.string :pInfo
      t.string :pBody
      t.string :pImg

      t.timestamps
    end
  end
end
