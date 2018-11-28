class Job < ApplicationRecord
  has_many :joblist_jobs
  has_many :joblists, through: :joblist_jobs
end
