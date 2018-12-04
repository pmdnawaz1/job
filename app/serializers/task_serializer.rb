class TaskSerializer < ActiveModel::Serializer
  attributes :id, :content, :due_date
end
