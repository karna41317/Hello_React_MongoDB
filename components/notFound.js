var React = require('react');
var BS = require('react-bootstrap');

var NotFound = React.createClass({
	getInitialState(){
		document.title = "Page not found!";
		return {};
	},
	render() {
		return (
            <BS.Grid>
                <BS.Col md={6} mdOffset={3} xs={12}>
					<p>404, could not locate the resource requested!</p>
                </BS.Col>
            </BS.Grid>
		);
	}
});

module.exports = NotFound;