// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function HomePage() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(data => {
        setEpisodes(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
      <h1 className="mt-5 mb-4">Rick and Morty Episodes</h1>
      <Row>
        {episodes.map(episode => (
          <Col md={4} className="mb-4" key={episode.id}>
            <Card>
              <Card.Body>
                <Card.Title>{episode.name}</Card.Title>
                <Card.Text>Episode: {episode.episode}</Card.Text>
                <Card.Text>Air Date: {episode.air_date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
