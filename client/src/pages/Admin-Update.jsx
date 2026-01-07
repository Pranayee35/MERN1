import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useAuth } from "../../store/auth";
import {toast} from "react-toastify"
export const AdminUpdate = ()=>{
    const [data,setData] = useState({
        username:"",
        email:"",
        phone:"",
    });
    const params = useParams();
    const {authorizationToken,API} = useAuth();

    const getSingleUserData = async ()=>{
        try{
            const response = await fetch(`${API}/api/admin/users/${params.id}`,{
            method:"GET",
            headers:{
                Authorization:authorizationToken,
            }
        });
        const data = await response.json();
        console.log("users single data:", data);
        setData({
            username:data.username,
            email:data.email,
            phone:data.phone,
        });
        }catch(error){
            console.log(error);
            
        }
        
    };
    useEffect(()=>{
        getSingleUserData();
    },[]);
    const handleinput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [name]:value,
        });
    };
    const handlesubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await fetch(`${API}/api/admin/users/update/${params.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                Authorization:authorizationToken,
            },
            body:JSON.stringify(data),
        });
        if(response.ok){
            toast.success("Updated successfully!")
        }else{
            toast.error("Update failed!")
        }
        }catch(error){
            console.log(error);
            
        }
    }
    return (
     <section className="section-contact">
                    <div className="contact-content container">
                        <h1 className="mainheading">Update User Data</h1>
                    </div>
                    <div className="container grid grid-two-cols">
                        <section className="contactform">
                            <form onSubmit={handlesubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input type="text" name="username" id="username" required autoComplete="off" value={data.username} onChange={handleinput}/>
                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input type="email" name="email"  id="email" required autoComplete="off"  value={data.email} onChange={handleinput}/>
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="phone" name="phone" id="phone" required autoComplete="off" value={data.phone} onChange={handleinput}></input>
                                    
                                </div>
                            <div>
                                    <button>Update</button>
                                   </div>
                            </form>
                        </section>
                    </div>
                    
                </section>
    )
}