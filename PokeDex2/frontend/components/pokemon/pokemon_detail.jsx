import React from 'react';
class PokemonDetail extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokeId);
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.pokeId !== prevProps.match.params.pokeId) {
            this.props.requestSinglePokemon(this.props.match.params.pokeId);
        }
    }

    render() {
        const { attack, defense, pokeType } = this.props.pokemon[this.props.match.params.pokeId];
        return (
            <section className="pokemon-detail">
                <span>Type: {pokeType}</span>
                <span>Attack: {attack}</span>
                <span>Defense: {defense}</span>
                <span>Moves: {this.props.moves}</span>
            </section>
        )
    }
}

export default PokemonDetail;