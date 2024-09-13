# frozen_string_literal: true

json.post do
  json.id @post.id
  json.title @post.title
  json.description @post.description
  json.upvotes @post.upvotes
  json.downvotes @post.downvotes
  json.is_blog_worthy @post.is_blog_worthy
  json.slug @post.slug
end
