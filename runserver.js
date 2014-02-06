/**
 * Created by jeferson on 2/6/14.
 */

var TokenManagerServer = require('./server').TokenManagerServer;

var server = new TokenManagerServer();
server.listen(8000);