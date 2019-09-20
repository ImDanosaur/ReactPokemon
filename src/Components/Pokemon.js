import React, {Component} from 'react';
import PokemonCard from './PokemonCard';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      filter: ''
    };
  }

  handleChange = (event) => {
    this.setState({ filter: event.target.value})
  }
  
  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(result => result.results)
    .then(results => this.setState({ pokemon: results }));
  }

  render() {
    const { pokemon, filter } = this.state;
    return(
      <div className="pokemon">
        <label>Search: </label> 
        <input value={filter} placeholder="Pokemon" onChange={ this.handleChange }></input>
        { pokemon.filter(pokemon => pokemon.name.includes(filter.toLowerCase())).map(pokeman => (
          <PokemonCard key={ pokeman.name } pokemonUrl={ pokeman.url }/>
        )) }

      </div>
    );
  }
}

export default Pokemon;