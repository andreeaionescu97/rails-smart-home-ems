class CreateHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :homes do |t|
      t.string :name
      t.text :location
      t.string :eco_function
      t.string :home_away_function
      t.string :history
      t.datetime :daily
      t.integer :bill
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
