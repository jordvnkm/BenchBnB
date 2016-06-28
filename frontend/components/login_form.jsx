const React = require("react");
const SessionActions = require("../actions/session_actions");


const LoginForm = React.createClass({

  component

  usernameChange: function(event){
    this.setState({username: event.target.value});
  },

  passwordChange: function(event){
    this.setState({password: event.target.value});
  },

  onSubmit: function(){
    SessionActions.logIn({username: this.state.username, password: this.state.password});
  },

  render: function(){
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.usernameChange} value={this.state.username}></input>
        <input type="password" onChange={this.passwordChange} value={this.state.password}></input>

        <input type"submit" value"SUBMIT"></input>
      </form>
    );
  }
});


module.exports = LoginForm;
