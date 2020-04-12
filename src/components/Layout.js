import React from 'react'
import Footer from '../styling/Footer'
import NavBar from '../styling/NavBar'
import logo from "../images/logo.jpg";

export default function Layout(props) {
    return (
        <>
            <img src={logo} className="logo" />
            <NavBar />
                { React.Children.map ( props.children, child => child && React.cloneElement(child)) }
            <Footer />
        </>
    )
}