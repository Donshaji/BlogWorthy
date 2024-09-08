class Post < ApplicationRecord
  # Validate the presence and length of the title
  validates :title, presence: true, length: { maximum: 125 }

  # Validate that the net vote (upvotes - downvotes) is not negative
  validate :net_vote_cannot_be_negative

  # Validate the presence of the is_blog_worthy field
  validates_inclusion_of :is_blog_worthy, in: [true, false]

  private

  # Custom validation method to ensure net vote is not negative
  def net_vote_cannot_be_negative
    if upvotes - downvotes < 0
      errors.add(:base, "Net vote cannot be negative")
    end
  end
end
