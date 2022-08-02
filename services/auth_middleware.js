const jwt = require('jsonwebtoken')
const Utility = require('../services/utilityController')

module.exports =  function authenticate(req,res,next) {
    try {
        const auth_token =  req.headers["authorization"] || req.body.token
        const token = auth_token.split(" ")[1]
        if(!token) return Utility.sendFailure(req,res,"invalid request");
        const user = jwt.verify(token,process.env.AUTH_TOKEN);
        req.body.user =  user
        console.log(req.body);
        next()
    } catch(e) {
        return Utility.sendAuthError(req,res)
    }
}