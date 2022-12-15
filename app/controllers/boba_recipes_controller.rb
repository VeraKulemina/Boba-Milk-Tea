class BobaRecipesController < ApplicationController
    def index
        render json: BobaRecipe.all
    end


    def show
        boba_recipe =  BobaRecipe.find(params[:id])  
        render json: boba_recipe
    end

    def create
        boba_recipe =  BobaRecipe.create! (bobarecipe_params)
        render json: boba_recipe, status: :created
    end

    def destroy
        boba_recipe = BobaRecipe.find(params[:id])
        boba_recipe.destroy
        head :no_content
    end

    def update
        boba_recipe = BobaRecipe.find(params[:id])
        if boba_recipe
            boba_recipe.update(bobarecipe_params)
          render json: boba_recipe
        else
          render json: { error: "Boba Recipe not found" }, status: :not_found
        end
      end

    private
        def bobarecipe_params
            params.require(:boba_recipe).permit(:boba_id, :ingredient_id)
        end

end
