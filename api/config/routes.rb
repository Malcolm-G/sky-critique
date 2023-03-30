Rails.application.routes.draw do
  # devise_for :users
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
  get '/flights/:flight_id/reviews', to: 'reviews#index'
  post '/flights/:flight_id/reviews', to: 'reviews#create'
  put '/flights/:flight_id/reviews/:id', to: 'reviews#update'
  delete '/flights/:flight_id/reviews/:id', to: 'reviews#destroy'
  get '/reviews/:id', to: 'reviews#show'
  post '/users', to: 'users#create'
  get '/users', to: 'users#index'
  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', password: 'reset_password', confirmation: 'verification', unlock: 'unlock_account', registration: 'signup', sign_up: '' }, controllers: { passwords: 'passwords' }

 
  
  

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