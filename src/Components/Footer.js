import React from 'react'

// The footer component, consistent across all pages
// link to my api source and my email 

const Footer = () => {
    return (
        <footer>
            <p>All weather Information acquired from :</p>
            <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">openweathermap.org</a>
            <p>&copy; 2021 Stephen Squire</p>
            <p>All rights reserved</p>
            <p>Contact information: <a href="mailto: stephen.squire@keyin.com" target="_blank" rel="noreferrer">Email Me</a>
            </p>
     
        </footer>
    )
}

export default Footer
