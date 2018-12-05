class Job < ApplicationRecord
  belongs_to :joblist
  has_many :tasks
  has_many :job_files
end
