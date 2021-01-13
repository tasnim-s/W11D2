import { connect } from 'react-redux';
import { requestSinglePokemon } from './../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => {
    const pokeId = ownProps.match.params.pokeId;
    const pokemon = state.entities.pokemon[pokeId] || {};
    return {
        pokemon: pokemon
    }
}

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (pokeId) => dispatch(requestSinglePokemon(pokeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)