class LikeController < ApplicationController
  def inc
    result = Like::IncService.new(
      payload: @payload
    ).execute

    render_response(result)
  end

  private

  def set_payload
    @payload = payload.permit(:like_id).wida
  end

  def render_response(result)
    if result.success
      render json: result, status: :ok
    else
      render json: result, status: :unauthorized_entity
    end
  end
end
