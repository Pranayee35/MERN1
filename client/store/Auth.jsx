import { createContext, useContext, useEffect} from "react";
import { useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [services,setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;
    const API = import.meta.env.VITE_APP_URI_API;
    const storeTokenLS = (serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem("token",serverToken)
    };
    let isLoggedIn = !!token;
    console.log("IS logged in",isLoggedIn);
    
    // tackling he logout functionality
    const LogoutUser = ()=>{
        setToken("");
        return localStorage.setItem("token",token);
    };
    const userAuthentication = async()=>{
        try{
            setIsLoading(true);
            const response = await fetch(`${API}/api/auth/user`,{
                method: "GET",
                headers: {
                    Authorization:authorizationToken,
                },

            });
            if(response.ok){
                const data = await response.json();
                console.log("user data",data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }else{
                console.error("Error fetching user data");
                
                setIsLoading(false);
            }
        }catch (error) {
         console.log("auth error", error);
        }
    };
    const getServices = async()=>{
        try{
            const response = await fetch(`${API}/api/data/service`,{
                method: "GET",
            });
            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        }catch(error){
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getServices();
        userAuthentication(); 
    },[]);

    return (
    <AuthContext.Provider value={{isLoggedIn,storeTokenLS,LogoutUser,user,services,isLoading,authorizationToken,API}}>
        {children};
    </AuthContext.Provider>
    );
};
export const useAuth = ()=>{
    const authContectValue = useContext(AuthContext);
    if(!authContectValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContectValue;
}