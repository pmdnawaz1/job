class Job < ApplicationRecord
  belongs_to :joblist
  has_many :tasks
  has_one :job_file
end
