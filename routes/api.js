var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api_database');

var UpdateModel = require('../modules/UpdateModel').getModel(mongoose);

var auth_api = require("../modules/utils/authUtil").authorize;

var cacheUtil = require('../modules/utils/cacheUtil');
var noCache = cacheUtil.noCache;
var shortCache = cacheUtil.shortCache;

//======================================================================================================================
// FUNCTIONS START
//======================================================================================================================
function createUpdate(req, res) {
    var filename = req.body.filename;
    return UpdateModel.remove({'filename': (filename)}, function (err, upd) {
        if (!err) {
            console.log("removed");
        } else {
            console.log(err);
        }

        var update = new UpdateModel({
            channel: req.body.channel,
            filename: req.body.filename,
            md5sum: req.body.md5sum,
            downloadurl: req.body.downloadurl,
            timestamp: req.body.timestamp,
            codename: req.body.codename,
            md5sumdelta: req.body.md5sumdelta
        });
        update.save(function (err) {
            if (!err) {
                console.log("created");
            } else {
                console.log(err);
            }
        });
        return res.send(update);
    });
}

function getUpdates(req, res) {
    return UpdateModel.find().select("-_id -modified -__v").exec(function (err, update) {
        if (!err) {
            return res.send(update);
        } else {
            return console.log(err);
        }
    });
}

function getUpdateByCodename(req, res) {
    var codename = req.params.codename;
    var order = req.query.order;
    var reponse = UpdateModel.find({'codename': (codename)}).select("-_id -modified -__v").sort({timestamp: (order == 'oldest' ? 1 : -1)});

    return reponse.exec(function (err, update) {
        if (!err) {
            return res.send(update);
        } else {
            return console.log(err);
        }
    });
}

function getUpdateByCodenameSingle(req, res) {
    var codename = req.params.codename;
    var reponse = UpdateModel.find({'codename': (codename)}).limit(1).select("-_id -modified -__v").sort({timestamp: -1});

    return reponse.exec(function (err, update) {
        if (!err) {
            return res.send(update);
        } else {
            return console.log(err);
        }
    });
}

function getUpdateByChannelAndCodename(req, res) {
    var codename = req.params.codename;
    var channel = req.params.channel;
    var order = req.query.order;
    var display = req.query.display;

    var reponse = UpdateModel.find({'channel': (channel)}).find({'codename': (codename)})
        .select("-_id -modified -__v").sort({timestamp: (order == 'oldest' ? 1 : -1)});
    if (display != 'full') reponse = reponse.limit(5);

    return reponse.exec(function (err, update) {
        if (!err) {
            return res.send(update);
        } else {
            return console.log(err);
        }
    });
}

function getUpdateDetails(req, res) {
    return UpdateModel.find(req.params.versionname).select("-_id -modified -__v").exec(function (err, update) {
        if (!err) {
            return res.send(update);
        } else {
            return console.log(err);
        }
    });
}

function update(req, res) {
    return UpdateModel.find(req.params.id, function (err, update) {
        update.channel = req.body.channel;
        update.filename = req.body.filename;
        update.md5sum = req.body.md5sum;
        update.downloadurl = req.body.downloadurl;
        update.timestamp = req.body.timestamp;
        update.codename = req.body.codename;
        update.md5sumdelta = req.body.md5sumdelta;
        return update.save(function (err) {
            if (!err) {
                console.log("updated");
            } else {
                console.log(err);
            }
            return res.send(update);
        });
    });
}

function deleteUpdate(req, res) {
    var codename = req.params.codename;
    return UpdateModel.remove({'codename': (codename)}, function (err, update) {
        if (!err) {
            console.log("removed");
        } else {
            console.log(err);
        }
    });
}
//======================================================================================================================
// FUNCTIONS END
//======================================================================================================================

router
    .post('/', auth_api, createUpdate)
    .get('/', shortCache, getUpdates);
router.delete('/:codename', auth_api, deleteUpdate);
router.get('/:codename', shortCache, getUpdateByCodename);
router.get('/:codename/single', shortCache, getUpdateByCodenameSingle);
router.get('/:channel/:codename', shortCache, getUpdateByChannelAndCodename);
router.get('/:id', shortCache, getUpdateDetails);
router.put('/:id', auth_api, update);

module.exports = router;
