class CreateEnergies < ActiveRecord::Migration[6.0]
  def change
    create_table :energies do |t|
      t.integer :kilowatts
      t.timestamp :hours_start_at
      t.integer :price
      t.references :device, null: false, foreign_key: true

      t.timestamps
    end
  end
end
