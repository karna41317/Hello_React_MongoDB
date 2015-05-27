var React = require('react');
var BS = require('react-bootstrap');

var Header = React.createClass({
    render() {
        var t = new Date();
        var date = t.getMonth() + 1 + "." + t.getDate() + "." + (t.getFullYear() % 100);
        return (
            <BS.Navbar fixedTop={true} brand={date} toggleNavKey={0}>
                <BS.CollapsibleNav eventKey={0}>
                    <BS.Nav navbar>
                        <BS.NavItem eventKey={1} href='/'>Journal</BS.NavItem>
                        <BS.NavItem eventKey={2} href='/history'>History</BS.NavItem>
                    </BS.Nav>
                </BS.CollapsibleNav>
            </BS.Navbar>
        );
    }
});

module.exports = Header;

