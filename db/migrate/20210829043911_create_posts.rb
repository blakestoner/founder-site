class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :title
      t.text :summary
      t.text :link
      t.text :content

      t.timestamps
    end
  end
end
