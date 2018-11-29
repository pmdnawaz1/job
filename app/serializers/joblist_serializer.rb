class JoblistSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :jobs
  has_many :jobs
end
