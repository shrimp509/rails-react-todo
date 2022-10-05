class Api::V1::TodosController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :setup_todo, only: [:update, :destroy]

  def index
    render json: Todo.all
  end

  def create
    todo = Todo.create(create_params)
    return success_response(todo) if todo.present?
    error_response(400, 'Create todo failed for some reason')
  end

  def update
    return error_response(404, 'Todo not found') unless @todo.present?
    return error_response(400, 'Update failed for some reason') unless @todo.update(update_params)
    success_response(@todo)
  end

  def destroy
    return error_response(404, 'Todo not found') unless @todo.present?
    todo_id = @todo.id
    return error_response(400, 'Destroy failed with unknown reason') unless @todo.destroy
    success_response("Todo #{todo_id} is deleted")
  end

  private

  def setup_todo
    @todo = Todo.find_by(id: params[:id])
  end

  def create_params
    params.require(:name)
    params.permit(:name)
  end

  def update_params
    params.require(:id)
    params.permit(:id, :name, :status)
  end
end
