class CreateInterviews < ActiveRecord::Migration
  def change
    create_table :interviews do |t|
      t.string :status
      t.string :type

      t.integer :questioner_id
      t.integer :respondant_id

      t.timestamps
    end
  end
end
