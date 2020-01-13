Rails.application.routes.draw do
  root 'static#index'
  
  namespace :api do
    jsonapi_resources :scores
    
    get "/leaderboard", to: "scores#tops"

    jsonapi_resources :variable_ranges, only: [:index]
    
    jsonapi_resources :users
    # resources :users, only: [:index, :new, :create]
  end
  
  match '*path', to: 'static#index', via: :all
end
