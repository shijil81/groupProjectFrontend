
// Authentication page conditionaly render Login and CreateAccount

import React from 'react'
import Login from '../Components/Login'
import CreateAccount from '../Components/CreateAccount'

function Authentication({register}) {
  return (
    <>
   {register?
   <div className='my-5'> <CreateAccount/>  </div>
    
    :
    <div className='my-5'><Login/></div>
     }
    </>
  )
}

export default Authentication
