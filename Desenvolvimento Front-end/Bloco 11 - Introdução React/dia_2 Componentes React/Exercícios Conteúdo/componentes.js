// Existem duas maneiras de definirmos um componente:

// Via função JavaScript:

function Greeting(props) {
  return (<h1>Hello, {props.name}</h1>);
}

export default Greeting;

// Via classe :

import React from 'react';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}</h1>);
  }
}

export default Greeting;