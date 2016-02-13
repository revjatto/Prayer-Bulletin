class PrayersController < ApplicationController
    
    
def home
  end

def prayer
end
    
def index
@prayers = Prayer.all.order('created_at DESC')
end



def new
  @prayer = Prayer.new
end

 def show

 @prayer = Prayer.find(params[:id])
end
    

def create
 @prayer = Prayer.new(prayer_params)
    if @prayer.save
     redirect_to @prayer
    else
    render 'new'
 end
end

    def edit
        @prayer = Prayer.find(params[:id])
    end
    
def update
@prayer = Prayer.find(params[:id])
    if @prayer.update(params[:prayer].permit(:title, :content, :created_by))
        redirect_to @prayer
    else
      render 'edit'
    end   
end

def destroy
    @prayer = Prayer.find(params[:id])
    @prayer.destroy
    redirect_to prayers_path

end
    

 private

def prayer_params
  params.require(:prayer).permit(:title, :content, :created_by)

    end

end

 
