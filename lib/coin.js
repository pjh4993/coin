var EventEmitter = require('events').EventEmitter;
var proto = require('./application');
var mixin = require('utils-merge');


exports = module.exports = createApplication;
/*
 * create an coin application
 * */

function createApplication(){
    var app = function(req, res, next){
        app.handle(req, res, next);
    }
    mixin(app, proto);
    mixin(app, EventEmitter.prototype);
    app.init();
    return app;
};

/*
 * Expose teh prototypes
 */
exports.application = proto;


