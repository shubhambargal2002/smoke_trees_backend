const mongoose=require('mongoose');
const DATABASE = "mongodb+srv://shubham_bargal_2002:Shubham2002@cluster0.cecbpff.mongodb.net/smoke_trees?retryWrites=true&w=majority";

mongoose.connect(DATABASE).then(()=>{
    console.log("connected to mongoDB successfully")
}).catch((error)=>{
    console.log(error)
    console.log("error")
})
