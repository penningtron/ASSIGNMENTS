// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        setNextPage(response.data.info.next);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // : ) hey there

    //shhhh im  demoing lol

    // haha ok. 

    fetchCharacters();
  }, []);

  const handleNextPage = async () => {
    try {
      const response = await axios.get(nextPage);
      setCharacters(response.data.results);
      setNextPage(response.data.info.next);
      window.scrollTo(0, 0); // Scroll to the top of the page
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const charPageRoute = (id) => {
    navigate(`/charinfo/${id}`)

  }

  return (
    <Container>
      <h1 className="mt-5 mb-4">Rick and Morty Characters</h1>
      <Row>
        {characters.map(character => (
          <Col md={4} className="mb-4" key={character.id}>
            <Card>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>Status: {character.status}</Card.Text>
                <Card.Text>Species: {character.species}</Card.Text>
                <Card.Text>Origin: {character.origin.name}</Card.Text>
                <Button variant="primary" onClick={() => charPageRoute(character.id)}> 
                  Details
                    
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* nextPage && is a conditional rendering technique in JavaScript often used in React applications, known as the "short-circuit" evaluation. */}


      {nextPage && (
        <div className="mt-4 text-center">
          <Button onClick={handleNextPage} variant="primary">Next Page</Button>
        </div>
      )}
    </Container>
  );
}

export default CharactersPage;
