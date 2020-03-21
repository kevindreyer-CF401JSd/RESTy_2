import React from 'react';
import './App.css';

// import Header from './components/Header/header'
import Interface from './components/Interface/interface'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      apiurl: '',
      restMethod: 'GET',
      results: '',
      selectGET: true,
      selectPOST: true,
      selectPUT: true,
      selectDELETE: true
    }
  }

  makeAPICall = async () => {
    const raw = await fetch(this.state.apiurl, {method: this.state.restMethod});
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

  changeColor = (val) => {
    this.setState({restMethod: val})
    if (val === 'GET') {
      this.setState({selectGET: !this.state.selectGET})
      if (!this.state.selectPOST) this.setState({selectPOST: !this.state.selectPOST})
      if (!this.state.selectPUT) this.setState({selectPUT: !this.state.selectPUT})
      if (!this.state.selectDELETE) this.setState({selectDELETE: !this.state.selectDELETE})
    } 
    if (val === 'POST') {
      if (!this.state.selectGET) this.setState({selectGET: !this.state.selectGET})
      this.setState({selectPOST: !this.state.selectPOST})
      if (!this.state.selectPUT) this.setState({selectPUT: !this.state.selectPUT})
      if (!this.state.selectDELETE) this.setState({selectDELETE: !this.state.selectDELETE})
    }
    if (val === 'PUT') {
      if (!this.state.selectGET) this.setState({selectGET: !this.state.selectGET})
      if (!this.state.selectPOST) this.setState({selectPOST: !this.state.selectPOST})
      this.setState({selectPUT: !this.state.selectPUT})
      if (!this.state.selectDELETE) this.setState({selectDELETE: !this.state.selectDELETE})
    }
    if (val === 'DELETE') {
      if (!this.state.selectGET) this.setState({selectGET: !this.state.selectGET})
      if (!this.state.selectPOST) this.setState({selectPOST: !this.state.selectPOST})
      if (!this.state.selectPUT) this.setState({selectPUT: !this.state.selectPUT})
      this.setState({selectDELETE: !this.state.selectDELETE})
    }
  }

  render () {
    let get_class = this.state.selectGET ? "RESTunselected" : "RESTselected"
    let post_class = this.state.selectPOST ? "RESTunselected" : "RESTselected"
    let put_class = this.state.selectPUT ? "RESTunselected" : "RESTselected"
    let delete_class = this.state.selectDELETE ? "RESTunselected" : "RESTselected"
    return (
      <div className="App">
        <form className="URLform">
          <input onChange={this.handleChange} type="text" name="urlpath" placeholder='Place URL here'></input>
        </form>
        <div classnName="buttons">
          <div className="RESTmethods">
            <button className="method" className={get_class} onClick={() => this.changeColor('GET')}>GET</button>
            <button className="method" className={post_class} onClick={() => this.changeColor('POST')}>POST</button>
            <button className="method" className={put_class} onClick={() => this.changeColor('PUT')}>PUT</button>
            <button className="method" className={delete_class} onClick={() => this.changeColor('DELETE')}>DELETE</button>
            <div>
              <button className="run" onClick={this.makeAPICall}>RUN</button>
            </div>
          </div>
        </div>
        <Interface content={this.state.results} />
      </div>
    );
  }
}

export default App;
