class AddCategoryToDevices < ActiveRecord::Migration[6.0]
  def change
    add_reference :devices, :category, foreign_key: true
  end
end
