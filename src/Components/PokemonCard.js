import React, {Component} from 'react'

class PokemonCard extends Component {
    state = {
        pokemon: []
    }


    pokemonMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(result => this.setState({ pokemon }))
    }

    render(){
        return(
            <div className="pokemon-card">
                <h1>Pokemon</h1>
            </div>
        )
    }
}