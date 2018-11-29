class ZipscrapeSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :company_name, :snippet, :job_link
end
