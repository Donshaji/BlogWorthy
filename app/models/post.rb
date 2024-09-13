# frozen_string_literal: true

class Post < ApplicationRecord
  belongs_to :post_owner, foreign_key: "post_owner_id", class_name: "User"
  # Validate the presence and length of the title
  validates :title, presence: true, length: { maximum: 125 }

  # Validate that the net vote (upvotes - downvotes) is not negative
  validate :net_vote_cannot_be_negative

  # Validate the presence of the is_blog_worthy field
  validates_inclusion_of :is_blog_worthy, in: [true, false]

  validates :slug, uniqueness: true
  validate :slug_not_changed

  before_create :set_slug

  private

    # Custom validation method to ensure net vote is not negative
    def net_vote_cannot_be_negative
      if upvotes - downvotes < 0
        errors.add(:base, "Net vote cannot be negative")
      end
    end

    def set_slug
      title_slug = title.parameterize
      regex_pattern = "slug #{Constants::DB_REGEX_OPERATOR} ?"
      latest_post_slug = Post.where(
        regex_pattern,
        "^#{title_slug}$|^#{title_slug}-[0-9]+$"
      ).order("LENGTH(slug) DESC", slug: :desc).first&.slug
      slug_count = 0
      if latest_post_slug.present?
        slug_count = latest_post_slug.split("-").last.to_i
        only_one_slug_exists = slug_count == 0
        slug_count = 1 if only_one_slug_exists
      end
      slug_candidate = slug_count.positive? ? "#{title_slug}-#{slug_count + 1}" : title_slug
      self.slug = slug_candidate
    end

    def slug_not_changed
      if slug_changed? && self.persisted?
        errors.add(:slug, "is immutable!")
      end
    end
end
