class Todo < ApplicationRecord
  enum status: [ :created, :done, :canceled ]
end
