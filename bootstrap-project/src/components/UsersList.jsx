import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserPokemonList from './UserPokemonList'; // Import the UserPokemonList component

function UserListModal({ userPokemonList }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View My Pokémon List
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Pokémon List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render the UserPokemonList component and pass the user's list */}
          <UserPokemonList userPokemonList={userPokemonList} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserListModal;
