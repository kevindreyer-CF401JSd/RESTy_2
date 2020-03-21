import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from '../About'
import Contact from '../Contact'
import Header from '../Header/header'
import Navbar from '../Navbar/navbar'
import App from '../../App'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
      <footer>
        Codefellows JS 401d34 Lab 29 Kevin Dreyer
      </footer>
    </BrowserRouter>
  )
}

export default Router