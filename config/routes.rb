# frozen_string_literal: true

Rails.application.routes.draw do
  resources :posts, except: %i[new edit], param: :slug
  resources :users, only: %i[index create]
  resource :session, only: [:create, :destroy]

  root "home#index"
  get "*path", to: "home#index", via: :all
end
