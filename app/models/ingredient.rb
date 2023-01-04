class Ingredient < ApplicationRecord
    has_many :boba_recipes
    has_many :bobas, through: :boba_recipes
end
