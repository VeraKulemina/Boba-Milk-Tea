class OrderListSerializer < ActiveModel::Serializer
  attributes :id
  has_one :boba
  has_one :user
  has_one :order
end
