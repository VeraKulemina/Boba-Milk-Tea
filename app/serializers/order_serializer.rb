class OrderSerializer < ActiveModel::Serializer
  attributes :id, :date, :comment
end
