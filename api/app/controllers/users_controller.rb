class UsersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]
    wrap_parameters format: []


    def index
        @users = User.all
        render json: @users, status: :ok
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
