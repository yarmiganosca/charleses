class Interview < ActiveRecord::Base
  belongs_to :questioner, class_name: "User"
  belongs_to :respondant, class_name: "User"

  has_many :interview_responses
  has_many :interview_questions, through: :interview_responses
end
