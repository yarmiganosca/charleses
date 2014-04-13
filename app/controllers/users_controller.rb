class UsersController < ApplicationController
  before_filter :authenticate_user!

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end
  
  def interviews
    # params[:scope] = "questioner"
    # params[:scope] = "respondant"
    
    @interview = Interview.find_by :questioner_id => params[:id] if params[:scope].eql? "questioner"
    @interview = Interview.find_by :respondant_id => params[:id] if params[:scope].eql? "respondant"
    @interview = Interview.find_by :respondant_id => params[:id] if !params[:scope].present?
    
    @interview
  end

end
