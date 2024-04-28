//Remember to delete the conole log statements


const express=require('express');
const router=express.Router()
const formidable=require('formidable');
const  auth=require('../middlewares/auth')
const fileUpload=require("../models/fileUpload");
const cors = require('cors')


router.use(cors({
  origin: "https://blockation.vercel.app",
  credentials: true
}));


router.get('/sendfile',auth,(req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname+'/index.html')
  })

  router.get('/getAllFiles', (req, res) => {
    res.json({ redirectUrl: "https://blockation.vercel.app/file/getAllFiles" });
  });




  
  router.post('/sendfile',auth,async(req,res)=>{
    const form=new formidable.IncomingForm();
    let add=0;
    let count=0;
    form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Error parsing form:', err);
          return res.status(500).send('Internal Server Error');
        }

        console.log('Files received:', files);
        console.log('Fields received:', fields);

        const cid = fields.cid;
        const formData = fields.formData;

        console.log('File:', files.file);
        add=add+1;
        console.log(req.user._id+"This is your user id")
        let userId =0
        if(req.user.displayName){
          userId=req.user.id;
        }
        else{
          userId=req.user._id
        }

        const uploadedFile = await new fileUpload({
            user: req.user.displayName ? req.user.id : req.user._id,
            originalfileName: files.file.originalFilename,
            newfileName: files.file.newFilename,
            cid: cid
        });
        count=count+1
        console.log(uploadedFile);
        const existingFile = await fileUpload.findOne({ user : userId, cid: cid });
        console.log(existingFile);
        if(!existingFile){
        await uploadedFile.save();
        }
        res.redirect("/file/getAllFiles")

});    
    
  
  
  })

  module.exports=router