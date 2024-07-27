class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
  has_many :like_associations, as: :likeable
  has_many :likes, through: :like_associations
  has_one :comment_association
  
  validates :comment_msg, presence: true
  validates :date_of_post, presence: true

  def self.all_comments_of_post(post_id:)
    Comment
     .joins(:comment_association)
     .join(like_association: :like)
     .where(
      comment_association: { post_id: post_id }
     )
     .select(
      'comments.*',
      'comment_associations.post_id',
      'likes.count as like_count'
     )
  end
end
  