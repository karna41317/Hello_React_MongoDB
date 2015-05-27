var Router = require('react-router');
var React = require('react');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

// Application structure
var App = require('./app');

// components of application
var Home = require('./components/home');
var Hist = require('./components/history');
var NotFound = require('./components/notFound');

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Home}/>
        <Route path="history" handler={Hist}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

module.exports = routes;

