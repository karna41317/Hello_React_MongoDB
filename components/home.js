var React = require('react');
var BS = require('react-bootstrap');
var title = "Journal";
var $ = require('jquery');

var Home = React.createClass({
    getInitialState() {
        document.title = title;
        return {};
    },
    saveEntry() {
        var data = this.refs.entry.getValue();
        var inputNode = this.refs.entry.getInputDOMNode();
        $.ajax({
            type: "POST",
            url: "/api/postentry",
            data: {'entry': data},
            success: function () {
                alert('success');
                inputNode.value = "";
            },
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            },
            dataType: 'json'
        });        
    },
	render() {
		return (
            <BS.Grid>
                <BS.Col md={6} mdOffset={3} xs={12}>
                    <BS.Row className='show-grid'>
                        <BS.Panel header={title} bsStyle='primary'>
                            <BS.Input ref="entry" type='textarea' placeholder='Tell me about your day' />
                            <BS.Button onClick={this.saveEntry} bsStyle='primary' bsSize='large' block>Submit</BS.Button>
                        </BS.Panel>
                    </BS.Row>
                </BS.Col>
            </BS.Grid>
		);
	}
});

module.exports = Home;