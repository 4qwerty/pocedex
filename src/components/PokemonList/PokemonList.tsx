import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemoList.css"
import {Box, Button, CircularProgress} from "@mui/material";

const PokemonList: React.FC = () => {
    const {error, loading, pokemons, limit} = useTypedSelector(state => state.pokemons)
    const {fetchPokemons, setPokemonStats} = useActions()
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        fetchPokemons(offset, limit)
    }, [offset])

    console.log(offset)
    console.log(limit)

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return <h1>{error}</h1>
    }

    const handleChange = () => {
        setOffset(offset + limit)
        setPokemonStats(undefined)
    }

    return (
        <>
            <div className="container">
                {pokemons.map(pokemon =>
                    <div
                        key={pokemon.name}
                        className="item"
                    >
                        <PokemonCard pokemon={pokemon}/>
                    </div>
                )}
            </div>

            <Button
                onClick={handleChange}
                variant="contained"
            >
                Load more
            </Button>
        </>
    );
};

export default PokemonList;
