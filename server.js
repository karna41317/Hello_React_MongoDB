var express = require('express');
var app = express();
var mongo = require('mongodb');
var monk = require('monk');
var dbJournal = monk('localhost:27017/journal');
var bodyParser = require('body-parser');
var port = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', express.static(__dirname + '/'));
app.use('/bs', express.static(__dirname + '/lib/bootstrap-3.3.4-dist/css'));
app.use('/fonts', express.static(__dirname + '/lib/bootstrap-3.3.4-dist/fonts'));

app.use('/api/getentries', function (req, res) {
    dbJournal.get('entries').find({}, {
        sort: {
            dateTime: -1
        }
    }, function (err, docs) {
        res.json(docs);
    });
});

app.post('/api/postentry', function (req, res) {
    dbJournal.get('entries').insert({
        "dateTime": Date.now(),
            "text": req.body.entry
    }, function (err, doc) {
        if (err) {
            throw err;
        }
        res.json({});
    });
});


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
    console.log('Listening on port ' + port);
});