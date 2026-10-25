import mongoose  from 'mongoose'


const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MongoDB_URL)
        console.log("MongoDB Connected")
    }
    catch(e){
        console.log(e.message)
    }
}

export default connectDB
