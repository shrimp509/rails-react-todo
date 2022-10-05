class AddDefaultValueToTodos < ActiveRecord::Migration[7.0]
  def change
    change_column :todos, :status, :integer, default: 0
  end
end
