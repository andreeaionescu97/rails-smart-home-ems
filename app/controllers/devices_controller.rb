class DevicesController < ApplicationController

    def index
        @home = Home.find(params[:home_id])
        @devices = @home.devices
    end


    def show
        @home = Home.find(params[:home_id])
        @device = Device.find(params[:id])
        # @home.find{|device| device == @device}
    end

    # def new
    #     @device = Device.new
    #     @home = Home.find(params[:home_id])
    # end

    def create
        @device = Device.new(device_params)
        @home = Home.find(params[:home_id])
        @device.home = @home
        @device.category = Category.find(params[:device][:category_id])
        if @device.save
            redirect_to home_path(@home)
        else
            render :new
        end
    end


    def device_params
        params.require(:device).permit(:name, :category)
    end
end
