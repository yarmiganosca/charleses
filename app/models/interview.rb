class Interview < ActiveRecord::Base
  belongs_to :questioner, class_name: "User" # Jeanine              # Ruppert # Parent
  belongs_to :respondant, class_name: "User" # Answered by Tatiana  # Ruppert # Child

  has_many :interview_responses
  has_many :interview_questions, through: :interview_responses
end
