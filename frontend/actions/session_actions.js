const SessionApiUtil = require("../util/session_api_util");
const AppDispatcher = require("../dispatcher/dispatcher");
const SessionConstants = require("../constants/session_constants");

const SessionActions = {
  logIn: function(user){
    SessionApiUtil.logIn(user, this.receiveCurrentUser);
  },

  logOut: function(user){
    SessionApiUtil.logOut(user, this.receiveCurrentUser);
  },

  signUp: function(user){
    SessionApiUtil.signUp(user, this.receiveCurrentUser);
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });

  }
};



module.exports = SessionActions;
