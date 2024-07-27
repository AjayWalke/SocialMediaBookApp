class LikeAssociation < ApplicationRecord
  belongs_to :like  
  belongs_to :associate, polymorphic: true
  validates :associate_type, inclusion: { in: %w[Post Comment] }
end
  