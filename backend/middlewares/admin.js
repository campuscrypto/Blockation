const ErrorHandler = require("../utils/errorhander")

function admin(req, res, next) {

    if(req.user) {
        if(req.user.role==="admin"){
            return next()
        }
       
    }
    return next(new ErrorHandler("unauthorized please login to access the content",401))

}

module.exports = admin