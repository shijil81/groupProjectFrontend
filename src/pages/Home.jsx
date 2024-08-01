// home page containing basic profile details notification modal,create post modal ,work list ,search bar and header&footer

import React from 'react'
import WorkList from '../Components/WorkList'

function Home() {
  return (
    <>
    <div className='row'>
      <div className="col-md-3"></div>
      <div className="col-md-6 border-0 shadow rounded-2 my-3 p-3 " style={{backgroundColor:'lightgrey'}}>
        <div className="row">
          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/006/948/116/small_2x/portrait-of-smiling-male-mechanic-technician-holding-wrench-in-arms-crossed-at-auto-garage-repair-and-maintenance-career-after-service-checking-car-damage-broken-part-free-photo.jpg" alt="profile" height={'130px'} width={'130px'} style={{borderRadius:'50%'}} />
            <h4 className='text-dark mt-2'>Raju</h4>
          </div>
          <div className="col-md-9 ">
            <div className="row">
              <div className="col-12">
                <button className='btn bg-light w-100 p-3 rounded-4 my-3'></button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="col-md-2"></div>  
    </div>
    <div>
        {/* postes posted by different person */}
        <WorkList/>
    </div>
      
    </>
  )
}

export default Home
