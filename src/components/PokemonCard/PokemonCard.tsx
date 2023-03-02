import React, { useState, useEffect } from 'react';
import {useActions} from "../../hooks/useActions";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './PokemonCard.css';

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonData {
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

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const [pokemonData, setPokemonData] = useState<PokemonData | undefined>();
    const {setPokemonStats} = useActions()

    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            setPokemonData(data);
        };
        fetchPokemonData();
    }, [pokemon.url]);

    const handleClick = () => {
        setPokemonStats(pokemonData)
    };

    return (
        <Card
            onClick={handleClick}
            sx={{ maxWidth: 220 }}
            className="card"
        >
            <CardMedia
                sx={{ height: 140 }}
                image={pokemonData?.sprites.front_default}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemon.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {pokemonData?.types.map((type) => (
                        <div key={type.type.name}>{type.type.name}</div>
                    ))}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;
