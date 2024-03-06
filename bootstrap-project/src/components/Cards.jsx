import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import userPokemonList from './UserPokemonList'; // Import the new component








function PokemonCards() {
    const [pokemonList, setPokemonList] = useState([]);
    const [userPokemonList, setUserPokemonList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
            const data = response.data.results;
            // Fetch sprite URLs for each Pokémon
            const pokemonWithSprites = await Promise.all(data.map(async pokemon => {
              const spriteResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
              return {
                name: pokemon.name,
                sprite: spriteResponse.data.sprites.front_shiny,
                
              };
            

            
            }));
            setPokemonList(pokemonWithSprites);
          } catch (error) {
            console.error('Error fetching Pokémon data:', error);
          }
        };

        fetchData();
    }, []);
    // Fuction to add a pokemon to the users list
    const addToUserPokemonList = (pokemon) => {
      setUserPokemonList(prevList => [...prevList, pokemon])
      
    };

    return (
        <Container>
          <h1 className="text-center mt-3">Pokémon List</h1>
          <Row xs={1} md={2} lg={3} className="g-4">
            {pokemonList.map((pokemon, index) => (
              <Col key={index}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Text>#{index + 1}</Card.Text>
                    <Card.Text>#{pokemon.url}</Card.Text>
                    
                    <Card.Img variant='top' src={pokemon.sprite} />
                    <Button 
                      variant="primary"
                      onClick={() => addToUserPokemonList(pokemon)}
                      > Add to list
                      
                      </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
    }

export default PokemonCards;