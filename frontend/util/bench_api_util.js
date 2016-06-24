

const BenchApiUtil = {
  fetchAllBenches: function(callback){
    $.ajax({
      url: "/api/benches",
      success: function(benches){
        callback(benches);
      }
    });
  }
};


module.exports = BenchApiUtil;
