# frozen_string_literal: true

class AddPostOwnerIdToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :post_owner_id, :integer
    add_foreign_key :posts, :users, column: :post_owner_id, on_delete: :cascade
  end
end
