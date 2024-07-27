class Like < ApplicationRecord
  has_many :like_associations
  has_many :posts, through: :like_associations, source: :associate, source_type: 'Post'
  has_many :comments, through: :like_associations, source: :associate, source_type: 'Comment'
end
  