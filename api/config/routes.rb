Rails.application.routes.draw do
  # resources :airports
  # resources :reviews
  # resources :bookings, only: []
  resources :flights, only: [:index, :show]
  # resources :users
  resources :bookings, only: [:index, :create, :destroy]
  # get '/flights', to: 'flights#index'
  # get '/flights/:id', to: 'flights#show'
  get '/bookings', to: 'bookings#index'
  post '/bookings', to: 'bookings#create'
  delete '/bookings/:id', to: 'bookings#destroy'
  post '/flights/:flight_id/reviews', to: 'reviews#create'
  put '/flights/:flight_id/reviews/:id', to: 'reviews#update'
  delete '/flights/:flight_id/reviews/:id', to: 'reviews#destroy'
  get '/reviews/:id', to: 'reviews#show'
  post '/users', to: 'users#create'
  get '/users', to: 'users#index'
  

  
  

end