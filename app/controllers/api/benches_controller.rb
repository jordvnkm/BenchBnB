class Api::BenchesController < ApplicationController
  def index
    @benches = Api::Bench.in_bounds(params[:bounds])
    render :index
  end

  def create
    @bench = Api::Bench.new(bench_params)

    @bench.save!
    render :show
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :seating, :lat, :lng)
  end
end
