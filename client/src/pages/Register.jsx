import { useState } from "react";
import registerimage from "../assets/images/register.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth_temp";
import { toast } from "react-toastify";
export const Register = ()=>{
    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });
    const navigate = useNavigate();
    const {storeTokenLS,API} = useAuth();
    const handleinput = (e)=>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]:value,

        })
    }
    const handlesubmit = async(e)=>{
        e.preventDefault();
        console.log(user);
        try{
            const response = await fetch(`${API}/api/auth/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
           
        });
        
        const res_data = await response.json();
        console.log("res from server",res_data);
        if(response.ok){
            
            storeTokenLS(res_data.token);
            setUser({
                username: "",
                email: "",
                phone: "",
                password: "",
            });
            toast.success("Registration successful!");
            navigate("/") ;
        }else{
            toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
        }
         
        }catch(error){
            console.log("register",error);
            
        } 
        
        
        
    }
    return (
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src={registerimage} alt="registrstion image" width="500" height="500"
                             />
                        </div>
                        <div className="registration-form">
                           <h1 className="mainheading mb-3">Registration Form</h1> 
                           <br/>
                           <form onSubmit={handlesubmit} autoComplete="off">
                            <div>
                                <label>username</label>
                                
                                <input type="text" name="username" placeholder="Enter your name" id="username" required autoComplete="off" value={user.username} onChange={handleinput}/>
                            </div>
                            <div>
                                <label>email</label>
                                <input type="email" name="email" placeholder="Enter your email" id="email" required autoComplete="off"  value={user.email} onChange={handleinput}/>
                            </div>
                            <div>
                                <label>phone</label>
                                <input type="text" name="phone" placeholder="Enter phone number" id="phone" required autoComplete="off"  value={user.phone} onChange={handleinput}/>
                            </div>
                            <div>
                                <label>password</label>
                                <input type="password" name="password" placeholder="Enter password" id="password" required autoComplete="off"  value={user.password} onChange={handleinput}/>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-submit">Register now</button>
                           </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
};