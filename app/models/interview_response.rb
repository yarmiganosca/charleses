class InterviewResponse < ActiveRecord::Base
  belongs_to :interview
  belongs_to :interview_question
end
