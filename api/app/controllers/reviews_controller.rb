class ReviewsController < ApplicationController
    before_action :set_review, only: [:update, :destroy]
  
    def create
      @flight = Flight.find_by(id: params[:flight_id])
      @review = @flight.reviews.new(review_params)
      @review.user = current_user
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
      @reviews = @flight.reviews
    end
  
    private
  
    def set_review
      @review = Review.find(params[:id])
    end
  
    def review_params
      params.require(:review).permit(:rating, :comment, :user_id, :flight_id)
    end
  end
  