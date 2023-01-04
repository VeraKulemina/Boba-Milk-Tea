class BobaOrdersController < ApplicationController
    def index
        render json: BobaOrder.all
    end


    def show
        boba_order =  BobaOrder.find(params[:id])  
        render json: boba_order
    end

    def create
        boba_order =  BobaOrder.create! (bobaorder_params)
        render json: boba_order, status: :created
    end

    def destroy
        boba_order = BobaOrder.find(params[:id])
        boba_order.destroy
        head :no_content
    end

    def update
        boba_order = BobaOrder.find(params[:id])
        if boba_order
            boba_order.update(bobaorder_params)
          render json: boba_order
        else
          render json: { error: "Boba order not found" }, status: :not_found
        end
      end

    private
        def bobaorder_params
            params.require(:boba_order).permit(:id, :order_id, :boba_id, :quantity)
        end
end
