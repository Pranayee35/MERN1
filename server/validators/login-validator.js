const { z } = require("zod");
const loginschema = z.object({
     email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast of 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),
    password: z
    .string({required_error:"password is required"})
    .min(7,{message:"password must be atleastt of 7 characters"})
    .max(1024,{message:"Password cant be greater than 1024 characters"}),
});
module.exports = loginschema;