import React, { useState } from 'react';
import axios from 'axios';

function PokemonSearch({ onPokemonAdd }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
            setSearchResult(response.data);
            // Pass the searched Pokemon to the parent component for adding to the list
            onPokemonAdd(response.data);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Enter Pokemon Name"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default PokemonSearch;
