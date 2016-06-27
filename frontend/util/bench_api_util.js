

const BenchApiUtil = {
  fetchAllBenches: function(mybounds, callback){ // put bounds into data section.
    let params = {bounds: mybounds};
    $.ajax({
      url: `/api/benches/`,
      data: params,
      success: function(benches){
        callback(benches);
      }
    });
  }
};


module.exports = BenchApiUtil;
