const ErrorHandler = require("../utils/errorhander")

function auth(req, res, next) {

    if(req.user) {

       
        return next()
    }
    return next(new ErrorHandler("unauthorized please login to access the content",401))
}

module.exports = auth