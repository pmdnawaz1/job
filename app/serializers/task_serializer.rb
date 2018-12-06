class TaskSerializer < ActiveModel::Serializer
  attributes :id, :content, :due_date, :job_id, :checked
  belongs_to :job

end
