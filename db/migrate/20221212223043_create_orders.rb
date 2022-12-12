class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.date :date
      t.string :comment
      t.belongs_to :boba, null: false, foreign_key: true

      t.timestamps
    end
  end
end
