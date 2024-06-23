import User from "../models/user.model.js";

export const getusersForSidebar = async (req, res)=>{
    try{
        const loggedInUserId = req.user._id;
        let filterUsers = {};
        if (req.user.role === "admin") {
            filterUsers = await User.find({_id: {$ne: loggedInUserId} }).select("-password");
        } else {
            filterUsers = await User.find({_id: {$ne: loggedInUserId}, role:"admin"}).select("-password");
        }
        // remove "{_id: {$ne: loggedInUserId}}" to send message to ourselves
        
        res.status(200).json(filterUsers);
    }catch(error){
        console.log("Error in getusersForSidebar: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}