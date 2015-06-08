// Update Model

function getModel(mongoose) {
    var Update = new mongoose.Schema({
        channel: {type: String, required: true},
        filename: {type: String, required: true},
        md5sum: {type: String, required: true},
        downloadurl: {type: String, required: true},
        timestamp: {type: String, required: true},
        codename: {type: String, required: true}
    });

    //------------------------------------------------------------------------------------------------------------------
    // Validation
    //------------------------------------------------------------------------------------------------------------------

    Update.path('channel').validate(function (v) {
        console.log("validate channel: " + v);
        return v && v.length > 2 && v.length < 250;
    });

    Update.path('filename').validate(function (v) {
        console.log("validate filename: " + v);
        return v && v.length > 2 && v.length < 250;
    });

    Update.path('md5sum').validate(function (v) {
        console.log("validate md5sum: " + v);
        return v && v.length > 2 && v.length < 250;
    });

    Update.path('downloadurl').validate(function (v) {
        console.log("validate downloadurl: " + v);
        return v && v.length > 10 && v.length < 250;
    });

    Update.path('timestamp').validate(function (v) {
        console.log("validate timestamp: " + v);
        return v && v.length == 8 && v.length < 250;
    });

    Update.path('codename').validate(function (v) {
        console.log("validate codename: " + v);
        return v && v.length > 1 && v.length < 250;
    });

    return mongoose.model('Update', Update);
}

//======================================================================================================================
// EXPORT
//======================================================================================================================

exports.getModel = getModel;
