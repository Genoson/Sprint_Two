import React from 'react'


const Header = () => {
    console.log(window.location.href)
    return (
        
        <header>
            <div>
            <h1>uWeather</h1>
            {window.location.href==="http://localhost:3002/" ? null:<h3>There will be navigation elements here</h3>}
            </div>
        </header>
    )
}

export default Header
