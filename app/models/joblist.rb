class Joblist < ApplicationRecord
  belongs_to :user
  has_many :jobs
  has_many :tasks, through: :jobs
end
