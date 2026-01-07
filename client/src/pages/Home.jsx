import homeimg1 from "../assets/images/home1.svg";
import homeimg2 from "../assets/images/home2.svg";
import { NavLink } from "react-router-dom";
export const Home = ()=>{
    return (
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                <div className="herocontent">
                    <p>We are the Leading Digital Solutions Company</p>
                    <h1>Welcome to NexaSoft Technologies</h1>
                    <p>Are you ready to transform your business digitally? NexaSoft Technologies delivers cutting-edge software solutions, modern web applications, and scalable IT services designed to help your business grow faster and smarter.</p>
                    <div className="btn btn-group">
                        <NavLink to="/contact">
                        <button className="btn">connect now</button>
                        </NavLink>
                        <NavLink to="/services">
                        <button className="btn secondarybtn">learn more</button>
                        </NavLink>

                    </div>
                </div>
                <div className="heroImage">
                    <img src={homeimg1} alt="image"/>
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
             <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="heroImage">
                    <img src={homeimg2} alt="image"/>
                </div>
                <div className="herocontent">
                    <p>We’re here to support your growth</p>
                    <h1>Get Started Today</h1>
                    <p>Ready to take the next step toward smarter, faster, and more secure digital solutions? Connect with NexaSoft Technologies today for a free consultation and discover how our expertise can help your business succeed in the modern digital world.</p>
                    <div className="btn btn-group">
                        <a href="/contact"><button className="btn">connect now</button></a>
                        <a href="/services"><button className="btn secondarybtn">learn more</button></a>
                    </div>
                </div>
                
                </div>
            </section> 
        </>
    )
    
};