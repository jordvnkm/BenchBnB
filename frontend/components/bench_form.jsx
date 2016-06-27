const React = require("react");


const BenchForm = React.createClass({


  render: function(){
    return (
      <form>
        <input type="text" value={this.state.description}></input>
        <input type="number" value={this.state.numSeats}></input>
        <input type="number" step="0.0001" value={this.state.lat}></input>
        <input type="number" step="0.0001" value={this.state.lng}></input>
        
      </form>
    );
  }
});



module.exports = BenchForm;
