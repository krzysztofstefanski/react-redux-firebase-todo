import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/">CreateProject</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating yellow darken-3" >KS</NavLink></li>
        </ul>


        
        
    )
}

export default SignedInLinks