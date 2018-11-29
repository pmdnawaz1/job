class JobSerializer < ActiveModel::Serializer
  attributes :title, :location, :company_name, :snippet, :job_link, :joblist_id

end
