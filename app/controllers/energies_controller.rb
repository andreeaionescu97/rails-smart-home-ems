class EnergiesController < ApplicationController

  def show
      @device = Device.find(params[:device_id])
      @energy = Energy.find(params[:id])
      # finds all smart devices associate in a home. The viewer shows  daily monthly and yearly
  end

end  

