class BobaOrderSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  belongs_to :boba
  belongs_to :order
  
end
