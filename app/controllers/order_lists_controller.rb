class OrderListsController < ApplicationController
    def index
        render json: OrderList.all
    end


    def show
        order_list =  OrderList.find(params[:id])  
        render json: order_list
    end

    def create
        order_list =  OrderList.create! (orderlist_params)
        render json: order_list, status: :created
    end

    def destroy
        order_list = OrderList.find(params[:id])
        order_list.destroy
        head :no_content
    end

    def update
        order_list = OrderList.find(params[:id])
        if order_list
            order_list.update(orderlist_params)
          render json: order_list
        else
          render json: { error: "Order List not found" }, status: :not_found
        end
      end

    private
        def orderlist_params
            params.require(:order_list).permit(:order_id, :boba_id, :user_id)
        end
end
