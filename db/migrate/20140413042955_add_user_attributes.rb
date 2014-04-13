class AddUserAttributes < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :dob, :datetime
    add_column :users, :allergies, :string
    add_column :users, :current_meds, :string
  end
end
