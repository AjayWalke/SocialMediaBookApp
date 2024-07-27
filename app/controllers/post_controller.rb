class PostController < ApplicationController
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
    @payload = params.permit(:user_id, :date_of_post, :image_link, :post_msg).wida
  end

  def set_params
    @params = params.permit(:user_id).wida
  end

  def render_response(result)
    if result.success
      render json: result, status: :ok
    else
      render json: result, status: :unauthorized_entity
    end
  end
end
