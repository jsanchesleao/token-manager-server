Token Manager Server
====================

Token Manager Server is a server based on Restify created to manage authorization tokens.

Installation
------------

```bash
npm install token-manager-server
```

QuickStart
----------

```javascript
var TokenManagerServer = require('./server').TokenManagerServer,
    server = new TokenManagerServer().listen(8000);  //starts a server in port 8000

```

You can also embed the service in you own restify app like this:

```javascript

var restify = require('restify'),
    tokenManagerServer = require('token-manager-server'),
    server = restify.createServer();

    /* bodyParser and queryParser are required */
    server.use( restify.bodyParser() );
    server.use( restify.queryParser() );

    tokenManagerServer.use( server, '/myTokenEndpoint' ); // register get and post /myTokenEndpoint
```


API
---

### GET /token?tokenString=<STRING>

Returns a json containing a token data. The format is like this:

* Status code 200:
```javascript
{
    "clientId": "someclientid",
    "tokenString": "sometokenstring"
}
```

* Status code 404:
```
{
    "code": "ResourceNotFound",
    "message": "Some error message here"
}
```



### POST /token

The client should send an application/json data containing the following:

```javascript
{
    "clientId": "someclientid",
    "tokenString": "sometokenstring",
    "expiration": 60000
}
```

The expiration time should be set in milliseconds.
The server returns like this:

* Status code 200:

```javascript
{
    "clientId": "someclientid",
    "tokenString": "sometokenstring"
}
```

* Status code 400:
```javascript
{
    "code": "InvalidContent",
    "message": "Some error message here"
}
```