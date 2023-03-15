import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink} from 'react-router-dom';
import './contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="page-container">
      <h1 style={{textAlign: 'center', fontSize: "3rem"}}> Sign up to follow my coding journey!</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Sign up for updates on my blog" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleShow}>
          Submit
        </Button>
      </Form>

  

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You're all signed up!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <NavLink to={'/home'}>
          <Button variant="primary" onClick={handleClose}>
            Go Back to Home
          </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>

      <div className="footer-container">
        <div>
        <NavLink to="https://github.com/zakirali1">
        <FontAwesomeIcon icon={faGithub} size='6x'/>
        </NavLink>
        </div>
        <div>
        <NavLink to="mailto: zakir@hotmail.com">
        <FontAwesomeIcon icon={faEnvelope} size='6x' className="icons"  />
        </NavLink>
        </div>
        <div>
        <NavLink to="https://www.linkedin.com/in/zakir-ali-ccnp-r-s-itilv3-45097356/">
        <FontAwesomeIcon icon={faLinkedin} size='6x' className="icons"  />
        </NavLink>
        </div>
        
      </div>
    </div>
  );
}

export default Contacts;