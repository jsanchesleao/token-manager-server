var tm = require('token-manager'),
    tokenManager = new tm.TokenManager(),
    restify = require('restify');

function getToken(req, res){
    var tokenString = req.query.tokenString;
    try{
        var token = tokenManager.get(tokenString);
        res.send( {
            tokenString: token.tokenString,
            clientId: token.clientId,
            roles: token.roles
        } );

    }
    catch(err){
        res.send(new restify.ResourceNotFoundError(err.message));
    }
}

function postToken(req, res){
    var tokenData = req.body;

    try{
        var token = new tm.Token( tokenData );
        tokenManager.put(token);
        res.send({
            tokenString: token.getTokenString(),
            clientId: token.getClientId(),
            roles: token.getRoles()
        });
    }
    catch(err){
        res.send( new restify.InvalidContentError(err.message) );
    }


}

exports.getToken = getToken;
exports.postToken = postToken;
