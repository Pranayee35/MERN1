import aboutimg from "../assets/images/about.svg";
import { useAuth } from "../../store/auth_temp";
export const About = ()=>{
    
    const {user} = useAuth();
    return (
        <>
        <main>
        <section className="aboutpage">
        <div className="container grid grid-two-cols">
            <div className="abouttext">
                <p>Hi, {user?.username}</p>
                <p>Welcome to NexaSoft Technologies</p>
                <br/>
                <h1>Why Choose Us?</h1>
                <br/>
                <br/>
                <br/>
                <p>
                    Expertise:
          Our team consists of highly skilled professionals           with deep industry knowledge and hands-on experience           in modern technologies.
          
                </p>
                <br/>
                <p>
                   Customization:
We believe every business is unique. Our solutions are fully customized to match your goals, challenges, and growth plans. 
                </p>
                <br/>
                <p>
                 Customer-Centric Approach:
Client satisfaction is our top priority. We ensure transparent communication and continuous support at every stage.   
                </p>
                <br/>
                <p>
                    Affordability:
We provide high-quality solutions at competitive prices without compromising performance or reliability
                </p>
                <br/>
                <p>
                    Reliability:
Count on us for dependable services with guaranteed uptime and 24/7 technical support.
                </p>
            </div>
            <div className="aboutimage">
                <img src={aboutimg} alt="image"/>
            </div>
        </div>
        </section>
        </main>
        <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>registered companies</p>
                </div>
                <div className="div1">
                    <h2>100,000+</h2>
                    <p>Happy Clients</p>
                </div>
                <div className="div1">
                    <h2>500+</h2>
                    <p>Skilled developers</p>
                </div>
                <div className="div1">
                    <h2>24/7</h2>
                    <p>support service</p>
                </div>
                
            </div>
            </section> 
        </>
    );
};