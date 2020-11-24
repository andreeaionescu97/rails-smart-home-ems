class Home < ApplicationRecord
  belongs_to :user
  has_many :devices

  validates :name, location: true
end
