const React = require("react");
const ReactDOM = require("react-dom");

const reactRouter = require("react-router");
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const hashHistory = reactRouter.hashHistory;
const IndexRedirect = reactRouter.IndexRedirect;

const Search = require("./components/search");
const BenchIndex = require("./components/bench_index");

const routes = <Router history={hashHistory}>
  <Route path="/" component={Search}>
    <Route path="api/benches" component={BenchIndex}>

    </Route>
  </Route>
</Router>


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(routes, document.getElementById("content"));
});
