var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

$ = require('jquery');

var renderApp = function (href) {
  if (href) {
    Router.HistoryLocation.push(href);
  }
  Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document.body);
  });
}

$(document).on('click', 'a:not([data-bypass])', function (e) {

    var href = $(this).attr('href');
    var protocol = this.protocol + '//';

    if (href.slice(protocol.length) !== protocol) {
      e.preventDefault();
      renderApp(href);
    }
});
renderApp();