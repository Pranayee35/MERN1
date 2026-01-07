import { useState } from "react";
import contactimg from "../assets/images/contact.svg";
import { useAuth } from "../../store/auth";
const defaultContactForm = {
        username:"",
        email: "",
        message: "",
    };
export const Contact = ()=>{
    const [form,setform] = useState(defaultContactForm);
    const [userData,setUserData] = useState(true);
    const {user,API} = useAuth();
    if(user && userData){
        setform({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }
    const handleinput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setform({
            ...form,
            [name] : value,
        })
    };
    const handlesubmit = async (e)=>{
        e.preventDefault();
        console.log(form);
        try{
            const response = await fetch(`${API}/api/form/contact`,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(form),
            });
            if(response.ok){
                setform(defaultContactForm);
                const data = await response.json;
                console.log(data);
                alert("message sent successfully!");
            }
        }catch(error){
            alert("message not sent");
            console.log(error);
            
    }
    }
    return (
        <>
        <main>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="mainheading">Contact Us</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contactimage">
                        
                        <img src={contactimg} alt="image"/>
                    </div>
                    <section className="contactform">
                        <form onSubmit={handlesubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" id="username" required autoComplete="off" value={form.username} onChange={handleinput}/>
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email"  id="email" required autoComplete="off"  value={form.email} onChange={handleinput}/>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea type="text" cols="30" rows="6" name="message" id="message" required autoComplete="off" value={form.message} onChange={handleinput}></textarea>
                            </div>
                            <br/>
                            <button type="submit">
                                Send
                            </button>
                        </form>
                    </section>
                </div>
                <section>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.983566624336!2d73.7726122!3d18.5747796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b900268e578d%3A0x487a08e0d12d12a3!2sNexasoft%20innovations%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1765869674822!5m2!1sen!2sin" width="100%" height={450}
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </section>
        </main>
        </>
    );
};