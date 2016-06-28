const Store = require("flux/utils").Store;
const AppDispatcher = require("../dispatcher/dispatcher");
const SessionConstants = require("../constants/session_constants");

let SessionStore = new Store(AppDispatcher);

let _currentUser = {};

SessionStore.__onDispatch(payload){
  switch (payload.actionType){
  case SessionConstants.LOGIN:
    logIn(payload.user);
    SessionStore.__emitChange();
    break;

  case SessionConstants.LOGOUT:
    logOut();
    SessionStore.__emitChange();
    break;
  }
}

SessionStore.isUserLoggedIn(user){
  return (_currentUser.id === user.id);
}

SessionStore.currentUser = function(){
  return Object.assign({}, _currentUser);
}

const logOut(){
  _currentUser = {};
};

const logIn(user){
  _currentUser = user;
};

module.exports = SessionStore;
