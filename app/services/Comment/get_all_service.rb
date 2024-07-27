class Comment::GetAllService < ApplicationService
  def initialize(params:)
    super

    @post_id = params.dig(:post_id)
  end

  def execute
    begin
      validate_params
      fetch_all_comments_of_post

      result.update(
        success: true,
        message: 'All Comments Fetched Successfully',
        comments: @comments
      )
    rescue => error
      result.update(
        message: error.message
      )
    end

    result
  end

  private

  def validate_params
    @post = Post.find(id: @post_id)
    raise 'Invalid Post' unless @post.present?
  end

  def fetch_all_comments_of_post
    @comments = Comment.all_comments_of_post(post_id: @post_id)
  end
end