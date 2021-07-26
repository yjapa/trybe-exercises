import React, { Component } from 'react';
import Pokemon from './Pokemon'

class Pokedex extends Component {
  render () {
    const { pokemon } = this.props;

   return (
     <div className="pokedex">
       {pokemon.map((pokemon) => <Pokemon key={pokemon.id} poke={pokemon}/>)}
     </div>
   )
  }
}

export default Pokedex;
