class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :dashboard_id
  has_many :joblists
end
