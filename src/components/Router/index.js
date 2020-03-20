import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from '../About'
import Contact from '../Contact'
import Navbar from '../Navbar'
import App from '../../App'

const Router = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default Router