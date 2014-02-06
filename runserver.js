/**
 * Created by jeferson on 2/6/14.
 */

var TokenManagerServer = require('./server').TokenManagerServer;

var server = new TokenManagerServer();

if( process.argv[2] ){
    server.listen( Number(process.argv[2]) );
}
else{
    server.listen(8000);
}
