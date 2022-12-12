Rails.application.routes.draw do
  resources :order_lists
  resources :orders
  resources :boba_recipes
  resources :ingredients
  resources :bobas
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
end
