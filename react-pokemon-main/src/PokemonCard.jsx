import  { useState, useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
function PokemonCard({ pokemonName }) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        if (!pokemonName) return; // Handle the case where pokemonName is undefined or null

        const fetchPokemonData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                setPokemonData(response.data);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchPokemonData();
    }, [pokemonName]);

    if (!pokemonName) {
        return null; // Return null if pokemonName is undefined or null
    }

    return (
        <div className="pokemon-card">
            {pokemonData && (
                <>
                    <img src={pokemonData.sprites.front_default} alt={pokemonName} />
                    <h2>{pokemonName}</h2>
                </>
            )}
        </div>
    );
}

export default PokemonCard;

