// home page containing basic profile details notification modal,create post modal ,work list ,search bar and header&footer

import React from 'react'
import WorkList from '../Components/WorkList'
import Notification from '../Components/Notification'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import AddPost from '../Components/AddPost'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <div>
      {/* profile section */}
        <div className='row m-3 p-3'>
          <div className="col-md-3"></div>
          <div className="col-md-6 borderd shadow  rounded-5">
                     <div className='row '>
                       <div className='col-md-4 d-flex flex-column align-items-center '>
                         <img src="https://img.freepik.com/premium-photo/male-india-engineer-wearing-safety-workwear-standing-factory_967785-94545.jpg" alt="no image" width={'120px'} height={'120px'} style={{borderRadius:'50%'}} className='p-2' />
                         <h3>Raju</h3>
                       </div>
                       <div className="col-md-8">
                        <div className="row">
                          <div className="col-12 mt-4 pe-md-5">
                            <AddPost/>
                          </div>
                          <div className="row my-2">
                            <div className="col-12 d-flex justify-content-around align-items-center mt-3 ">
                              <Link to={'/profile'}><button className='btn btn-success shadow rounded-5'>View Profile</button></Link>
                              <Notification/>
                            </div>
                          </div>
                        </div>
                       </div>
                     </div>
            </div>
            <div className="col-md-3"></div>
        </div>

        <hr style={{ border: '1px dashed black' }} />

        {/* search bar section */}

        <div className='row d-flex '>
          <div className="col-md-3"></div>
          <div className="col-md-3">
          <div className="d-flex justify-content-center align-items-center m-3">
              <input type="text"className='form-control rounded-5 w-100' placeholder='Search your location'/>
              <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} style={{marginLeft:'-30px', color:'gray'}}/>
         </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center my-3">
              <Link to={'/directory'}><Button variant="danger" className='rounded-5'>View Directory <sup style={{color:'yellow'}}>premium</sup></Button></Link>
          </div>
          <div className="col-md-3"></div>
        
         

        </div>

      {/* Job post Section */}
      <div> 
          <div className="row d-flex  align-items-center">
            <div className="col-md-4 d-flex justify-content-center align-items-center p-5">
            <WorkList/>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center p-5">
            <WorkList/>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center p-5">
            <WorkList/>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center p-5">
            <WorkList/>
            </div>
            
          </div>
          
      </div>
    </div>
      
    </>
  )
}

export default Home
