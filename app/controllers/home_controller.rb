class HomeController < ApplicationController
  def index
    @users = User.all
  end
  
  def advocare
    render "home/index"
  end
end
