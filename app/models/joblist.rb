class Joblist < ApplicationRecord
  belongs_to :user
  has_many :joblist_jobs
  has_many :jobs, through: :joblist_jobs
end
