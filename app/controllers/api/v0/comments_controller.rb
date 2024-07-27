module Api
  module V0
    class CommentsController < ApplicationController
      before_action :set_params, only: %i[getAll]
      before_action :set_payload, only: %i[create]
      skip_before_action :verify_authenticity_token

      def create
        result = Comment::CreateService.new(
          payload: @payload
        ).execute

        render_response(result)
      end

      def getAll
        result = Comment::GetAllService.new(
          params: @params
        ).execute

        render_response(result)
      end

      private

      def set_payload
        @payload = params.permit(:post_id, :parent_id, :date_of_post, :comment_msg).to_h
      end

      def set_params
        @params = params.permit(:post_id).to_h
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
