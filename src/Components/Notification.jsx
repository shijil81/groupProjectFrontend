import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Notification() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn btn-info rounded-5 shadow' onClick={handleShow}>Notifications</button>


    <Modal show={show} onHide={handleClose} animation={false}  centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Notification
