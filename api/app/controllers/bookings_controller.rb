class BookingsController < ApplicationController
  before_action :require_login, only: [:secret_endpoint]

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

  # Example endpoint that requires login
  def secret_endpoint
    render json: { message: "This is a secret endpoint that requires login" }
  end

  private

  def booking_params
    params.require(:booking).permit(:flight_id, :passenger_name, :passenger_email)
  end

  def require_login
    unless current_user
      flash[:error] = "You must be logged in to access this section"
      redirect_to login_path
    end
  end
end