import { Navigate, NavLink, Outlet } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdHomeRepairService } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../../store/auth";
export const AdminLayout = ()=>{
    const {user,isLoading} = useAuth();
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(!user.isAdmin){
        return <Navigate to="/"/>;
    }
    return(
        <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users" className="nav-item"><FaUser /> users</NavLink></li>
                        <li><NavLink to="/admin/contacts" className="nav-item"><IoMdContacts /> contacts</NavLink></li>
                        <li><NavLink to="/services" className="nav-item"><MdHomeRepairService />services</NavLink></li>
                        <li><NavLink to="users" className="nav-item"><FaHome /> home</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>
        </>
    )
}