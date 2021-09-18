import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">UseContext</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink> {/* El "activeClassname" es una propiedad de NavLink a diferencia del Link */}
                    <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                    <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                </div>
                </div>
            </div>
            </nav>
    )
}

export default NavBar
