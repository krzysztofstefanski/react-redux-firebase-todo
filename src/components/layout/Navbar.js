import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return(
       <nav className="nav-wrapper black darken-3">
           <div className="container">
           <Link to="/" className="brand-logo">sisteme</Link>

           </div>

       </nav>
    )
}

export default Navbar