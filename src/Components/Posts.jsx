// design only posts which comes in profile section

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditPost from './EditPost';

function Posts() {
  return (
    <>
  <Card style={{ width: '100%', minHeight:'450px', maxHeight:'450px', backgroundColor:'lightgrey' }} className='p-2 shadow border-0'>
      <Card.Img variant="top" src="https://www.onlineflooringstore.com.au/wp-content/uploads/2020/05/clean-hardwood-timber-floors.jpg" height={'250px'} width={'250px'}/>
      <Card.Body>
        <Card.Title>Need Cleaning Staff</Card.Title>
        <Card.Text>
          Need a cleaning staff for cleaning home...One day duty only
          <h5 className='text-dark'>Required Date: 24/7/24</h5>
        </Card.Text>
        <div className='d-flex justify-content-around'>
          <Button variant="danger w-50 me-1">Delete</Button>
          <EditPost/>
          
        </div>
      </Card.Body>
    </Card>

    </>
  )
}

export default Posts
