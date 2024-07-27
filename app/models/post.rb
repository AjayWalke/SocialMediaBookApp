class Post < ApplicationRecord
  belongs_to :user
  has_many :comment_associations
  has_many :comments, through: :comment_associations
  has_many :like_associations
  has_many :likes, through: :like_associations
  
  validates :user_id, presence: true
  validates :date_of_post, presence: true
  validates :post_msg, presence: true
end
