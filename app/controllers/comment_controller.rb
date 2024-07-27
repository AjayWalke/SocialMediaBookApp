class CommentController < ApplicationController
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
    @payload = params.permit(:post_id, :parent_id, :date_of_post, :comment_msg).wida
  end

  def set_params
    @params = params.permit(:post_id).wida
  end

  def render_response(result)
    if result.success
      render json: result, status: :ok
    else
      render json: result, status: :unauthorized_entity
    end
  end
end
