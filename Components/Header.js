import React from 'react'
import Logout from './Logout'
import {useLocation } from 'react-router-dom'
import Home  from './Home'

// Header, consistent across all pages
// logo is just a fancy typeface "meowscript"
// nav is a log out button and *refresh* button if developed

const Header = (props) => {

    const here = useLocation()
    console.log(here)
    return (
        
        <header>
            
            <h1>uWeather</h1>

            <nav>
            {here.pathname==="/"? null: here.pathname==="/register" ? <Home />:<Logout/>}
            </nav>
        </header>
    )
}

export default Header
