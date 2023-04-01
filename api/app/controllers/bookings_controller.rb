class BookingsController < ApplicationController

  before_action :authorize

    # GET /bookings
    def index
      @bookings = Booking.all
      render json: @bookings
    end
  
    def update_booking
      @booking = Booking.find(params[:id])
    
      if @booking.update(booking_update_params)
        render json: @booking.as_json(include: { flight: { only: [:name, :departure_time, :duration, :image_url], 
                                                           include: { origin: { only: [:name] }, 
                                                                     destination: { only: [:name] } } },
                                                 user: { only: [:name, :email] } }), status: :ok
      else
        render json: { errors: @booking.errors.full_messages }, status: :unprocessable_entity
      end
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

  def booking_update_params
    params.require(:booking).permit(:passenger_name, :passenger_email)
  end
  
  end