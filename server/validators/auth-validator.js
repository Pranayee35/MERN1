const { z, Schema } = require("zod");
// creating an object Schema
const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 characters"}),
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast of 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),
    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"phone must be atleast of 10 characters"})
    .max(20,{message:"Phone must not be more than 20 characters"}),
    password: z
    .string({required_error:"password is required"})
    .min(7,{message:"passwordd must be atleast of 7 characters"})
    .max(1024,{message:"Password cant be greater than 1024 characters"}),
});
module.exports = signupSchema;
 