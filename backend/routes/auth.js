const router = require("express").Router();
const passport = require("passport");
const { googleLogin, googleProfile, registerUser, postLogin, logoutUser, loginSuccess, loginFailure } = require("../controllers/authController");
const { getUserDetails, getUploadedFileDetails } = require("../controllers/userController");
const auth = require("../middlewares/auth");
const admin=require('../middlewares/admin');

//All login routes are here


//login failure or success route
router.route('/login/success').get(loginSuccess);
router.route('/login/failed').get(loginFailure)

//logout user route
router.route('/logout').get(logoutUser)


//Google authentication routes
router.route('/google').get(googleProfile)
router.route('/google/callback').get(googleLogin)

//authentication by local strategy route
router.route('/register').post(registerUser);
router.route('/login').post(postLogin)


//details
router.route('/me').get(auth,getUserDetails)
//uploaded file details
router.route('/me/uploadedfiles').get(auth,getUploadedFileDetails)

module.exports = router