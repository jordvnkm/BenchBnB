const React = require("react");
const BenchMap = require("./bench_map");
const BenchIndex = require("./bench_index");


const Search = React.createClass({
  render: function(){
    return(
      <div>
        <BenchMap />
        <BenchIndex />
        {this.props.chidlren}
      </div>
    );
  }
});


module.exports = Search;
