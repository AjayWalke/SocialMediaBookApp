class Comment::ChildCommentService < ApplicationService
  def initialize(params:)
    super()

    @parent_id = params.dig(:parent_id)
  end

  def execute
    begin
      validate_params
      fetch_child_comments

      result.update(
        success: true,
        message: 'All Comments Fetched Successfully',
        data: @comments,
        parent_msg: @parent.comment_msg
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
    @parent = Comment.find(@parent_id)
  end

  def fetch_child_comments
    @comments = Comment.fetch_child_comments(parent_id: @parent_id)
  end
end
