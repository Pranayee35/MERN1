const {Schema,model,default: mongoose} = require("mongoose");
const { string } = require("zod");
const { required } = require("../validators/auth-validator");
const contactschema = new Schema({
    username:{
        type:string,
        required:true
    },
    email:{
        type: string,
        required: true
    },
    message:{
        type: string,
        required: true
    },
});
const Contact = new model("Contact",contactschema);
module.exports = Contact;