import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
import { HomePage, AboutPage, LinksPage, Navbar, NavbarItem } from "./Components.js"

function App() {
  return (
    <div>
      <Navbar>
        <NavbarItem href="/home" text="Home"/>
        <NavbarItem href="/about" text="About"/>
        <NavbarItem href="/links" text="Links"/>
      </Navbar>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/links" component={LinksPage}/>
        </Switch>
      </BrowserRouter>
      <footer className="footer">
        <p>Created by Uri Arev (2021). Copyright (©) Uri Arev 2021</p>
      </footer>
    </div>
  );
}

export default App;