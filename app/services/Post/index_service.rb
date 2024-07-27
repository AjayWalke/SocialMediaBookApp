class Post::IndexService < ApplicationService
  def initialize(params:)
    super()

    @user_id = params.dig(:user_id)
  end

  def execute
    begin
      validate_params
      fetch_user_posts

      result.update(
        success: true,
        message: 'Posts Fetched Successfully',
        posts: @posts
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
    @user = User.find(@user_id)
    raise 'Invalid User' unless @user.present?
  end

  def fetch_user_posts
    @posts = Post.user_posts_details(user_id: @user_id)
  end
end