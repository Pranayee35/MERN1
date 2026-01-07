const adminMiddleware = async(req,res,next)=>{
    try{
        if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
        console.log(req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({message:"Access denied.User is not an admin."});  
        }
        
        next();
    }catch(error){
        next(error);
    }
};
module.exports = adminMiddleware;