export interface PokemonData {
    forms: any[]
    sprites: {
        front_default: string;
    };
    stats: any[]
    types: {
        type: {
            name: string;
        };
    }[];
}

export interface PokemonsState {
    pokemons: any[];
    pokemonData: null | PokemonData;
    loading: boolean;
    error: null | string;
    offset: number;
    limit: number;
}

export enum PokemonsActionTypes {
    FETCH_POKEMONS = 'FETCH_POKEMONS',
    FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS',
    FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
    SET_POKEMON_STATS = 'SET_POKEMON_STATS'
}
interface FetchPokemonsAction {
    type: PokemonsActionTypes.FETCH_POKEMONS
}
interface FetchPokemonSuccessAction {
    type: PokemonsActionTypes.FETCH_POKEMONS_SUCCESS;
    payload: any[];
}
interface FetchPokemonsErrorAction {
    type: PokemonsActionTypes.FETCH_POKEMONS_ERROR;
    payload: string;
}
interface SetPokemonsPage {
    type: PokemonsActionTypes.SET_TODO_PAGE;
    payload: number;
}

interface SetPokemonStatsAction {
    type: PokemonsActionTypes.SET_POKEMON_STATS;
    payload: PokemonData;
}


export type PokemonsAction =
    FetchPokemonsAction
    | FetchPokemonsErrorAction
    | FetchPokemonSuccessAction
    | SetPokemonsPage
    | SetPokemonStatsAction
