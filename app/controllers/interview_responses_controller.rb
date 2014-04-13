class InterviewResponsesController < ApplicationController
  def responses
    # interview_json = params[:the_json_obj_passed_in]
    # interview_json = [
    #   {
    #     interview_id: 20,
    #     interview_question_id: 46,
    #     content: "eaten by a bear"
    #   }
    # ]

    binding.pry
    @error = OpenStruct.new
    begin
      interview_json.each do |q|
        binding.pry
        response = InterviewResponse.where(interview_id: q[:interview_id], interview_question_id: q[:interview_question_id]).first
        response.content = q[:content]
        x = response.save
        binding.pry
      end
    
      @error.status = "ok"
      @error.description = "ok"
    rescue
      @error.status = "error"
      @error.description = "error"
    end
  end
end
