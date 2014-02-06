/**
 * Created by jeferson on 2/5/14.
 */

var restify = require('restify'),
    routes = require('./routes');

function use(restifyServer, endpoint){
    restifyServer.get(endpoint, routes.getToken);
    restifyServer.post(endpoint, routes.postToken);
}

function TokenManagerServer(){
    this.server = restify.createServer();
    this.server.use( restify.queryParser() );
    this.server.use( restify.bodyParser() );

    use(this.server, '/token')
}

TokenManagerServer.prototype.listen = function(port, callback){
    this.server.listen(port, function(){
        console.log('Token Manager Server running on port [' + port + ']');
        if( callback ){
            callback()
        }
    });
}

exports.TokenManagerServer = TokenManagerServer;
exports.use = use;