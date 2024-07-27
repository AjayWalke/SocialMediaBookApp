class UserController < ApplicationController
  def create
    result = User::CreateService.new(
      payload: @payload
    ).execute

    render_response(result)
  end

  def index
    result = User::IndexService.new(
      params: @params
    ).execute

    render_response(result)
  end

  private

  def set_payload
    @payload = params.permit(:username, :email, :address, :password, :name).wida
  end

  def set_params
    @params = params.permit(:email, :password).wida
  end

  def render_response(result)
    if result.success
      render json: result, status: :ok
    else
      render json: result, status: :unauthorized_entity
    end
  end
end

# payload = {username: 'test User', email: 'test@example.com', address: 'test', password: 'password', name: 'test1'}
# params = {email: 't1@email.com', password: '12345'}