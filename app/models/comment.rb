class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
  has_many :like_associations, as: :likeable
  has_many :likes, through: :like_associations
  
  validates :comment_msg, presence: true
  validates :date_of_post, presence: true
end
  