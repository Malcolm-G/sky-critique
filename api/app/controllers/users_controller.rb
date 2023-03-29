class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end
    def create
        @user = User.create(create_param)
            if @user.save
               UserMailer.welcome_email(@user).deliver_now
        render json: user
    end

    private
    def user_params
        params.permit(:name, :email, :password)
    end

end
