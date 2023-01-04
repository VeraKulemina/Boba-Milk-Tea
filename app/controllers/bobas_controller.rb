class BobasController < ApplicationController
    def index
        render json: Boba.all
    end


    def show
        boba =  Boba.find(params[:id])  
        render json: boba
    end

    def create
        boba =  Boba.create!(boba_params)
        render json: boba, status: :created
    end

    def destroy
        boba = Boba.find(params[:id])
        boba.destroy
        head :no_content
    end

    def update
        boba = Boba.find(params[:id])
        if boba
            boba.update(boba_params)
          render json: boba
        else
          render json: { error: "Boba not found" }, status: :not_found
        end
      end

    private
        def boba_params
            params.require(:boba).permit(:name, :picture, :price)
        end

end
