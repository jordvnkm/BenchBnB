const React = require("react");

const BenchIndexItem = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.bench.id} &nbsp;
        {this.props.bench.description} &nbsp;
        {this.props.bench.lat} &nbsp;
        {this.props.bench.lng} <br></br>
      </div>
    )
  }
});

module.exports = BenchIndexItem;
