class ApplicationController < ActionController::Base
  def success_response(data = nil)
    render json: { data: data }, status: 200
  end

  def error_response(status = nil, msg = nil)
    render json: { msg: msg }, status: status
  end
end
