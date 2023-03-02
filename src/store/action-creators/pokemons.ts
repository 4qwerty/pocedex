import {Dispatch} from "redux";
import axios from "axios";
import {PokemonData, PokemonsAction, PokemonsActionTypes} from "../../types/pokemons";

interface SetPokemonStatsAction {
    type: 'SET_POKEMON_STATS';
    payload: PokemonData | undefined;
}

export const setPokemonStats = (data: PokemonData | undefined): SetPokemonStatsAction => ({
    type: 'SET_POKEMON_STATS',
    payload: data
});

export const fetchPokemons = (offset: number, limit: number) => {
    return async (dispatch: Dispatch<PokemonsAction>) => {
        try {
            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS})
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)

            dispatch({type: PokemonsActionTypes.FETCH_POKEMONS_SUCCESS, payload: response.data.results})
        } catch (e) {
            dispatch({
                type: PokemonsActionTypes.FETCH_POKEMONS_ERROR,
                payload: 'An error occurred while loading the pokemon list'
            })
        }
    }
}

