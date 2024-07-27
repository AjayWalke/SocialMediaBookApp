module Api
  module V0
    class LikesController < ApplicationController
      before_action :set_payload, only: %i[inc]
      skip_before_action :verify_authenticity_token

      def inc
        result = Like::IncService.new(
          payload: @payload
        ).execute

        render_response(result)
      end

      private

      def set_payload
        @payload = payload.permit(:like_id).to_h
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
