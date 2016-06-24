# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bench1 = Api::Bench.create!(description: "bench1", lat: 37.7672, lng: -122.499)
bench2 = Api::Bench.create!(description: "bench2", lat: 37.7353, lng: -122.4904)
