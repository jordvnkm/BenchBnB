const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const BenchConstants = require("../constants/bench_constants");

let BenchStore = new Store(AppDispatcher);

let _benches = {};

BenchStore.__onDispatch = function(payload){
  switch (payload.actionType){
  case BenchConstants.RECEIVE_ALL_BENCHES:
    resetBenches(payload.benches);
    BenchStore.__emitChange();
    break;
  case BenchConstants.RECEIVE_BENCH:
    addBench(payload.bench);
    BenchStore.__emitChange();
    break;
  }
};


const addBench = function(bench){
  _benches[bench.id] = bench;
};

BenchStore.all = function() {
  let allBenches = {};
  Object.assign(allBenches, _benches);
  return allBenches;
};

const resetBenches = function(benches){
  _benches = {};
  benches.forEach((bench) => {
    _benches[bench.id] = bench;
  });
};

module.exports = BenchStore;
