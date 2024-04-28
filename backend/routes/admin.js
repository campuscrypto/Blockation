const router = require("express").Router();
const passport = require("passport");
const { getAllUserDetails, getfileDetailsByUser } = require("../controllers/adminController");
const admin=require('../middlewares/admin');
const auth=require('../middlewares/auth');


//To get all the user details by the admin
router.route('/getusers').get(auth,admin,getAllUserDetails);
//To get the files uploaded by the specific user
router.route('/getfilesbyuser/:id').get(auth,admin,getfileDetailsByUser)



module.exports=router