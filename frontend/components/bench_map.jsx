const React = require("react");
const ReactDOM = require("react-dom");
const BenchStore = require("../stores/bench_store");
const BenchActions = require("../actions/bench_actions");
const hashHistory = require("react-router").hashHistory;

const BenchMap = React.createClass({
  componentDidMount: function(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    BenchStore.addListener(this._onChange);

    this.markers = [];

    this.map.addListener("idle", () => {
      let bounds = this.map.getBounds();
      let northeast = bounds.getNorthEast();
      let southwest = bounds.getSouthWest();
      let mybounds = {"northEast": {"lat": northeast.lat, "lng": northeast.lng},
                "southWest": {"lat": southwest.lat, "lng": southwest.lng}};

      BenchActions.fetchAllBenches(mybounds);
    });

    this.map.addListener("click", (event) => {
      let clickPos = event.latLng;
      let coords = {lat: clickPos.lat(), lng: clickPos.lng()};
      hashHistory.push({
        pathname: "api/benches/new",
        query: coords
      })
    })
  },

  componentWillUnmount: function(){
    this.map = null;
    this.markers = [];
  },

  _onChange: function(){
    let benches = BenchStore.all();
    this.markers.forEach((marker) => {
      marker.setMap(null);
    });
    this.markers = [];

    Object.keys(benches).forEach((benchId) => {
      let bench = benches[benchId];
      let myposition = {lat: bench.lat, lng: bench.lng};
      let marker = new google.maps.Marker({
        position: myposition,
        title: bench.description,
        map: this.map
      });
      this.markers.push(marker);
    });


  },

  render: function(){
    return (
      <div className="map" ref="map">
        BenchMap
      </div>
    );
  }
});


module.exports = BenchMap;
