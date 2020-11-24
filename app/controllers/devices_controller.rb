class DevicesController < ApplicationController
    def show
        @device = Device.find(params[:id])

    end

    def new
        @device = Device.new
        @home = Home.find(params[:home_id])
    end

    def create
        @device = Device.new(device_params)
        @home = Home.find(params[:home_id])
        @device.home = @home
        if @device.save
            redirect_to home_path(@home)
        else
            render :new
        end
    end
end
