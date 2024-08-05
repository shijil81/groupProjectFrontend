import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';


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
        <div className='d-flex justify-content-center'>
            <Card style={{ width: '70%', minHeight:'450px', maxHeight:'450px', backgroundColor:'lightgrey' }} className='p-2 shadow border-0'>
          <Card.Img variant="top" src="https://img.freepik.com/premium-photo/skilled-construction-worker-portrait_1033130-473.jpg" height={'150px'} width={'150px'} className='rounded-circle px-5 mt-2'/>
          <Card.Body >
            <Card.Title>Name : Biju </Card.Title>
            <Card.Text>
              <p className='fw-bold'>Work Category : Painter </p>
              <p className='fw-bold'>Phone No : 9725456898 </p>
              <p className='fw-bold'>Place : Kannur </p>
              <p className='fw-bold'>District : Kannur </p>
    
            </Card.Text>
            <div className='d-flex justify-content-around'>
            <Button variant="warning" className='w-50 mt-3 shadow rounded-5'>Review</Button>
            </div>
          </Card.Body>
        </Card>
        </div>
            
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
