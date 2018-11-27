class JoblistSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :jobs
  has_many :joblist_jobs
  has_many :jobs, through: :joblist_jobs
end
