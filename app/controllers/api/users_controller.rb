class Api::UsersController < ApplicationController

  def new
    @user = Api::User.new
    render :new
  end

  def create
    @user = Api::User.new(user_params)

    if @user.save
      login_user!(@user)
      render :show
    else
      flash[:errors] = @user.errors.full_messages
      render json: {base: flash[:errors]}, status: 500
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_digest, :session_token)
  end


end
