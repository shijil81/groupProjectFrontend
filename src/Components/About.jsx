// Design only the about area of landing page

import React from 'react'
import { Col, Row } from 'react-bootstrap';

function About() {
  return (
    <>
   <div className=' container'style={{backgroundImage:"url(https://png.pngtree.com/background/20210710/original/pngtree-netted-document-background-material-picture-image_1033915.jpg)", backgroundRepeat:"no-repeat", backgroundSize:'cover'}}  >
   
    <Row>
      <Col md={6} className=' back'>
      <h4 style={{color:'black'}}>Why choose <span style={{color:'blue', fontWeight:'bold'}}>QuickHire ?</span> </h4>
      <div>
      <p className='text-start ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos placeat debitis explicabo tenetur porro ipsum eligendi est dicta qui dignissimos, numquam error quidem, ipsam fuga ab! A hic maiores inventore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis non, reprehenderit voluptates delectus veniam exercitationem minus officia aperiam quidem nulla recusandae eius molestias, soluta consequatur sequi quo in voluptate suscipit.l Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident eum facere nobis quis ab, tempora doloribus maiores beatae neque, nesciunt officiis repellendus atque iste earum. Ad laboriosam tempora sequi maiores.</p>
      <h4 className='mt-4' style={{color:'black'}}>How does quickhire works</h4>
      <p className='text-start ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos placeat debitis explicabo tenetur porro ipsum eligendi est dicta qui dignissimos, numquam error quidem, ipsam fuga ab! A hic maiores inventore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis non, reprehenderit voluptates delectus veniam exercitationem minus officia aperiam quidem nulla recusandae eius molestias, soluta consequatur sequi quo in voluptate suscipit.l Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident eum facere nobis quis ab, tempora doloribus maiores beatae neque, nesciunt officiis repellendus atque iste earum. Ad laboriosam tempora sequi maiores.</p>
      </div>
      </Col>
      <Col md={6} className='text-center'>
      <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlFC8X1t5MiSUJQuSnt7APmIQwMtgDYOi3w&s" alt="" />
      </div>
      <div className='mt-4'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlFC8X1t5MiSUJQuSnt7APmIQwMtgDYOi3w&s" alt="" />
      </div>
      
      
      </Col>

    </Row>
 

   </div>
    </>
  )
}

export default About
