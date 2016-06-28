class Api::SessionsController < ApplicationController

  def new
    @user = Api::User.new
    render :new
  end

  def create
    @user = Api::User.find_by_credentials(user_params[:username], user_params[:password])

    if @user.nil?
      flash[:errors] = "invalid username/password"
      render json: {base: flash[:errors]}, status: 401
    else
      login_user!(@user)
      render :show
    end
  end

  def destroy
    logout_user!()
    session[:session_token] = nil
    render {}
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
