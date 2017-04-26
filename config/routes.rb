Rails.application.routes.draw do
  root to: "posts#index"
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:create, :index]
    end
  end
end
