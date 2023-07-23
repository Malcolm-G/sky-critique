class CreateFlights < ActiveRecord::Migration[7.0]
  def change
    create_table :flights do |t|
      t.string :name
      t.references :origin, foreign_key: { to_table: :airports }
      t.references :destination, foreign_key: { to_table: :airports }
      t.datetime :departure_time
      t.integer :duration
      t.string :image_url

      t.timestamps
    end
  end
end
