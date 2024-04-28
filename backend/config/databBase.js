const mongoose=require('mongoose');
require('dotenv').config()
const connectDataBase=()=>{
    mongoose.set('strictQuery',true)
    mongoose.connect(process.env.DB_URI)
  
    .then((data)=>{
      
    console.log(`MongoDB is connected successsfully ${data.connection.host}`)
    })
  
}

module.exports=connectDataBase;