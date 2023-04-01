class FlightsController < ApplicationController
  before_action :authorize

  # def index
  #   @flights = Flight.all
  #   render json: @flights, include: [:origin, :destination], except: [:origin_id, :destination_id], status: :ok
  # end
  def index
    flights = Flight.all.map do |flight|
      {
        id: flight.id,
        name: flight.name,
        origin: flight.origin.name,
        destination: flight.destination.name,
        departure_time: flight.departure_time,
        duration: flight.duration,
        image_url: flight.image_url
      }
    end
  
    render json: flights, status: :ok
  end
  

  def show
    @flight = Flight.find(params[:id])
    render json: { 
      name: @flight.name, 
      origin: @flight.origin.name, 
      destination: @flight.destination.name, 
      departure_time: @flight.departure_time, 
      duration: @flight.duration, 
      image_url: @flight.image_url 
    }, status: :ok
  end
  
end


