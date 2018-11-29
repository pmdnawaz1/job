class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company_name
      t.string :location
      t.string :snippet
      t.string :job_link
      t.integer :joblist_id
      t.timestamps
    end
  end
end
