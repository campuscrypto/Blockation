const googleUser=require('../models/googleUser');
const localUser=require("../models/localUser");
const ErrorHandler = require('../utils/errorhander');
const fileUpload=require('../models/fileUpload')
const Apifeatures=require('../utils/apifeatures')
//complete that function on later on

exports.getUserDetails=async(req,res,next)=>{
        if(req.user.displayName){
            const googleUserDetails=await googleUser.find({googleID:req.user.id})

            res.status(200).json({
                success:true,
                userDetails:googleUserDetails[0]
            })
        }
        else if(req.user.password){
            const localUserDetails=await localUser.findById({_id:req.user._id})
            res.status(200).json({
                success:true,
                userDetails:localUserDetails
            })
        }
        else{
            next(new ErrorHandler("could not find the user",400))
        }
}

//To get the data of the uploaded file by the user
exports.getUploadedFileDetails=async(req,res,next)=>{
    if(req.user.displayName){

    const fileCount=await fileUpload.countDocuments({user:req.user.id});
        const resultPerPage=10;
    const apiFeature=new Apifeatures(fileUpload.find({user:req.user.id}),req.query)
    .search()
    apiFeature.pagination(resultPerPage)
   const  uploadedFiles = await apiFeature.query;
   
    if(uploadedFiles.length===0){
        res.status(200).json({
            success:false,
            uploadedFiles:{message:"You don't have uploaded any files"}
        })
    }

    else{
        res.status(201).json({
            success:true,
            message:"Data fetched successfully",
            uploadedFiles,
            resultPerPage,
            fileCount
        })
    }
}
else{
    
    const fileCount=await fileUpload.countDocuments({user:req.user._id});
    const resultPerPage=10;
const apiFeature=new Apifeatures(fileUpload.find({user:req.user._id}),req.query)
.search()
apiFeature.pagination(resultPerPage)
const  uploadedFiles = await apiFeature.query;
    if(uploadedFiles.length===0){
        res.status(200).json({
            success:false,
            message:"You don't have uploaded any file  please upload your files"
        })
    }

    else{
        res.status(201).json({
            success:true,
            message:"Data fetched  successfully",
            uploadedFiles,
            resultPerPage,
            fileCount
        })
    }
}
}