import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to database');
    }
    catch(error){
        console.error(`${error.message}`);
        console.log('error');
    }

}
export default connectDB;
