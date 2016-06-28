Rails.application.routes.draw do
  root :to => "static_pages#index"
  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :create]
    resources :users, only: [:new, :create]
    resource :session, only: [:new, :create, :destroy]
  end
end
