var app = exports = module.exports = {};

app.init = function(){
    this.cache = {};
    this.settings = {};
    this.defaultConfiguration();
};

app.set = app.get = function(setting, val){
    if(arguments.length == 1){
        return this.settings[val];
    }else{
        this.settings[setting] = val;
        return this;
    }
}

app.defaultConfiguration = function(){

};

app.handle = function(req, res, next){

};
