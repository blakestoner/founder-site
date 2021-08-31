class ChangePostSummaryType < ActiveRecord::Migration[6.1]
  def change
    change_column :posts, :summary, :text
  end
end
