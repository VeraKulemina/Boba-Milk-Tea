class UsersController < ApplicationController

  before_action :authorize, only: [:show]

  def index
   render json: User.all
  end

 def create
   user = User.create(user_params)
   if user.valid?
     session[:user_id] = user.id
     render json: user, status: :created
   else
     render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
   end
 end

 def show
   user = User.find_by(id: session[:user_id])
   render json: user
 end

 def destroy
   user = User.find(params[:id])
   user.destroy
   head :no_content
 end

 def update
  user = User.find(params[:id])
        if user
          user.update(user_params1)
          render json: user
        else
          render json: { error: "User not found" }, status: :not_found
        end
 end

 private

 def authorize
   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
 end

 def user_params
   params.require(:user).permit(:username, :password, :avatar, :email, :first_name, :last_name)
 end

 def user_params1
  params.require(:user).permit(:username)
end
end
