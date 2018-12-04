class Job < ApplicationRecord
  belongs_to :joblist
  has_many :tasks
end
