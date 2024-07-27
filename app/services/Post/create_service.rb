class Post::CreateService < ApplicationService
  def initialize(payload:)
    super

    @user_id = payload.dig(:user_id)
    @date_of_post = payload.dig(:date_of_post)
    @image_link = payload.dig(:image_link)
    @post_msg = payload.dig(:post_msg)
  end

  def execute
    begin
      validate_post_details
      create_new_post
      create_new_like
      create_new_like_association

      result.update(
        success: true,
        message: 'New Post Created Successfully'
      )
    rescue => error
        result.update(
            message: error.message
        )
    end

    result
  end

  private

  def validate_post_details
    @user = User.find(id: @user_id)
    raise 'Invalid User' unless @user.present?

    raise 'Empty Post Can\'t be Added' unless validate_payload
  end

  def create_new_post
    @post = Post.create!(
        user_id: @user_id,
        date_of_post: @date_of_post,
        image_link: @image_link,
        post_msg: @post_msg
    )
  end

  def create_new_like
    @like = Like.create!(
      count: 0
    )
  end

  def create_new_like_association
    @like_association = LikeAssociation.create!(
      associate_type: Post.name,
      associate_id: @post.id,
      like_id: @like.id

    )
  end

  def validate_payload
    @image_link.present? && @post_msg.present?
  end
end
