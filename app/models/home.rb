class Home < ApplicationRecord
  belongs_to :user
  has_many :devices, dependent: :destroy

  # validates :name, location: true
end
