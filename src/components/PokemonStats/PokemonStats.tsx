import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PokemonStats = () => {

    const {pokemonData} = useTypedSelector(state => state.pokemons)

    if (!pokemonData) {
        return null;
    }

    return (
        <Card
            sx={{ maxWidth: 280 }}
        >
            <CardMedia
                sx={{ height: 200 }}
                image={pokemonData?.sprites.front_default}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemonData?.forms[0]?.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {pokemonData?.stats.map((stat) => (
                        <div key={stat.stat.name}>{stat.stat.name} : {stat.base_stat}</div>
                    ))}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PokemonStats;
