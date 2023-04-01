class ReviewsController < ApplicationController
  before_action :authorize

  before_action :set_review, only: [:update, :destroy]
  
    def create
      @flight = Flight.find_by(id: params[:flight_id])
      @review = @flight.reviews.new(review_params)
#       @review.user = current_user
      if @review.save
        render json: @review, status: :created
      else
        render json: @review.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @review.update(review_params)
        render json: @review, status: :ok
      else
        render json: @review.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @review.destroy
    end
    def index
      @flight = Flight.find(params[:flight_id])
      @reviews = @flight.reviews.includes(:user)
      render json: @reviews.map { |review| review.as_json.except('user_id').merge(user_name: review.user.name) }
    end
    def flight_reviews
      @flight = Flight.find(params[:flight_id])
      @reviews = @flight.reviews.includes(:user)
      render json: { flight: @flight.as_json(only: [:id, :name]), route: @flight.route.as_json(only: [:id, :origin_name, :destination_name]), reviews: @reviews.as_json(except: [:user_id], methods: [:user_name]) }
    end
    
    
    
    # def index
    #   @flight = Flight.find(params[:flight_id])
    #   @reviews = @flight.reviews
    #   render json: @reviews
    # end
    # def show
    #   @review = Review.find(params[:id])
    #   render json: { 
    #     id: @review.id, 
    #     content: @review.content, 
    #     rating: @review.rating, 
    #     flight_id: @review.flight_id, 
    #     user_name: @review.user.name 
    #   }, status: :ok
    # end
  
    private
  
    def set_review
      @review = Review.find(params[:id])
    end
  
    def review_params
      params.require(:review).permit(:rating, :comment, :user_id, :flight_id)
    end
  end
  
