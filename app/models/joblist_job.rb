class JoblistJob < ApplicationRecord
  belongs_to :job
  belongs_to :joblist

end
