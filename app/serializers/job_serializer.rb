class JobSerializer < ActiveModel::Serializer
  attributes :title, :location, :company_name, :snippet, :job_link, :joblist_id, :id, :salary, :status, :deadline, :applied, :interview1, :interview2, :offer

end
