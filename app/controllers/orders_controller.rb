class OrdersController < ApplicationController
    def index
        render json: Order.all
    end


    def show
        order =  Order.find(params[:id])  
        render json: order
    end

    def create
        order =  Order.create! (order_params)
        render json: order, status: :created
    end

    def destroy
        order = Order.find(params[:id])
        order.destroy
        head :no_content
    end

    def update
        order = Order.find(params[:id])
        if order
            order.update(order_params)
          render json: order
        else
          render json: { error: "Order not found" }, status: :not_found
        end
      end

    private
        def order_params
            params.require(:order).permit(:date, :boba_id, :comment)
        end
end
