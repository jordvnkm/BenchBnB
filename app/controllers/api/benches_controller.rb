class Api::BenchesController < ApplicationController
  def index
    @benches = Api::Bench.in_bounds(params[:bounds])
    render :index
  end

  def create

  end
end
