// contain Profile detailes and a edit post section


import React from 'react'
import Posts from '../Components/Posts'

function Profile() {
  return (
    <>
    <div>
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'700px'}}>
     <div className='container bg-warning rounded-4 m-3' style={{height:'400px',position:'relative'}}>
     <div className='d-flex justify-content-center' style={{position:'absolute',width:'100%',marginTop:'-100px'}}> <div style={{height:'200px',width:'200px',position:'absolute',borderRadius:'50%'}}className=''><img style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s" alt=""height={'200px'} width={'200px'} /></div></div>
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8 border-2px" style={{justifyContent:'center'}}>
        <div style={{height:'500px',display:'flex',justifyContent:'center'}}>
        <div className='mt-5 ms-3 justify-content-center'>
            <h1 className='text-center mt-3'>NAME</h1>
            <div className='text-center' style={{background:'black',height:'2px',width:'300px',justifyContent:'center',alignItems:'center'}}></div>
            <div className='mt-3'>
              <h1 className='text-center'>work</h1>
              <h2 className='text-center mt-2'>City,Place</h2>
             <div className='d-flex justify-content-center'>
             <button className='btn btn-success rounded p-2 mt-3' style={{width:'150px'}}>Edit profile</button>
             </div>
            </div>
         </div>
        </div>
        </div>
        <div className="col-md-2"></div>
      </div>
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
