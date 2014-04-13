Rails.application.routes.draw do
  root :to => "home#index"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
  resources :interviews
  
  get 'users/:id/interviews' => 'users#interviews' #, as: :purchase
end
