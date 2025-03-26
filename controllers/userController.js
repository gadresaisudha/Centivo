import User from "../models/User.js";
import asyncHandler from "../middleware/asyncHandler.js";
import mongoose from "mongoose";

const getUserById  = asyncHandler(async(req,res)=>{
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const currentUser = await User.findOne({ _id: id, age: { $gt: 21 } });
    if(currentUser){
        res.json(currentUser)
    }else{
        res.status(404);
        throw new Error("User not found or age<=21");
        console.log(currentUser)
    }
  });

  export {getUserById};
