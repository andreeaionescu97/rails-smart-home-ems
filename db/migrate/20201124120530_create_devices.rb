class CreateDevices < ActiveRecord::Migration[6.0]
  def change
    create_table :devices do |t|
      t.string :name
      t.string :category
      t.string :history
      t.datetime :daily
      t.references :home, null: false, foreign_key: true

      t.timestamps
    end
  end
end
