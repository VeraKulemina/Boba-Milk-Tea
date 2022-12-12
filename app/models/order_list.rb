class OrderList < ApplicationRecord
  belongs_to :boba
  belongs_to :user
  belongs_to :order
end
