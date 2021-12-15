import React from 'react'
import {Link} from 'react-router-dom'

// link to login page from register page in case of accidental navigation
const Home = () => {
    return (
        <div id="logOut">
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Log In</Link>
        </div>
    )
}

export default Home