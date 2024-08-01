
// Authentication page conditionaly render Login and CreateAccount

import React from 'react'
import Login from '../Components/Login'
import CreateAccount from '../Components/CreateAccount'

function Authentication({register}) {
  return (
    <>
   {register?
   <div> <CreateAccount/>  </div>
    
    :
    <div><Login/></div>
     }
    </>
  )
}

export default Authentication
