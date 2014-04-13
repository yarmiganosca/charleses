class CreateInterviewQuestions < ActiveRecord::Migration
  def change
    create_table :interview_questions do |t|
      t.string :content

      t.string :response_type
      t.boolean :response_required

      t.timestamps
    end
  end
end
