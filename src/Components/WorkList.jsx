// design only the Work list that means all posts


import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GetWork from './GetWork';



function WorkList() {
  return (
    <>
      <Card style={{ width: '100%', minHeight:'550px', maxHeight:'550px', backgroundColor:'lightgrey' }} className='p-2 shadow border-0'>
      <Card.Img variant="top" src="https://www.onlineflooringstore.com.au/wp-content/uploads/2020/05/clean-hardwood-timber-floors.jpg" height={'250px'} width={'250px'}/>
      <Card.Body>
        <Card.Title>Need Cleaning Staff</Card.Title>
        <Card.Text>
          <p>Need a cleaning staff for cleaning home...One day duty only</p>
          <p className='fw-bold'>Place : Kannur</p>
          <p className='fw-bold'>District : Kannur</p>
          <h5 className='text-dark'>Required Date: 24/7/24</h5>
        </Card.Text>
        <div className='d-flex justify-content-around'>
          <Button variant="info w-50 me-1">600 Rs</Button>
          <GetWork/>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default WorkList
