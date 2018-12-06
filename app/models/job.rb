class Job < ApplicationRecord
  has_many :tasks
  has_one :job_file
end
