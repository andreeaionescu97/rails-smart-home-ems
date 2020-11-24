class HomesController < ApplicationController
    def index
        @homes = Home.all
    end

    def new
        @home = Home.new
    end

    def create
        
    end

    def edit
        
    end

    def show
        @home = Home.find(params[:id])
    end

    def update
        
    end

    def destroy
        @home = home.find(params[:id])
        @home.destroy
        redirect_to homes_path
    end

    private

    def homes_params
        params.require(:home).permit(:name, :location)
    end
    
    
    
    
    
    
    
    
end
