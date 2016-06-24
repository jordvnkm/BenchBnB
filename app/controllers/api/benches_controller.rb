class Api::BenchesController < ApplicationController
  def index
    @benches = Api::Bench.all
    render :index
  end

  def create

  end
end
