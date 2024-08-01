// design only the workers list containing photo and details of workers

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WorkersList() {
  return (
    <>
          <Card style={{ width: '100%', minHeight:'450px', maxHeight:'450px', backgroundColor:'lightgrey' }} className='p-2 shadow border-0'>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/skilled-construction-worker-portrait_1033130-473.jpg" height={'200px'} width={'250px'} className='rounded-circle px-5 mt-2'/>
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
    </>
  )
}

export default WorkersList
