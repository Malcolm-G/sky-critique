class BookingsController < ApplicationController

  before_action :authorize

    # GET /bookings
    def index
      @bookings = Booking.all
      render json: @bookings
    end
  
    # POST /bookings
    def create
      @booking = Booking.new(booking_params)
      if @booking.save
        render json: @booking, status: :created
      else
        render json: { errors: @booking.errors }, status: :unprocessable_entity
      end
    end
  
    # DELETE /bookings/:id
    def destroy
      @booking = Booking.find(params[:id])
      @booking.destroy
      head :no_content
    end
  
    private
  
    def booking_params
      params.require(:booking).permit(:flight_id, :passenger_name, :passenger_email)
    end
  
  end