import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Archive from "../pages/Archive"
import Contact from "../pages/Contact/Contact"
import Media from "../pages/Media"
import NavBar from "./NavBar"

export default function Routes() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/media" component={Media} />
      <Route path="/contact" component={Contact} />
      <Route path="/archive" component={Archive} />
    </Router>
  )
}
