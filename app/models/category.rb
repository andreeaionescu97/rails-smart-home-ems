class Category < ApplicationRecord
  has_many :devices
  has_one_attached :photo
end
