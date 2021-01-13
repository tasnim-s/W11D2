import React from 'react';
import { Route } from 'react-router-dom';
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container'


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    <Route path={`/pokemon/${this.props.pokemon[this.props.match.params.pokemonId]}`} component={PokemonDetailContainer}/>
    return (
    <section className="pokedex">
      <ul>
      {this.props.pokemon.map((poke) => (
        <PokemonIndexItem key={poke.id} pokemon={poke} />
      ))}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;