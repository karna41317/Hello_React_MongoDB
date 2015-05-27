var React = require('react');
var BS = require('react-bootstrap');
var title = "Previous Entries";
var $ = require('jquery');
var History = React.createClass({
    getInitialState() {
        document.title = title;
        return {
            data: [],
            message : "Loading your entries..."
        };
    },
    parseDate(dateStr) {
        var d = new Date(parseInt(dateStr, 10));
        return (d.getMonth() + 1) + "." + d.getDate() + "." + d.getYear() % 100 + " @ " + d.getHours() + ":" + d.getMinutes();
    },
    componentDidMount() {
        $.ajax({
            url: "/api/getentries",
            dataType: 'json',
            cache: false,
            success: function (data) {
                if (data.length === 0) {
                    this.state.message = <p>No entries available, try posting one!</p>;
                }
                this.setState({data: data, message: this.state.message});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
	render() {
        var self = this;
        var key = -1;
        var entries = this.state.data.map(function (entry){
            var date = self.parseDate(entry.dateTime);
            return (
                <BS.Panel key={key++} header={date} bsStyle='primary'>
                    <p>{entry.text}</p>    
                </BS.Panel>
            );
        });
		return (
            <BS.Grid>
                <BS.Col md={6} mdOffset={3} xs={12}>
                    <BS.Row className='show-grid'>
                        {(entries.length) ? entries : <p>{this.state.message}</p>}
                    </BS.Row>
                </BS.Col>
            </BS.Grid>
		);
	}
});

module.exports = History;