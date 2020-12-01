class Home < ApplicationRecord
  belongs_to :user
  has_many :devices, dependent: :destroy
  
  geocoded_by :location
  after_validation :geocode, if: :will_save_change_to_location?
  # validates :name, location: true
end
