const React = require("react");
const BenchActions = require("../actions/bench_actions");
const BenchStore = require("../stores/bench_store");
const hashHistory = require("react-router").hashHistory;

const BenchForm = React.createClass({
  getInitialState: function(){
    let myLat = this.props.location.query.lat;
    let myLng = this.props.location.query.lng;
    return {description: "", numSeats: undefined, lat: myLat, lng: myLng};
  },
  componentDidMount(){
    this.listener = BenchStore.addListener(this.benchStoreChange);
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  benchStoreChange: function(){
    hashHistory.push("/");
  },

  _descriptionChange: function(event){
    this.setState({description: event.target.value})
  },

  _numSeatChange: function(event){
    this.setState({numSeatChange: event.target.value});
  },

  _latChange: function(event){
    this.setState({lat: event.target.value});
  },

  _lngChange: function(event){
    this.setState({lng: event.target.value});
  },

  onSubmit: function(){
    BenchActions.createBench({
      description: this.state.description,
      seating: this.state.numSeats,
      lat: this.state.lat,
      lng: this.state.lng
    });
  },

  render: function(event){
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this._descriptionChange} value={this.state.description}></input>
        <input type="number" onChange={this._numSeatChange} value={this.state.numSeats}></input>
        <input type="number" onChange={this._latChange} value={this.state.lat} step="0.0001"></input>
        <input type="number" onChange={this._lngChange} value={this.state.lng} step="0.0001" ></input>
        <input type="submit" value="submit" />
      </form>
    );
  }
});



module.exports = BenchForm;
