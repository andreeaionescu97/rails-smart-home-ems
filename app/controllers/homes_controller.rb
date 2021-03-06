class HomesController < ApplicationController
    def index
        @homes = current_user.homes

        @markers = @homes.geocoded.map do |home|
            {
              lat: home.latitude,
              lng: home.longitude,
              infoWindow: render_to_string(partial: "info_window", locals: { home: home })
            }
        end

    end

    def show
        @home = Home.find(params[:id])
        @devices = @home.devices
        @device = Device.new
        @categories = Category.all
    end

    def new
        # @user = current_user #i was a bit confused do we need this everywhere
        @home = Home.new
    end

    def create
        # @user = current_user
        @home = Home.create(home_params)
        # @home = Home.find(params[:id])
        @home.user = current_user
        if @home.save!
            redirect_to home_path(@home)
        else
            render :new
        end
    end

    def edit
        # @user = current_user
        @home = Home.find(params[:id])
    end

    def update
        # @user = current_user
        @home = Home.find(params[:id])
        # if @home.update_attributes(home_params)
        if @home.update(home_params)
          flash[:success] = "Task updated!"
          redirect_to homes_path(@homes)
        else
          render :edit
        end
        # @homes = Home.find(params[:id])
		# @homes.update(home_params)
		# redirect_to homes_path(@homes)
    end

    def destroy
        @home = Home.find(params[:id])
        @home.destroy
        redirect_to homes_path
    end


    private

    def home_params
        params.require(:home).permit(:name, :location)
    end

end
