class SessionsController < ApplicationController
    before_action :authorize

    skip_before_action :authorize, only: [:create]
    def create
        user = User.find_by(name: params[:name])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors:[user&.errors&.full_messages]},status:401
        end
    end

    def destroy
        session.delete(:user_id)
        head :no_content
    end


     
end
