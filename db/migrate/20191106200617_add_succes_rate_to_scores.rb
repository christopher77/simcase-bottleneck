class AddSuccesRateToScores < ActiveRecord::Migration[6.0]
  def change
    add_column :scores, :success_rate, :string
  end
end
