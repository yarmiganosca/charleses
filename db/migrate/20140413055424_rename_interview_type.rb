class RenameInterviewType < ActiveRecord::Migration
  def change
    change_table :interviews do |t|
      t.rename :type, :interview_type
    end
  end
end
