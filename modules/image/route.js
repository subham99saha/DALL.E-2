var express = require('express');
var app = express.Router();
var service = require('./service');

app.post('/create', function (req, res) {
    let payload = req.body;
    service.create(payload, function (response) {
        res.send(response);
    });
});

module.exports = app;