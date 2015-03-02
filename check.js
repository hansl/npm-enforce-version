
module.exports = function(v) {
    var package = require('./package.json');
    var version = package.version.split('.').map(function(x) { return parseInt(x); });
    var installedVersion = ('' + v).split('.').map(function(x) { return parseInt(x); });

    var valid = true;
    for (var i = 0; i < installedVersion.length; i++) {
        if (installedVersion[i] != installedVersion[i]) {
            throw "Invalid version: v" + installedVersion.join('.');
        }

        if (installedVersion[i] < version[i]) {
            valid = false;
            break;
        }
    }

    if (!valid) {
        var message = "Error: this package requires NPM v" + version.join('.') +
                      ". You have v" + installedVersion.join('.') + " installed.";
        throw message;
    }
};
