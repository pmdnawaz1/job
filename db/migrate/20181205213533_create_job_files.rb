class CreateJobFiles < ActiveRecord::Migration[5.1]
  def change
    create_table :job_files do |t|
      t.integer :job_id
      t.string :resume_link
      t.string :cover_letter_link
      t.timestamps
    end
  end
end
