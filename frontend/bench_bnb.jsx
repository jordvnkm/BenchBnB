const React = require("react");
const ReactDOM = require("react-dom");

const reactRouter = require("react-router");
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const hashHistory = reactRouter.hashHistory;
const IndexRedirect = reactRouter.IndexRedirect;
const IndexRoute = reactRouter.IndexRoute;

const Search = require("./components/search");
const BenchIndex = require("./components/bench_index");
const BenchForm = require("./components/bench_form");

const App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

const router = <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
    <Route path="api/benches" component={BenchIndex}>
      <Route path="new" component={BenchForm}>

      </Route>
    </Route>
  </Route>
</Router>


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(router, document.getElementById("content"));
});
