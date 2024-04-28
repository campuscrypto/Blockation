const localUser=require('../models/localUser');
const googleUser=require('../models/googleUser');
const ErrorHandler = require('../utils/errorhander');
const fileUpload=require('../models/fileUpload');
const { response } = require('express');


//get all user Details(admin)
exports.getAllUserDetails=async(req,res,next)=>{
    const localUserDetails=await localUser.find();
    const googleUserDetails=await googleUser.find();
    const googleUserCount=await googleUser.countDocuments();
    const localUserCount=await localUser.countDocuments();
    if(!localUserDetails && !googleUserDetails){
        res.status(200).json({
            success:false,
            message:"Could not find any user details"
        })
    }
    if(!localUserDetails){
        res.status(200).json({
            success:false,
            message:"Could not find any user logged In using  normal login signup form"
        })
    }
    if(!googleUserDetails){
        res.status(200).json({
            success:false,
            message:"Could not find any user logged In using google user"
        })
    }
    const totalUserCount=googleUserCount+localUserCount
    res.status(200).json({
        success:true,
        localUserDetails,
        googleUserDetails,
        localUserCount,
        googleUserCount,
        totalUserCount
    })
}


//get the file details by specific user - (admin)
exports.getfileDetailsByUser=async(req,res,next)=>{
    const id=req.params.id;
    const uploadedFiles=await fileUpload.find({user:id});
    const uploadedFilesCount=uploadedFiles.length;
    if(uploadedFiles.length===0){
        res.status(200).json({
            success:false,
            message:"this user have not uploaded any files"
        })
    }
    else{
        res.status(200).json({
            success:true,
            message:'Data fetched successfully',
            uploadedFiles,
            uploadedFilesCount
        })
    }
}