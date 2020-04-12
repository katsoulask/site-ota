import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Archive from "../Pages/Archive";
import Contact from "../Pages/Contact";
import Media from "../Pages/Media";
import { BrowserRouter, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/media" component={Media} />
      <Route path="/contact" component={Contact} />
      <Route path="/archive" component={Archive} />
    </BrowserRouter>
  );
}
