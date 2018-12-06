class User < ApplicationRecord
  has_many :joblists
  # has_many :jobs, through: :joblists
  # has_many :tasks, through: :joblists
  has_secure_password
  validates :username, presence: true, uniqueness: true

  def self.from_token_request request
    # Returns a valid user, `nil` or raise `Knock.not_found_exception_class_name`
    # e.g.
      username = request.params["auth"]["username"]
    #   self.find_by email: email
      User.all.find_by(username: username)
  end
end
