import { useState } from "react";
import loginimage from "../assets/images/login.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth_temp";
import {toast} from "react-toastify"
export const Login = ()=>{
    const [user,setuser] = useState({
        email:"",
        password:"",
    });
    const navigate = useNavigate();
    const {storeTokenLS,API} = useAuth();
    const handleinput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setuser({
            ...user,
            [name]: value,
        })
    };
    const handlesubmit = async(e)=>{
        e.preventDefault();
        // console.log(user);
        try{
            const response = await fetch(`${API}/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",

                },
                body:JSON.stringify(user),
            });
            // console.log(response);
            const res_data = await response.json();
            console.log(res_data);
            
            if(response.ok){
                
                
                storeTokenLS(res_data.token);
                setuser({
                    email:"",
                    password:"",
                }),
                toast.success("Login successfull!")
                navigate("/");
            }else{
                toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
                console.log("Invalid credentials");
                
            }
        }catch(error){
            console.log("login",error);
            
        }
        
    }
    return (
        <>
        <section>
            <main>
                <div className="login-section">
                    <div className="container grid grid-two-cols">
                       <div className="login-image">
                        <img src={loginimage} alt="" />

                       </div>
                       <div className="login-form">
                        <h1 className="mainheading">Login Form</h1>
                        <br/>
                        <form onSubmit={handlesubmit} autoComplete="off">
                            <div>
                                <label>Email : </label>
                                <input type="email" name="email" id="email" value={user.email} placeholder="Email Address" required autoComplete="off" onChange={handleinput}/>
                            </div>
                            <div>
                                <label>Password : </label>
                                <input type="password" name="password" id="password" value={user.password} placeholder="Your password" required autoComplete="off" onChange={handleinput}/>
                            </div>
                            <br/>
                            <button type="submit">Login now</button>
                        </form>
                       </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    );
};