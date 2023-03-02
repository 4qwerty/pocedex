import React from 'react';
import PokemonList from "../components/PokemonList/PokemonList";
import PokemonStats from "../components/PokemonStats/PokemonStats";
import './Pokedex.css'
import Typography from "@mui/material/Typography";

const Pokedex = () => {

    return (
        <>
            <Typography sx={{ fontSize: 32, fontWeight: 'bold' }}>
                Pokedex
            </Typography>
            <div className="pokedex-container">
                <div className="pokemon-list-container">
                    <PokemonList/>
                </div>
                <div className="pokemon-stats-container">
                    <PokemonStats/>
                </div>
            </div>
        </>

    );
};

export default Pokedex;

