Rails.application.routes.draw do
  # devise_for :users
  resources :airports, only: [:index]
  resources :users, only: [:index, :create]
  # resources :flights do
  #   get '/reviews', to: 'reviews#reviews_by_flight'
  # end

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
  get '/users/:user_id/bookings', to: 'users#bookings'
  put 'bookings/:id', to:'bookings#update_booking'

  get '/flights/:flight_id/reviews', to: 'reviews#index'
  # get '/flights/:flight_id/reviews', to: 'reviews#show'

  post '/flights/:flight_id/reviews', to: 'reviews#create'
  put '/flights/:flight_id/reviews/:id', to: 'reviews#update'
  delete '/flights/:flight_id/reviews/:id', to: 'reviews#destroy'
  get '/reviews/:id', to: 'reviews#show'
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"


  


  # post '/users', to: 'users#create'
  # get '/users', to: 'users#index'
  # devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', password: 'reset_password', confirmation: 'verification', unlock: 'unlock_account', registration: 'signup', sign_up: '' }, controllers: { passwords: 'passwords' }

 
  
  

  #This will add the following routes:
  # Forget password routes
# new_user_password GET    /reset_password/new(.:format)      passwords#new
# edit_user_password GET    /reset_password/edit(.:format)     passwords#edit
#      user_password PATCH  /reset_password(.:format)          passwords#update
#                    PUT    /reset_password(.:format)          passwords#update
#                    POST   /reset_password(.:format)          passwords#create

# Reset password routes
# cancel_user_registration GET    /signup/cancel(.:format)          registrations#cancel
#    user_registration POST   /signup(.:format)                  registrations#create
# new_user_registration GET    /signup/sign_up(.:format)          registrations#new
# edit_user_registration GET    /signup/edit(.:format)             registrations#edit
#                      PATCH  /signup(.:format)                  registrations#update
#                      PUT    /signup(.:format)                  registrations#update
#                      DELETE /signup(.:format)                  registrations#destroy


  

  
  

end