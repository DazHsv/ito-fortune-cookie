'use strict';

const path = require("path"),
    fs = require("fs");
    
// Creating handler function
const _getFortune = function(req, res) {
    res.end("Tu fortuna es: Come menos y te irá mejor...");
};

const _getUnFortune = function(req, res) {
    res.end("Tu fortuna es: mala...");
};

// Creating handler object
let handler = {};

// Registering handlers to handler object
handler['/getfortune'] = _getFortune;
handler['/getunfortune'] = _getUnFortune;

// Exporting handler module
module.exports = handler;