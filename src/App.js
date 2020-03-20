import React from 'react';
import './App.css';

const testApi = 'https://pokeapi.co/api/v2/pokemon/'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      apiurl: '',
      restMethod: 'get',
      results: ''
    }
  }

  // test = async () => {
  //   const raw = await fetch(testApi);
  //   const data = await raw.json();
  //   console.log('raw',raw);
  //   console.log('data',data);
  // }

  makeAPICall = async () => {
    const raw = await fetch(`${this.state.apiurl}`);
    const data = await raw.json();
    this.setState({
      results: [data]
    })
  }

  handleChange = e => {
    this.setState({
      apiurl: e.target.value
    });
  }

  render () {
    // this.test()
    return (
        <div className="App">
          <header className="App-header">
            <h1>RESTy</h1>
          </header>
            <div className="Form">
              <form>
                <input onChange={this.handleChange} type="text" id="apiurl" name="urlpath" placeholder="api url path"></input>
                <div className="RESTmethods">
                  <span>GET</span><span>POST</span><span>PUT</span><span>DELETE</span>
                </div>
              </form>
                  <button onClick={this.makeAPICall}>Go!</button>
                <article className="results">results: 
                  <div>
                    {this.state.results.length
                      ? this.state.results
                      : 'null'
                    }
                  </div>
                  <p>{this.state.results}</p>
                </article>
            </div>
          <footer>
            Codefellows JS 401d34 Lab 28 Kevin Dreyer
          </footer>
        </div>
    );
  }
}

export default App;