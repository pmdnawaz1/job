class User < ApplicationRecord
  has_many :joblists
  has_secure_password
end
