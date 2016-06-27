class Api::Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    answer = [];
    benches = Api::Bench.all
    north_east_lat = bounds["northEast"]["lat"].to_f
    north_east_lng = bounds["northEast"]["lng"].to_f
    south_west_lat = bounds["southWest"]["lat"].to_f
    south_west_lng = bounds["southWest"]["lng"].to_f

    benches.each do |bench|
      if bench.lat < north_east_lat && bench.lat > south_west_lat
        if bench.lng > south_west_lng && bench.lng < north_east_lng
          answer.push(bench);
        end
      end
    end
    answer
  end
end
