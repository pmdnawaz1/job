class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :content
      t.string :job_id
      t.string :due_date
      t.timestamps
    end
  end
end
