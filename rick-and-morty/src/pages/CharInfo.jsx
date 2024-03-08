import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';


  

function CharInfo() {
    const [character, setCharacter] = useState([])
    const { id } = useParams()
    

    

    useEffect(() => {
        const charResponse = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setCharacter(response.data)
            
         }
        charResponse();
        
    }, [])

    console.log(character)



    return(
        <>
        <h1>{character.name}</h1>
        </>
    //     <Container>
    //   <h1 className="mt-5 mb-4">Rick and Morty Characters</h1>
    //   <Row>
    //     {characters.map(character => (
    //       <Col md={4} className="mb-4" key={character.id}>
    //         <Card>
    //           <Card.Img variant="top" src={character.image} />
    //           <Card.Body>
    //             <Card.Title>{character.name}</Card.Title>
    //             <Card.Text>Status: {character.status}</Card.Text>
    //             <Card.Text>Species: {character.species}</Card.Text>
    //             <Card.Text>Origin: {character.origin.name}</Card.Text>
    //             <Button variant="primary" onClick={() => charPageRoute(character.id)}> 
    //               Details
                    
    //             </Button>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    //   </Container>
    )
        }
    
    



export default CharInfo