import React from 'react';
import './App.css';

import Header from './components/Header/header'
import Interface from './components/Interface/interface'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      apiurl: 'https://pokeapi.co/api/v2/pokemon/',
      restMethod: 'get',
      results: ''
    }
  }

  makeAPICall = async () => {
    const raw = await fetch(`${this.state.apiurl}`);
    const data = await raw.json();
    console.log('data',data)
    this.setState({
      results: JSON.stringify(data),
    })
  }

  handleChange = e => {
    this.setState({
      apiurl: e.target.value
    });
  }

  render () {
    return (
      <div className="App">
        <Header />
        <form className="URLform">
          <input onChange={this.handleChange} type="text" name="urlpath" placeholder="api url path"></input>
        </form>
        <div className="RESTmethods">
          <span>GET</span><span>POST</span><span>PUT</span><span>DELETE</span>
          <button onClick={this.makeAPICall}>Go!</button>
        </div>
        <Interface content={this.state.results} />
        <footer>
          Codefellows JS 401d34 Lab 29 Kevin Dreyer
        </footer>
      </div>
    );
  }
}

export default App;
