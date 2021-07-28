import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.handleLoginChange = this.handleLoginChange.bind(this);

    this.state = {
      login: '',
      password:'',
      textarea:'',
    };
  }

  handleLoginChange(event) {
    this.setState({login: event.target.value})
  }

  render() {
    return (
      <div className="container">
        <form >
          <label htmlFor=""> Login
            <input 
              name="login"
              type="text"
              value={this.state.login}
              onChange={this.handleLoginChange}
            />
          </label>
  
          <label> Senha
            <input name="password"type="password" />
          </label>
          <p>Digite algo:</p>
          <textarea name="textarea" rows="4" cols="50"></textarea>
        </form>
      </div>
    );
  }

}

export default App;
