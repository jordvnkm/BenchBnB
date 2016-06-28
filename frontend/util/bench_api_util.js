

const BenchApiUtil = {
  fetchAllBenches: function(mybounds, callback){
    let params = {bounds: mybounds};
    $.ajax({
      url: `/api/benches/`,
      data: params,
      success: function(benches){
        callback(benches);
      }
    });
  },

  createBench: function(mybench, receiveBench){
    let params = {bench: mybench};
    $.ajax({
      url: `/api/benches/`,
      type: "POST",
      data: params,
      success: function(resp){
        receiveBench(resp);
      }
    });
  }
};


module.exports = BenchApiUtil;
