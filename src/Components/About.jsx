// Design only the about area of landing page

import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
  useEffect(() => {
    AOS.init({
      
    }, [])
  })
  return (
    <>
      <div className='container' >

        <Row >
          <Col md={1}></Col>
          <Col md={5} className=' '>
            <div className='d-flex' >

              <div data-aos="fade-up-right"data-aos-duration="3000">
                <h4 style={{ color: 'black' }}>Why choose <span style={{ color: 'blue', fontWeight: 'bold' }}>QuickHire ?</span> </h4>
                <p className='text-start ms-5'> Quick Hire simplifies the hiring process by connecting you with skilled labores in your area . With our platformm ,you can easly find and hire the right person for the job with out any hassle .</p>

              </div>


            </div>

          </Col>
          <Col md={5} >

            <div className='ms-5 text-center'data-aos="fade-up-left"data-aos-duration="3000">
              <img src="dimage4.jpg" alt="" width={'70%'} />
            </div>


          </Col>
          <Col md={1}></Col>

        </Row>
      </div>
      {/*  */}
      <div className=' container mt-5'  >

        <Row>
          <Col md={1}></Col>
          <Col md={5} className='  '>
            <div className='d-flex'>


              <div data-aos="fade-up-right"data-aos-duration="3000">
                <h4 className='mt-4' style={{ color: 'black' }}>How does Quickhire works...</h4>
                <p className='text-start ms-5'>Simply post your job and skilled labours near you will reply to your post . You can also access a directory of nearby workers with a small premium subscription .Our platform ansures a smooth and efficient hiring process</p>

              </div>
            </div>


          </Col>
          <Col md={5} >



            <div className='mt-4 ms-2 text-center'data-aos="fade-up-left"data-aos-duration="3000">
              <img src="dimage5.png" alt="" width={'80%'} />
            </div>
          </Col>
          <Col md={1}></Col>

        </Row>
      </div>


      {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
      <div className='container mt-5 '>
        <h4 className='mt-4' style={{ color: 'black' }}>How can you hire!</h4>
        <div className='row mt-5 ms-3 text-center justify-content-center align-items-center' >
          <div className="col-md-4" data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <Card style={{ width: '18rem' }} className='border-0 shadow'>
              <Card.Img variant="top" src="dimage1.jpg" />
              <Card.Body>
               
                <Card.Text>
                Create an account or login if already have 
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4" data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <Card style={{ width: '18rem' }} className='border-0 shadow'>
              <Card.Img variant="top" src="dimage2.jpg" />
              <Card.Body>
                
                <Card.Text>
                 Post your job with image and description 
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4" data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <Card style={{ width: '18rem' }} className='border-0 shadow'>
              <Card.Img variant="top" src="dimage3.jpg" />
              <Card.Body>
                
                <Card.Text>
                 Get replay from your nearby workers & Hire
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>

      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <div className='container mt-2'>
        <h4 className='mt-4' style={{ color: 'black' }}>How can you get a job!</h4>
        <div className='row mt-5 ms-3 justify-content-center align-items-center' data-aos="fade-up"
     data-aos-duration="3000">
          <div className="col-md-4 ">
            <Card style={{ width: '18rem'}} className='border-0 shadow'>
              <Card.Img variant="top" src="dimage8.gif" />
              <Card.Body>
                
                <Card.Text>
                 Create an account with your personal details,skills,etc.. and get logged in 
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 ">
            <Card style={{ width: '18rem'}} className='border-0 shadow'>
              <Card.Img variant="top" src="dimage6.jpg" />
              <Card.Body>
                
                <Card.Text>
                 Search for job in your nearby location and if you have the required skill click accept button 
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 ">
            <Card style={{ width: '18rem' }} className='border-0 shadow'>
              <Card.Img variant="top" src="dimage7.jpg" />
              <Card.Body>
                
                <Card.Text>
                If the job provider will satisfied in your profile you get the work
                </Card.Text>

              </Card.Body>
            </Card>
          </div>

        </div>

      </div>
    </>
  )
}

export default About
