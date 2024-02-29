
import PokemonCard from './PokemonCard';

function PokemonList() {
    const pokemonList = ['bulbasaur', 'charmander', 'squirtle', 'pikachu', 'caterpie', 'ditto']; // Example list of Pokémon names

    return (
        <div className="pokemon-list">
            {pokemonList.map((pokemonName, index) => (
                <PokemonCard key={index} pokemonName={pokemonName} />
            ))}
        </div>
    );
}

export default PokemonList;
