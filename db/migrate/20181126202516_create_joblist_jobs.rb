class CreateJoblistJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :joblist_jobs do |t|
      t.integer :joblist_id
      t.integer :job_id
      t.string :status

      t.timestamps
    end
  end
end
