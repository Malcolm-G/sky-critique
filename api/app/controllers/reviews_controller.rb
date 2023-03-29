class ReviewsController < ApplicationController
    def create
        @review = @flight.reviews.new(review_params)
        @review.user = current_user
        if @review.save
            render json: @review, status: :created
        else
            render json: @review.errors, status: :unprocessable entity
        end
        def update
            if @review.update(review_params)
                render json: @review, status: :ok
            else
                render json: @reviews.errors, status: :unprocessable entity
            end
        end

        def destroy
            @review = Review.find(params[:id])
            @review.destroy
        end
        private

        def review_params
          params.require(:review).permit( :rating, :comment)
        end

    end
end
