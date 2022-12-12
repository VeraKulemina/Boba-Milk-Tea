class BobaRecipeSerializer < ActiveModel::Serializer
  attributes :id
  has_one :boba
  has_one :ingredient
end
