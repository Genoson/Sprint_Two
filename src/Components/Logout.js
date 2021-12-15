import React from 'react'
import {Link} from 'react-router-dom'

// log out button for weather page, return to log in page
// doesnt purge the local storage of user logged in data
const Logout = () => {
    return (
        <div id="logOut">
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Log Out</Link>
        </div>
    )
}

export default Logout
