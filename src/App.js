import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "mdbreact/dist/css/mdb.css"
import Routes from "./components/Routes"
import logo from "./images/logo.jpg"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <img src={logo} className="logo" />
      <Routes />
      <Footer />
    </>
  )
}
