# frozen_string_literal: true

class User < ApplicationRecord
  # Constants
  MAX_NAME_LENGTH = 255
  MIN_PASSWORD_LENGTH = 6
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  MAX_EMAIL_LENGTH = 255

  # Associations
  has_many :created_posts, foreign_key: :post_owner_id, class_name: "Post"

  # Secure Password and Token
  has_secure_password
  has_secure_token :authentication_token

  # Validations
  validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
  validates :email, presence: true,
    uniqueness: { case_sensitive: false },
    length: { maximum: MAX_EMAIL_LENGTH },
    format: { with: VALID_EMAIL_REGEX }
  validates :password, length: { minimum: MIN_PASSWORD_LENGTH }, if: -> { password.present? }
  validates :password_confirmation, presence: true, on: :create

  # Callbacks
  before_save :to_lowercase
  before_destroy :assign_posts_to_post_owners

  private

    def to_lowercase
      email.downcase!
    end

    def assign_posts_to_post_owners
      posts_whose_owner_is_not_current_user = assigned_posts.where.not(post_owner_id: id)
      posts_whose_owner_is_not_current_user.find_each do |post|
        post.update(assigned_user_id: post.post_owner_id)
      end
    end
end
