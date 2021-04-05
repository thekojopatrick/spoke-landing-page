import React from 'react'

//Importing components
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'


function Header() {
    return (
        <header>
            <Navbar />
            <Hero />
        </header>
    )
}

export default Header