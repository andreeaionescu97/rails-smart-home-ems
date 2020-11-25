Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :homes do
    resources :history, only: [ :show]
    resources :daily, only: [:show]
    resources :devices, only: [:new, :show, :create ]
    end    
  
    resources :devices do
      resources :energies, only: [:show]
    end
  end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
