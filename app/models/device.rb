class Device < ApplicationRecord
  belongs_to :home


  has_many :energies, dependent: :destroy

#   validates :name, :category, presence: true

end
