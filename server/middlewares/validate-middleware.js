// await schema.parseasync(req.body) is the line where you use zod to validate the request bosy against the defined schema
const validate = (schema)=>async(req,res,next)=>{
    try{
        const parsebody = await schema.parseAsync(req.body);
        req.body = parsebody;
        next();
    }
   catch(error) {
    // console.log(error); // shows formatted error
    // console.log(error.issues); // shows real issues array
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = error.issues[0].message;
    const ERROR = {
        status,
        message,
        extraDetails,
    };
    // res.status(400).json({ msg: message });
    next(ERROR);
}

};
module.exports = validate;