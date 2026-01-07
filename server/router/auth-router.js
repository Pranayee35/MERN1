const express = require("express");
const router = express.Router();
const authcontrollers= require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const loginschema = require("../validators/login-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware")
// router.get("/",(req,res)=>{
//     res.status(200).send("Welcome to the mern website using router");
// });
router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema),authcontrollers.register); 
router.route("/login").post(validate(loginschema),authcontrollers.login); 
router.route("/user").get(authMiddleware,authcontrollers.user); 

module.exports = router;