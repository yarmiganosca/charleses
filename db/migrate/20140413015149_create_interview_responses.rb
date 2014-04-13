class CreateInterviewResponses < ActiveRecord::Migration
  def change
    create_table :interview_responses do |t|
      t.string :content

      t.integer :interview_id
      t.integer :interview_question_id

      t.timestamps
    end
  end
end
