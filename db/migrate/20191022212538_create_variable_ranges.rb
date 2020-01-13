class CreateVariableRanges < ActiveRecord::Migration[6.0]
  def change
    create_table :variable_ranges do |t|
      t.string :name
      t.integer :min
      t.integer :max

      t.timestamps
    end
  end
end
