import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function AddPost() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className='btn text-dark w-100 p-3 rounded-5' style={{backgroundColor:'lightgrey'}} onClick={handleShow}>Post your worker requirement here...</button>


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

export default AddPost
