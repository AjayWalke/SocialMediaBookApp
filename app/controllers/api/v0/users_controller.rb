module Api
  module V0
    class UsersController < ApplicationController
      before_action :set_params, only: %i[index]
      before_action :set_payload, only: %i[create]
      skip_before_action :verify_authenticity_token

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
        @payload = params.permit(:username, :email, :address, :password, :name).to_h
      end

      def set_params
        @params = params.permit(:email, :password).to_h
      end

      def render_response(result)
        if result.dig(:success)
          render json: result, status: :ok
        else
          render json: result, status: :unprocessable_entity
        end
      end
    end
  end
end

# payload = {username: 'test User', email: 'test@example.com', address: 'test', password: 'password', name: 'test1'}
# params = {email: 't1@email.com', password: '12345'}