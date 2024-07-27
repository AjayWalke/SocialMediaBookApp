class Post < ApplicationRecord
  belongs_to :user
  has_many :comment_associations
  has_many :comments, through: :comment_associations
  has_many :like_associations, as: :associate
  has_many :likes, through: :like_associations
  
  validates :user_id, presence: true
  validates :date_of_post, presence: true
  validates :post_msg, presence: true

  def self.user_posts_details(user_id:)
    Post
      .joins(like_associations: :like)
      .where(
        posts: { user_id: user_id }
      )
      .select(
        'posts.*',
        'likes.count as like_count'
      )
  end
end
