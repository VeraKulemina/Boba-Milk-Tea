class CreateBobaOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :boba_orders do |t|
      t.belongs_to :boba, null: false, foreign_key: true
      t.belongs_to :order, null: false, foreign_key: true
      t.integer :quantity
      
      t.timestamps
    end
  end
end
