import React, {Component} from 'react'

class PokemonCard extends Component {
  constructor(pokemonUrl) {
    super(pokemonUrl)
    this.state = {
      url: pokemonUrl,
      pokemonName: '',
      pokedexNumber: null,
      frontSprite: '',
      stats: []
    };
  }

  componentDidMount() {
    fetch(this.state.url.pokemonUrl)
      .then(response => response.json())
      .then(result => this.setState({
          pokemonName: result.name, 
          pokedexNumber: result.id,
          frontSprite: result.sprites.front_default,
          stats: result.stats
      }));
  }

  render(){
    const { pokemonName, pokedexNumber, frontSprite, stats } = this.state;
    return(
      <div className="pokemon-card">
        <h1>{ pokemonName.slice(0, 1).toUpperCase() + pokemonName.substring(1) }</h1>
        <p> #{ pokedexNumber }</p>
        <img src={ frontSprite } alt={ pokemonName }></img>
        <h3> Stats</h3>
        <ul>
          { stats.map(stat => (
            <li key={ stat.stat.name }>
              <p> Name: { stat.stat.name } </p>
              <p> Base Stat: { stat.base_stat }</p> 
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonCard;