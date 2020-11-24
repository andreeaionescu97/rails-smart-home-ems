class Device < ApplicationRecord
  belongs_to :home
  has_many :energies
end
