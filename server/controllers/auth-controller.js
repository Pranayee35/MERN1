 const User = require("../models/user-model");
 const bcrypt = require("bcryptjs");
 const home = async(req,res)=>{
    try{
    res
    .status(200)
    .send("Welcome to the mern website using controller");
    }
    catch(error){
        console.log("error");
        
    }
 };
 const register = async(req,res,next)=>{
    try{
        const {username,email,phone,password} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message: "email already exists"});
        }
        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound);
        const usercreated = await User.create({      username,
        email,
        phone,
        password})
         res.status(201).json({msg:usercreated, token: await usercreated.generateToken(),userId: usercreated._id.toString()});
    }
    catch(error){
        // res.status(400).send({msg:"Page not found"}); 
        next(error) ;
    }
 }
 const login = async (req,res)=>{
    try{
        const{email,password} = req.body;
        const userexist =  await User.findOne({email});
        if(!userexist){
            return res.status(400).json({message:"invalid credentials"});
        }
        const isPasswordCorrect = await userexist.comparePassword(password);
        if(isPasswordCorrect){
            res.status(200).json({
                msg:"Login successful",
                token: await userexist.generateToken(),
                userId: userexist._id.toString(),
            });
        }else{
            res.status(401).json({message:"Invalid emai or password"});
        }
    }
    catch(error){
        next(error);
    }
 };
//  to send user data-user logic
const user = async(req,res)=>{
    try{
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    }catch(error){
        console.log(`error from the user route ${error}`);
        
    }
}
 module.exports = {home,register,login,user};