class ApplicationController < ActionController::API
    def authorize
        user_id = session[:user_id]
        unless session[:user_id]
          # app_response(message:{errors:'not logged in'}, status: :unauthorized)
          render json:{errors:['not logged in']}, status: :unauthorized
        end
      end
end
####
