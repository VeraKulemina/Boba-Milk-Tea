class Order < ApplicationRecord
belongs_to :user
has_many :boba_orders, dependent: :destroy
has_many :bobas, through: :boba_orders
end
