import {PokemonsAction, PokemonsActionTypes, PokemonsState} from "../../types/pokemons";

const initialState: PokemonsState = {
    pokemons: [],
    pokemonData: null,
    error: null,
    offset: 0,
    limit: 12,
    loading: false,
}

export const pokemonsReducer = (state = initialState, action: PokemonsAction): PokemonsState => {
    switch (action.type) {
        case PokemonsActionTypes.FETCH_POKEMONS:
            return {...state, loading: true}
        case PokemonsActionTypes.FETCH_POKEMONS_SUCCESS:
            return {...state, loading: false, pokemons: action.payload}
        case PokemonsActionTypes.FETCH_POKEMONS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PokemonsActionTypes.SET_TODO_PAGE:
            return {...state, offset: action.payload}
        case PokemonsActionTypes.SET_POKEMON_STATS:
            return {...state, pokemonData: action?.payload}
        default:
            return state
    }
}
