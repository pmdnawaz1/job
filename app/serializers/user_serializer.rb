class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :dashboard_id
  has_many :joblists
  # has_many :jobs, through: :joblists
  # has_many :tasks, through: :jobs
end
