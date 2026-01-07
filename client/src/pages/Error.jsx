import { NavLink } from "react-router-dom"

export const Error = ()=>{
    return(
        <>
        <section className="errorpage">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry!Page not found</h4>
                <p>
                    Oops! It seems like the page you are trying to access doesnt exist. If you believe there is an issue, feel free to report it and we will look into it.
                </p>
                <div className="btns grid grid-two-cols">
                    <NavLink to="/">
                    <button>Return home</button>
                    </NavLink>
                    <NavLink to="/contact">
                    <button>Report problem</button>
                    </NavLink>
                </div>
            </div>
        </section>
        </>
    )
}