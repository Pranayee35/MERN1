import { useEffect, useState } from "react"
import { useAuth } from "../../store/auth"

export const AdminContacts = ()=>{
    const {authorizationToken,API} = useAuth();
    const [contacts,setContacts] = useState([]);
    const getContactsData = async()=>{
        try{
            const response = await fetch(`${API}/api/admin/contacts`,{
                method:"GET",
             headers:{
                Authorization:authorizationToken,
             }
            });
            const data= await response.json();
            if(response.ok){
                setContacts(data);
            }
        }catch(error){
            console.log(error);
            
        }
    };
    const deleteContact = async(id)=>{
            const response = await fetch(`${API}/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken,
                }
            });
//             if (!response.ok) {
//   console.error("Delete failed");
//   return;
// }

const data = await response.json();
            console.log("contacts after delete:",data);
            if(response.ok){
                getContactsData();
            }
        }
    useEffect(()=>{
        getContactsData();
    },[]);
    return (
        <>
        <section className="admin-contacts-section">
        <h1>Admin Contacts Data</h1>
        <div className="container admin-users">
        {contacts.map((curContact,index)=>{
            const {username,email,message,_id} = curContact;
            return (
                <div key={index}>
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{message}</p>
                    <button className="btn" onClick={()=>deleteContact(_id)}>Delete</button>
                </div>
            );
        })}
        </div>
    </section>
        </>
    )
}