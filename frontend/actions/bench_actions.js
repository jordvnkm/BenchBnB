const BenchApiUtil = require("../util/bench_api_util");
const AppDispatcher = require("../dispatcher/dispatcher");
const BenchConstants = require("../constants/bench_constants");

const BenchActions = {
  fetchAllBenches: function(bounds){
    BenchApiUtil.fetchAllBenches(bounds, this.receiveAllBenches);
  },

  receiveAllBenches: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.RECEIVE_ALL_BENCHES,
      benches: benches
    });
  },

  receiveSingleBench: function(bench){
    AppDispatcher.dispatch({
      actionType: BenchConstants.RECEIVE_BENCH,
      bench: bench
    });
  },

  createBench: function(bench){
    BenchApiUtil.createBench(bench, BenchActions.receiveSingleBench);
  },



};

module.exports = BenchActions;
