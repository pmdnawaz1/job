class JobFileSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :resume_link, :cover_letter_link
end
