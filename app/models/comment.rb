class Comment < ApplicationRecord
  has_many :like_associations, as: :associate
  has_many :likes, through: :like_associations
  has_one :comment_association
  
  validates :comment_msg, presence: true
  validates :date_of_post, presence: true

  def self.all_comments_of_post(post_id:)
    Comment
      .joins(:comment_association)
      .joins(like_associations: :like)
      .joins("LEFT JOIN comments AS child_comments ON comments.id = child_comments.parent_id")
      .where(
       comment_association: { post_id: post_id }
      )
      .select(
       'comments.id',
       'comments.parent_id',
       'comments.comment_msg',
       'comments.date_of_post',
       'comment_association.post_id',
       'likes.count as like_count',
       "likes.id as like_id",
       'COUNT(child_comments.id) AS child_comments_count'
      )
      .group(
        "comments.id",
        "comment_association.post_id",
        "likes.count",
        "likes.id"
      )
      .order(:date_of_post)
  end

  def self.fetch_child_comments(parent_id:)
    Comment
      .joins("LEFT JOIN comments AS child_comments ON comments.id = child_comments.parent_id")
      .joins(like_associations: :like)
      .where(parent_id: parent_id)
      .order(:date_of_post)
      .select(
        'comments.id',
        'comments.parent_id',
        'comments.comment_msg',
        'comments.date_of_post',
        'likes.count as like_count',
        'likes.id as like_id',
        'COUNT(child_comments.id) AS child_comments_count'
      )
      .group(
        :id,
        'likes.id',
        "likes.count"
      )
      .order(:date_of_post)
  end

  def self.total_count_of_child_comments(comment_id:)
    Comment.where(parent_id: comment_id).count || 0
  end
end
  