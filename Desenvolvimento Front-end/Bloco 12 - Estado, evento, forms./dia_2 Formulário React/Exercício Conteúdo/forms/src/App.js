import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      login: '',
      password:'',
      textarea:'',
      valor:'',
      termos: false,
    };
  }

handleChange({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
    [name]: value
  })
}

  render() {
    return (
      
      <div className="container">
        <form >
          <fieldset>
          <legend>Informações pessoais</legend>
            <label htmlFor=""> Login
              <input 
                name="login"
                type="text"
                value={this.state.login}
                onChange={this.handleChange}
              />
            </label>
    
            <label> Senha
              <input 
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>

            <select
              name="valor"
              value={this.state.valor}
              onChange={this.handleChange}
            >
              <option value="valor1">Valor 1</option>
              <option value="valor2">Valor 2</option>
              <option value="valor3">Valor 3</option>
          </select>
          </fieldset>

          <p>Digite algo:</p>

          <textarea 
            name="textarea"
            rows="4" cols="50"
            value={this.state.textarea}
            onChange={this.handleChange}
            ></textarea>

            <div>
              <label> Aceite os termos:
                <input 
                  name="termos"
                  type="checkbox"
                  value={this.state.termos}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <input type="file"/>
        </form>
      </div>
    );
  }

}

export default App;
