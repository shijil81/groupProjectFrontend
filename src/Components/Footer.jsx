// design only the footer area

import { faFacebook, faInstagram, faLinkedinIn, faStackOverflow, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconStyle = (icon) => ({
    color: hoveredIcon == icon ? '#620093' : 'initial', transition: 'color 0.3s ease', border: '3px solid black',
    borderRadius: '25%',
    padding: '10px',
    width: '30px',
    height: '30px',
  });

  return (
    <>
      <div className="container-fluid bg-primary p-5 rounded-1">
        <div className="row">
          <div className="col-md-4">
            <h2 className='text-center '>
             Quick Hire
            </h2>
            <p className='mt-3 text-light' style={{ textAlign: 'justify' }}>
            Finding the perfect worker can be challenging.With Quick Hire,the process become efforless. Post your job,find skilled labours nearby,and connect directly.For finding skilled labour or work ,think Quick Hire
            </p>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center align-items-center" style={{ textAlign: 'justify' }}>
            <div>
              <Link to={'/home'} style={{textDecoration:'none'}}><p className='text-light'>Home</p></Link>
              <p className='text-light'>Browse Jobs</p>
              <p className='text-light'>Profile</p>
              <p className='text-light'>Settings</p>
              <p className='text-light'>Log Out</p>
            </div>
          </div>

          <div className="col-md-2 d-md-flex justify-content-center align-items-center flex-column px-5">
            <div>
            <p className='text-light'>Help Center</p>
              <p className='text-light'>Security Access</p>
              <p className='text-light'>Cookie Settings</p>
              <p className='text-light'>Privacy Policy</p>
              <p className='text-light'>Advertising</p>
             
            </div>
          </div>
          <div className="col-md-4 ">
            <h3 className='text-center'>Contact Us</h3><hr style={{color:'white'}}/>
            <div className='d-flex'>
              <input type="text" placeholder='E-mail' className='form-control rounded-3 me-4' />
              <button className='btn btn-success rounded-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <FontAwesomeIcon icon={faFacebook} className='fa-2x  'style={iconStyle('facebook',)} onMouseEnter={() => setHoveredIcon('facebook')} onMouseLeave={() => setHoveredIcon(null)}/>

              <FontAwesomeIcon icon={faInstagram} className='fa-2x' style={iconStyle('instagram')} onMouseEnter={() => setHoveredIcon('instagram')}onMouseLeave={() => setHoveredIcon(null)}/>

              <FontAwesomeIcon icon={faTwitter} className='fa-2x' style={iconStyle('twitter')} onMouseEnter={() => setHoveredIcon('twitter')} onMouseLeave={() => setHoveredIcon(null)}/>

              <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' style={iconStyle('whatsapp')} onMouseEnter={() => setHoveredIcon('whatsapp')} onMouseLeave={() => setHoveredIcon(null)}/>

              <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x' style={iconStyle('linkedin')} onMouseEnter={() => setHoveredIcon('linkedin')}onMouseLeave={() => setHoveredIcon(null)} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
