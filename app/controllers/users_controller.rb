class UsersController < ApplicationController
  # before_filter :authenticate_user!

  def index
    @users = User.all
  end

  def show
    respond_to do |format|
      format.html { user }
      format.json { render json: user }
    end
  end

  def interviews
    # params[:scope] = "questioner"
    # params[:scope] = "respondant"

    @interview = Interview.find_by :questioner_id => params[:id] if params[:scope].eql? "questioner"
    @interview = Interview.find_by :respondant_id => params[:id] if params[:scope].eql? "respondant"
    @interview = Interview.find_by :respondant_id => params[:id] if !params[:scope].present?

    @interview
  end

  private

  def user
    @user ||= User.find(params[:id])
  end

end
