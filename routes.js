/**
 * Created by jeferson on 2/5/14.
 */

var tm = require('token-manager'),
    tokenManager = new tm.TokenManager(),
    restify = require('restify');

function getToken(req, res){
    var tokenString = req.query.tokenString;
    try{
        var token = tokenManager.get(tokenString);
        res.send( {
            tokenString: token.tokenString,
            clientId: token.clientId
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
            tokenString: token.tokenString,
            clientId: token.clientId
        });
    }
    catch(err){
        res.send( new restify.InvalidContentError(err.message) );
    }


}

exports.getToken = getToken;
exports.postToken = postToken;
