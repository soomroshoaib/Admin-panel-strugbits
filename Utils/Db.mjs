import mongoose, { connect } from 'mongoose';



const URL = process.env.MONGODB_URL
const connectDB = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("connect your database ")
    } catch (error) {
        console.log("data base connection fail")
        process.exit(0)
    }
}

export default connectDB