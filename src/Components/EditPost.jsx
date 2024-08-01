import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function EditPost() {

    const [show, setShow] = useState(false);
    const [place, setPlace] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const handleChange = (event) => {
    setPlace(event.target.value);
  };
  return (
    <>
    <Button variant="info w-50 me-1" onClick={handleShow}>Edit</Button>

    <Modal show={show} onHide={handleClose} animation={false} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-info'>Give details and Image of Works here..</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className="row">
            <div className="col-md-6">
             <label htmlFor='projImg'>
                <input type="file" id='projImg' style={{display:'none'}}/>
                <img src="https://www.onlineflooringstore.com.au/wp-content/uploads/2020/05/clean-hardwood-timber-floors.jpg" alt="no image" className='w-100' />
             </label>
            </div>
            <div className="col-md-6">
                <div className="my-3">
                  <input type="text" placeholder='Job Title' className='form-control' />
                </div>
                <div className="mb-3">
               <textarea placeholder='Give a Discription of work' rows={5} className='form-control'></textarea>
                </div>
                <div className="mb-3">
                <input type="date" placeholder='select date' className='form-control' />
                </div>
                <div className="mb-3">
                <input type="text" placeholder='Place' className='form-control' />
                </div>
               

                <FormControl variant="standard" fullWidth>
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
        <MenuItem value="kotta">Kotta</MenuItem>
      </Select>
    </FormControl>

              <div className="mt-3">
                <input type="text" placeholder='Amount/Wage' className='form-control' />
                </div>
                

            </div>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      
    </>
  )
}

export default EditPost
