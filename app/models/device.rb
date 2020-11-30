class Device < ApplicationRecord
  belongs_to :home
  belongs_to :category



  has_many :energies, dependent: :destroy

#   validates :name, :category, presence: true

end
