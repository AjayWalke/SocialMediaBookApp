module Api
  module V0
    class PostsController < ApplicationController
      before_action :set_params, only: %i[index]
      before_action :set_payload, only: %i[create]
      skip_before_action :verify_authenticity_token

      def create
        result = Post::CreateService.new(
          payload: @payload
        ).execute

        render_response(result)
      end

      def index
        result = Post::IndexService.new(
          params: @params
        ).execute

        render_response(result)
      end

      private

      def set_payload
        @payload = params.permit(:user_id, :date_of_post, :image_link, :post_msg).to_h
      end

      def set_params
        @params = params.permit(:user_id).to_h
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