object @interview
attributes :id, :status, :interview_type, :questioner_id, :respondant_id, :created_at, :updated_at
child :interview_questions => :interview_questions do
  attributes :id, :content, :response_type, :response_required, :created_at, :updated_at
end
child :interview_responses => :interview_responses do
  attributes :id, :content, :interview_id, :interview_question_id, :created_at, :updated_at
end
