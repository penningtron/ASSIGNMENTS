import Spinner from 'react-bootstrap/Spinner';

function MySpinner() {
  return (
    <Spinner animation="grow" variant='danger' role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default MySpinner;