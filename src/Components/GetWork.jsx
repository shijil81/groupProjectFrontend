import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function GetWork() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary w-50 ms-1" onClick={handleShow}>Get Work</Button>


      <Modal show={show} onHide={handleClose} animation={false}  centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Share your contact they will call you soon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Share
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default GetWork
