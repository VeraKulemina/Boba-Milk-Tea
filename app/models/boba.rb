class Boba < ApplicationRecord
  has_many :boba_orders
  has_many :orders, through: :boba_orders
#   has_many :boba_recipes
#   has_many :ingredients, through: :boba_recipes

end
