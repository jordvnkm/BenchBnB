const React = require("react");
const ReactDOM = require("react-dom");
const BenchStore = require("../stores/bench_store");
const BenchActions = require("../actions/bench_actions");

const BenchMap = React.createClass({
  componentDidMount: function(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    BenchStore.addListener(this._onChange);
    this.map.addListener("idle", () => {
      BenchActions.fetchAllBenches();
    })
  },

  _onChange: function(){
    let benches = BenchStore.all();
    Object.keys(benches).forEach((benchId) => {
      let bench = benches[benchId];
      let myposition = {lat: bench.lat, lng: bench.lng};
      let marker = new google.maps.Marker({
        position: myposition,
        title: bench.description,
        map: this.map
      });
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
