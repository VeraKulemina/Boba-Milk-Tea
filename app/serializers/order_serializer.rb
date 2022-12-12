class OrderSerializer < ActiveModel::Serializer
  attributes :id, :date, :comment
  has_one :boba
end
