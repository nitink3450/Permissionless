import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <img className='ml-5 logo' style={{heigth:"50px",width:"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt="logo" />

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav my-2 ml-auto mr-5 mt-lg-2">
                        <li className="nav-item active mx-5">
                            <a className="nav-link" href="/">Practice Areas</a>
                        </li>
                        <li className="nav-item active mx-5">
                            <a className="nav-link" href="/">Testimonials</a>
                        </li>
                        <li className="nav-item active mx-5">
                            <a className="nav-link" href="/">Cases</a>
                        </li>
                        <li className="nav-item active mx-5">
                            <a className="nav-link" href="/">Our Team</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 mr-5 my-lg-0">
                        <a className='mr-4 navbar-brand' href="/" >Sign in</a>
                        <button className="btn mr-5 btn_color my-2 my-sm-0 border1" type="submit">Get Started</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar;