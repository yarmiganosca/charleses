class InterviewsController < ApplicationController
  # before_filter :authenticate_user!
  
  def index
  end
  
  def show
    interview = Interview.find(params[:id])
    template = interview.respondant.first_name.downcase
    
    render :partial => template
  end
  
  def edit
    @interview = Interview.find(params[:id])
    
    render :partial => "edit"
  end
end
