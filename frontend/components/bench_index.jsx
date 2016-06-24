const React = require("react");
const BenchActions = require("../actions/bench_actions");
const BenchStore = require("../stores/bench_store");
const BenchIndexItem = require("./bench_index_item");


const BenchIndex = React.createClass({
  getInitialState: function(){
    return {benches: BenchStore.all()};
  },
  componentDidMount: function(){
    BenchStore.addListener(this.getStateFromStore);
    BenchActions.fetchAllBenches();
  },

  getStateFromStore: function(){
    this.setState({benches: BenchStore.all()});
  },

  render: function(){
    return (
      <div>
        {
          Object.keys(this.state.benches).map((benchid) => {
            return <BenchIndexItem key= {benchid} bench={this.state.benches[benchid]}/>
          })
        }
        {this.props.children}
      </div>
    );
  }
});

module.exports = BenchIndex;
