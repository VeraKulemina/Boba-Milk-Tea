class IngredientsController < ApplicationController
    def index
        render json: Ingredient.all
    end


    def show
        ingredient =  Ingredient.find(params[:id])  
        render json: ingredient
    end

    def create
        ingredient =  Ingredient.create! (ingredient_params)
        render json: ingredient, status: :created
    end

    def destroy
        ingredient = Ingredient.find(params[:id])
        ingredient.destroy
        head :no_content
    end

    def update
        ingredient = Ingredient.find(params[:id])
        if ingredient
            ingredient.update(ingredient_params)
          render json: ingredient
        else
          render json: { error: "Boba not found" }, status: :not_found
        end
      end

    private
        def ingredient_params
            params.require(:ingredient).permit(:name)
        end
end
