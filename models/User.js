import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema;

const userSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    age :{
        type : Number,
        required : true
    }
},{timestamps: true})

const User = mongoose.model('User',userSchema);
export default User;
