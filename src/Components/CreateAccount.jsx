// design only create account forms include profile picture upload

import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';




function CreateAccount() {
  const [place, setPlace] = useState('');

  const handleChange = (event) => {
    setPlace(event.target.value);
  };
  return (
   
    <>
      <div className='container d-flex align-items-center justify-content-center px-5'>
       <div className='shadow-lg mb-4 p-1'  style={{background: 'linear-gradient(to right,green,lightblue)',borderRadius:"15px 50px", transform: 'rotate(8deg)'}}>
          <div className="row px-5 border py-5 bg-light shadow-lg" style={{borderRadius:"15px 50px",transform: 'rotate(-8deg)'}}>
            <div className="col-md-6 pt-2 d-grid">
              <div className='d-flex align-items-center justify-content-center' >
               <label htmlFor="profileImg">
               <input type="file" style={{display:'none'}} id='profileImg'/>
               <img className='rounded-circle shadow-lg' src="https://inkitt.zendesk.com/hc/article_attachments/5133683667858/Screen_Shot_2022-04-15_at_10.17.44_AM.png" alt="" width={'150px'} height={'150px'} />
               </label>
                </div>
            <TextField className='mt-3 ms-2 ' id="standard-basic"  label="Name" variant="standard" />
            <TextField className='mt-4 ms-2' id="standard-basic"  label="Place" variant="standard" />
            <FormControl className='mt-4' variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-standard-label">District</InputLabel>
          <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={place}
        onChange={handleChange}
        label="Place"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="kasaragod">Kasaragod</MenuItem>
        <MenuItem value="kannur">Kannur</MenuItem>
        <MenuItem value="kozhikode">Kozhikode</MenuItem>
        <MenuItem value="wayanad">Wayanad</MenuItem>
        <MenuItem value="kochi">Kochi</MenuItem>
        <MenuItem value="kottayam">Kottayam</MenuItem>
      </Select>
            </FormControl>
            <TextField className=' ms-2  '
            id="standard-multiline-static"
            label="Address"
            multiline
            rows={2}
            variant="standard"
          />
            
            </div>
            <div className="col-md-6 d-grid ps-3">
           <TextField className='ms-2 mt-5' id="standard-basic"  label="Job" variant="standard" />
           <TextField className=' ms-2 mt-5' id="standard-basic"  label="Username" variant="standard" />
           <TextField className='ms-2 mt-5' id="standard-basic"  label="Password" variant="standard" />
          
           <div className='d-flex align-items-center justify-content-center mt-5'>
               
               <button className='btn btn-success  w-100'>Register</button>
               </div>
              <div className='mt-3 '>
                 <small  >Already a user? Click here to <Link to={"/login"} style={{textDecoration:'none'}} className='fw-bold'>Login</Link></small>
    
              </div>
     
  
  
            </div>
          </div>
       </div>

      </div>

    </>
  )
}

export default CreateAccount
