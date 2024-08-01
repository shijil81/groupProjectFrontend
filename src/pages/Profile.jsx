// contain Profile detailes and a edit post section


import React from 'react'
import Posts from '../Components/Posts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faLocationDot } from '@fortawesome/free-solid-svg-icons'



function Profile() {
  return (
    <>
    <div>
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'700px'}}>
     <div className='container rounded-4 m-3 border border-1  shadow-lg w-75' style={{minHeight:'400px',position:'relative', maxHeight:'auto'}}>
     <div className='d-flex justify-content-center' style={{position:'absolute',width:'100%',marginTop:'-90px'}}> 
      <div style={{height:'180px',width:'180px',position:'absolute',borderRadius:'50%'}}className='me-3'>
        <img className='border' style={{borderRadius:'50%'}} src="https://img.freepik.com/free-photo/close-up-portrait-young-man-isolated-black-studio-background_155003-23975.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722384000&semt=ais_hybrid" alt=""height={'180px'} width={'180px'} /></div></div>

     <div className='' style={{marginTop:"100px"}}>
     <h2 className='text-center text-black fw-bolder'>NAME</h2>


      <div className="row  m-4 shadow">
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-around text-black border">
             <h4 className='text-black mt-2 fw-bold'> <FontAwesomeIcon icon={faLocationDot} className='fa-xs pe-3' />Location</h4>
             <h5 className='mt-3 text-black'>District :kasaragod</h5>
             <h5 className='text-black'>Place : kanhangad</h5>


        </div>
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-around border">
        <h4 className='text-black mt-2 fw-bold'> <FontAwesomeIcon icon={faCircleInfo} className='fa-xs pe-3' />Personal Details</h4>
             <h5 className='text-black'>Job : Driver</h5>
             <h5 className='text-black'>Contact : 9946901506</h5>
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center justify-content-around border py-4">
        <button className='btn border border-2 text-black fw-bolder rounded p-2 ' style={{width:'150px'}}>Edit profile</button> <br />
        <button className='btn btn-success rounded p-2 ' style={{width:'150px'}}>View Review</button>
        </div>
      </div>
     </div>






      {/* <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8 border-2" style={{justifyContent:'center'}}>
        <div style={{height:'500px',display:'flex',justifyContent:'center'}}>
        <div className='mt-5 ms-3 justify-content-center'>
            <h2 className='text-center mt-3 text-black fw-bold'>NAME</h2>
            <div className='text-center' style={{background:'black',height:'1px',width:'200px',justifyContent:'center',alignItems:'center'}}></div>
            <div className='mt-3'>
              <h3 className='text-center text-black'>work</h3>
              <h4 className='text-center mt-2 text-black'>City,Place</h4>
             <div className='d-flex justify-content-center'>
             <button className='btn btn-success rounded p-2 mt-4' style={{width:'150px'}}>Edit profile</button>
             </div>
            </div>
         </div>
        </div>
        </div>
        <div className="col-md-2"></div>
      </div> */}
     </div>
   </div>
    </div>

    <hr style={{ border: '1px dashed black' }} />
    
    <div>
        {/* Their Posts */}
        <div className="row d-flex align-item-center">
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <Posts/>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <Posts/>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <Posts/>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <Posts/>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <Posts/>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center p-5">
            <Posts/>
            </div>
            
          </div>
        
        
    </div>
      
    </>
  )
}

export default Profile
