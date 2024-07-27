class Comment::CreateService < ApplicationService
  def initialize(payload:)
    super

    @parent_id = payload.dig(:parent_id)
    @comment_msg = payload.dig(:comment_msg)
    @date_of_post = payload.dig(:date_of_post)
    @post_id = payload.dig(:post_id)
  end

  def execute
    begin
      validate_post_details
      create_new_comment
      create_new_comment_association
      create_new_like
      create_new_like_association

      result.update(
        success: true,
        message: 'Comment Added Successfully'
      )
    rescue => error
      result.update(
        success: false,
        message: error.message
      )
    end

    result
  end

  private

  def validate_post_details
    @post = Post.find(id: @post_id)
    raise 'Invalid Post' unless @post.present?
  end

  def create_new_comment
    @comment = Comment.create!(
      parent_id: @parent_id,
      date_of_post: @date_of_post,
      comment_msg: @comment_msg,
    )
  end

  def create_new_comment_association
    @comment_association = CommentAssociation.create!(
      post_id: @post_id,
      comment_id: @comment_id
    )
  end
  
  def create_new_like
    @like = Like.create!(
      count: 0
    )
  end

  def create_new_like_association
    @like_association = LikeAssociation.create!(
      associate_id: @comment.id,
      associate_type: Comment.name,
      like_id: @like.id
    )
  end
end
