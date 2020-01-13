class Score < ApplicationRecord
  belongs_to :user, touch: true

  accepts_nested_attributes_for :user
end
