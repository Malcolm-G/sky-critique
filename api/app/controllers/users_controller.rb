class UsersController < ApplicationController
    def create
        user =User.new(user_params)
        render json: user
    end

    private
    def user_params
        params.permit(:name, :email, :password_digest)
    end

end
