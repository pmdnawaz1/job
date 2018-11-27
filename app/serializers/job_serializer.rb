class JobSerializer < ActiveModel::Serializer
  attributes :title
  has_many :joblist_jobs
  has_many :joblists, through: :joblist_jobs
end
