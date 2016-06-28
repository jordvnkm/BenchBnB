const React = require("react");


const SessionApiUtil = {
  signUp: function(userParams, successCallback, errorCallback) {
    let params = {user: userParams};
    $.ajax({
      url: 'api/users',
      type: "POST",
      data: params,
      success: function(user){
        successCallback(user);
      },
      error: function(user){
        errorCallback(user);
      }
    });
  },

  logIn: function(userParams, successCallback, errorCallback) {
    let params = {user: userParams};
    $.ajax({
      url: 'api/session',
      type: "POST",
      data: params,
      success: function(user){
        successCallback(user);
      },
      error: function(user){
        errorCallback(user);
      }
    });
  },

  logOut: function(successCallback, errorCallback){
    $.ajax({
      url: 'api/session',
      type: "DELETE",
      success: function(user){
        successCallback(user);
      },
      error: function(user){
        errorCallback(user);
      }
    });
  }
};


module.exports = SessionApiUtil;
