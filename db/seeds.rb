# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users
rupert = User.where(:first_name => "Rupert").first
if rupert.nil?
  rupert = User.new(:first_name => "Rupert")
  rupert.email = "rupert.m@charleses.advocare.com"
  rupert.last_name = "Murdock"
  rupert.dob = DateTime.new(1931,2,3)
  rupert.allergies = "None"
  rupert.current_meds = "None"
  rupert.password = "changeme"
  rupert.save
else
  rupert.email = "rupert.m@charleses.advocare.com"
  rupert.save
end

jeanine = User.where(:first_name => "Jeanine").first
if jeanine.nil?
  jeanine = User.new(:first_name => "Jeanine")
  jeanine.email = "janine.j@charleses.advocare.com"
  jeanine.last_name = "Jordan"
  jeanine.dob = DateTime.new(1951,2,3)
  jeanine.allergies = "None"
  jeanine.current_meds = "None"
  jeanine.password = "changeme"
  jeanine.save
else
  jeanine.email = "janine.j@charleses.advocare.com"
  jeanine.save
end

tatiana = User.where(:first_name => "Tatiana").first
if tatiana.nil?
  tatiana = User.new(:first_name => "Tatiana")
  tatiana.email = "tatiana.s@charleses.advocare.com"
  tatiana.last_name = "sharapova"
  tatiana.dob = DateTime.new(1948,2,3)
  tatiana.allergies = "None"
  tatiana.current_meds = "None"
  tatiana.password = "changeme"
  tatiana.save
else
  tatiana.email = "tatiana.s@charleses.advocare.com"
  tatiana.save
end

# Questions to Tatiana
tatiana_questions = [
  {
    content: "In the past 3 months have you have wounds that are slow to heal?",
    response_required: true
  },
  {
    content: "In the past 3 months have you experienced low Blood Sugar episodes?",
    response_required: true
  },
  {
    content: "In the past 3 months have have you felt stressed or ill?",
    response_required: true
  },
  {
    content: "How are you feeling [1-10] about your control?",
    response_required: true
  },
  {
    content: "Are you taking your meds as perscribed?",
    response_required: true
  }
]

# Questions to Rupert
rupert_questions = [
  {
    content: "Have you been in contact with extra-terrestrial life?",
    response_required: true
  },
  {
    content: "Where was your last trip?",
    response_required: true
  },
  {
    content: "Have you been in an area where you could have been exposed to ticks?",
    response_required: true
  },
  {
    content: "How are you feeling [1-10] today?",
    response_required: true
  }
]

tatiana_interview = Interview.where(:questioner_id => jeanine.id, :respondant_id => tatiana.id).first
if tatiana_interview.nil?
  tatiana_interview = Interview.new()
  tatiana_interview.questioner = jeanine
  tatiana_interview.respondant = tatiana
  tatiana_interview.status = "scheduled"
  tatiana_interview.interview_type = "pre"

  tatiana_questions.each do |q|
    newQ = InterviewQuestion.where(:content => q[:content]).first
    if newQ.nil?
      newQ = InterviewQuestion.new(:content => q[:content],:response_required => q[:response_required])
      newQ.save

      response = InterviewResponse.new(interview_question_id: newQ.id)
      tatiana_interview.interview_responses << response
    end
  end

  tatiana_interview.save
end

rupert_interview = Interview.where(:questioner_id => rupert.id, :respondant_id => rupert.id).first
if rupert_interview.nil?
  rupert_interview = Interview.new()
  rupert_interview.questioner = rupert
  rupert_interview.respondant = rupert
  rupert_interview.status = "scheduled"
  rupert_interview.interview_type = "pre"
  
  rupert_questions.each do |q|
    newQ = InterviewQuestion.where(:content => q[:content]).first
    if newQ.nil?
      newQ = InterviewQuestion.new(:content => q[:content],:response_required => q[:response_required])
      newQ.save

      response = InterviewResponse.new(interview_question_id: newQ.id)
      rupert_interview.interview_responses << response
    end
  end

  rupert_interview.save
end
