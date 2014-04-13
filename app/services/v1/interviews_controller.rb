class Services::V1::InterviewsController < Services::V1::ServicesControllerBase

  # GET /services/v1/interviews
  # limit and offset ?
  def index
    @interviews = @applications.order_by(:_id.desc).page(params[:page]).per(params[:page_size] || MAX_PAGE)
  end

  # GET /services/v1/interviews/1
  def show
  end

  # POST /services/v1/interviews
  def create
    # if @application.save
    #   @application
    # else
    #   @error = Error.new errors: @application.errors
    #   render 'error', status: :unprocessable_entity
    # end
  end

  # PUT /services/v1/interviews/1
  # PUT /services/v1/interviews/1.json
  def update
    # if @application.update_attributes(params[:data])
    #   head :no_content
    # else
    #   @error = Error.new errors: @application.errors
    #   render 'error', status: :unprocessable_entity
    # end
    interview_json = :the_json_obj_passed_in
    
    interview_json[:questions].each do |q|
      response = InterviewResponse.new(interview_question_id: q[:id], content: q[:answer])
      interview.interview_responses << response
    end
  end

  # DELETE /services/v1/interviews/1
  def destroy
    # @application.destroy
    # head :no_content
  end
  
  private
  
  def interview
    @interview ||= Interview.find(params[:id])
  end
end