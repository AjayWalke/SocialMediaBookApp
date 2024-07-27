class CommentAssociation < ApplicationRecord
  belongs_to :post
  belongs_to :comment
  
  validates :post_id, presence: true
  validates :comment_id, presence: true
end