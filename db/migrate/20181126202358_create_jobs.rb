class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company_name
      t.string :location
      t.string :snippet
      t.string :job_link
      t.integer :joblist_id
      t.string :salary, :default => ""
      t.string :status, :default => ""
      t.string :deadline, :default => ""
      t.string :applied, :default => ""
      t.string :interview1, :default => ""
      t.string :interview2, :default => ""
      t.string :offer, :default => ""
      t.timestamps
    end
  end
end
