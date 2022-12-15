Rails.application.routes.draw do
  resources :order_lists,only: [:index, :show, :create, :destroy, :update]
  resources :orders,only: [:index, :show, :create, :destroy, :update]
  resources :boba_recipes, only: [:index, :show, :create, :destroy, :update]
  resources :ingredients, only: [:index, :show, :create, :destroy, :update]
  resources :bobas, only: [:index, :show, :create, :destroy, :update]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  resources :users, only: [:index, :update, :destroy]
end
