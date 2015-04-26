var basicAuth = require('basic-auth');

var username = process.env.API_USERNAME;
var password = process.env.API_PASSWORD;

function unauthorized(res) {
    return res.end("unauthorized");
}

function authorize(req, res, next) {
    if (!req) {
        return unauthorized(res);
    }

    var user = basicAuth(req);

    if (!user || !user.name || typeof user.name === 'undefined' || !user.pass || typeof user.pass === 'undefined') {
        return unauthorized(res);
    }

    if (user.name === username && user.pass === password) {
        return next();
    }

    return unauthorized(res);
}

exports.authorize = authorize;
