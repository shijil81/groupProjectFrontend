// website landing page containing basic website details, components -header,about,footer


import React, { useEffect } from 'react'
import About from '../Components/About'
import AOS from 'aos';
import 'aos/dist/aos.css';


function LandingPage() {
  useEffect(() => {
    AOS.init({
      
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
          <button className='btn btn-primary'>Hire Now</button>
          <button className='btn btn-primary ms-4'>Get Work</button>
          </div>
         
        </div>
        <div className="col-md-2 "></div>



      </div>
      {<div style={{ color: 'black' }}><About /></div>}
    </>
  )
}

export default LandingPage
