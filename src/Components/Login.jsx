// design only Login area 

import React from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';



function Login() {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center p-5'>
        <div className='border p-1 shadow-lg  mb-5 bg-body-tertiary  ' style={{background: 'linear-gradient(to right,green,lightblue)',borderRadius:"15px 50px", transform: 'rotate(8deg)'}}>
          <div className='border px-5 py-5 bg-light shadow-lg' style={{borderRadius:"15px 50px",transform: 'rotate(-8deg)'}}>
                 <h4 className='text-center fw-bold mt-1 text-dark'>Login</h4>
                <div className='d-grid mt-2'>
               
                 <TextField className='mt-3 ' id="standard-basic"  label="Username" variant="standard" />
                   <TextField className='mt-3' id="standard-basic" label="Password" variant="standard" />
                   <button className='btn btn-success mt-4'>Login</button>
                </div>
                <div className='mt-3 '>
                 <small >New user? Click here to<Link to={"/register"}>Create Account</Link></small>
    
              </div>
  
            <div>
  
            </div>
          </div>
     </div>     
      </div>
    </>
  )
}

export default Login
