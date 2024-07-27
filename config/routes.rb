Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  

  # version v0 api's
  namespace :api do
    namespace :v0 do
      resources :users, only: [:create, :index]
      resources :posts, only: [:create, :index]
      resources :comments, only: [:create, :index] do
        collection do
          get 'get-all', action: :get_all
          get 'child-comment', action: :child_comment
        end
      end
      resources :likes, only: [] do
        collection do
          get 'inc', action: :inc
        end
      end
    end
  end
end
