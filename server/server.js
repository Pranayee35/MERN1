require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authroute = require("./router/auth-router");
const contactroute = require("./router/contact-router");
const serviceroute = require("./router/service-router");
const adminroute = require("./router/admin-router");
const errormiddleware = require("./middlewares/error-middleware");
const connectdb = require("./utils/db");
const corsOptions = {
    origin:"http://localhost:5173",
     methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials:true,
}
app.use(cors(corsOptions));
app.use(express.json());
// to use the router in your main express app,you can "mount" it at a specific url prefix
app.use("/api/auth",authroute);
app.use("/api/form",contactroute);
app.use("/api/data",serviceroute);
app.use("/api/admin",adminroute);
app.use(errormiddleware);
const PORT = process.env.PORT || 5000;
connectdb()
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`server is running at port:${PORT}`);
    });
})
.catch((error)=>{
    console.log("DB ERROR(server.js):", error.message);
});

