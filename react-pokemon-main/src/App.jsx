
import React, { useState } from 'react';
import PokemonList from './PokemonList';
import PokemonSearch from './PokemonSearch';

function App() {
    const [pokemonList, setPokemonList] = useState([]);

    // Callback function to add a new Pokemon to the list
    const handlePokemonAdd = (newPokemon) => {
        setPokemonList([...pokemonList, newPokemon]);
    };

    return (
        <div className="App">
            <h1>Pokémon App</h1>
            <PokemonSearch onPokemonAdd={handlePokemonAdd} />
            <PokemonList pokemonList={pokemonList} />
        </div>
    );
}

export default App;

