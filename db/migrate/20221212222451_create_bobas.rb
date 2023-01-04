class CreateBobas < ActiveRecord::Migration[7.0]
  def change
    create_table :bobas do |t|
      t.string :name
      t.string :image
      t.float :price
      t.string :category

      t.timestamps
    end
  end
end
