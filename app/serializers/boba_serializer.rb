class BobaSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :category
end
