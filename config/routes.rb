Rails.application.routes.draw do
  root :to => "home#advocare"
  # get 'advocare' => 'home#advocare'

  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
  resources :interviews
  
  get 'users/:id/interviews' => 'users#interviews'
  match 'interview_responses' => 'interview_responses#responses', :via => [:get, :put]
end
