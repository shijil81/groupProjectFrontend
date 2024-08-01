// website landing page containing basic website details, components -header,about,footer


import React, { useEffect } from 'react'
import About from '../Components/About'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



function LandingPage() {
  useEffect(() => {
    Aos.init({
      
    }, [])
  })
  return (
    <>
      <div className='row mb-5' style={{background:"linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)"}}>
        <div className="col-md-2 "></div>
        <div className="col-md-8 text-center" >
          <h3 className=''>An easy way to find and hire skilled workers</h3>
          <p>Finding the perfect worker can be challenging.With Quick Hire,the process become efforless. Post your job,find skilled labours nearby,and connect directly.For finding skilled labour or work ,think Quick Hire</p>
          <div className='mb-3' data-aos="zoom-in">
          <Link to={"/login"}><button className='btn btn-primary shadow'>Hire Now</button></Link>
          <Link to={"/login"}><button className='btn btn-success ms-4 shadow'>Get Work</button></Link>
          </div>
         
        </div>
        <div className="col-md-2 "></div>



      </div>
      {<div style={{ color: 'black' }}><About /></div>}
    </>
  )
}

export default LandingPage
