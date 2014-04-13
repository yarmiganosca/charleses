class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :record_user_email

  private

  def after_sign_in_path_for(resource)
    "/#/users/#{User.find_by_email(params[:user][:email]).id}/home"
  end

  def record_user_email
    @email = params[:email]
  end
end
