class JobSerializer < ActiveModel::Serializer
  attributes :title, :location
  has_many :joblist_jobs
  has_many :joblists, through: :joblist_jobs
end
