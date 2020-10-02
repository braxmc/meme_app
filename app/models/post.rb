class Post < ApplicationRecord
  has_many :post, dependent: :destroy
  has_many :like, dependent: :destroy
end
