class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :comments
  has_many :like_associations
  has_many :likes, through: :like_associations
  validates :username, presence: true, uniqueness: true
end
  