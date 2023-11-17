const mongoose=require("mongoose")

MONGODB_CONNECT_URI = "mongodb+srv://signup:cIAQvPC7qxZ5vaGi@signup.srmv7gq.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(MONGODB_CONNECT_URI)
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
