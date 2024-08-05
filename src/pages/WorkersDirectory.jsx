//All types of workers list

import React from 'react'
import WorkersList from '../Components/WorkersList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function WorkersDirectory() {
  return (
    <>
    <div className='row d-flex  mt-4'>
          <div className="col-md-4"></div>
          <div className="col-md-4">
          <div className="d-flex justify-content-center align-items-center m-3">
              <input type="text"className='form-control rounded-5 w-100' placeholder='Search your location'/>
              <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} style={{marginLeft:'-30px', color:'gray'}}/>
         </div>
          </div>
          <div className="col-md-4"></div>
    </div>

    <div> 
          <div className="row d-flex  align-items-center">
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <WorkersList/>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <WorkersList/>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <WorkersList/>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <WorkersList/>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <WorkersList/>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <WorkersList/>
            </div>
            
          </div>
          
      </div>
    

      
    </>
  )
}

export default WorkersDirectory
