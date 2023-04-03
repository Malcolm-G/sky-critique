class UsersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]
    wrap_parameters format: []


    def index
        @users = User.all
        render json: @users, status: :ok
    end
    # def bookings
    #     @user = User.find(params[:user_id])
    #     @bookings = @user.bookings.includes(flight: [:origin, :destination])
    #     render json: @bookings.as_json(include: { flight: { only: [:name, :departure_time, :duration, :image_url], 
    #                                                          include: { origin: { only: [:name] }, 
    #                                                                    destination: { only: [:name] } } } })
    #   end
    def bookings
        @user = User.find(params[:user_id])
        @bookings = @user.bookings.includes(flight: [:origin, :destination])
        render json: @bookings.as_json(include: { 
          flight: { 
            only: [:name, :departure_time, :duration, :image_url], 
            include: { 
              origin: { only: [:name] }, 
              destination: { only: [:name] } 
            } 
          },
          user: {
            only: [:name]
          }
        })
      end
      

    def show
        user = User.find(session[:user_id])
        if user
            render json: user, status: :created
        else
            render json:{message:'something went wrong'}, status: :unauthorized
        end
    end
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json:{errors:user.errors.full_messages}, status:422
        end
    end
    def reset_password
        user = User.find_by(email: params[:email])
        user.update!(password: params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      end
        # def create
        #     @user = User.new(user_params)
        
        #     if @user.save
        #       render json: @user, status: :created
        #     else
        #       render json: @user.errors, status: :unprocessable_entity
        #     end
        # end
    private
    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end

end
