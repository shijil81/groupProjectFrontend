
// Authentication page conditionaly render Login and CreateAccount

import React from 'react'
import Login from '../Components/Login'
import CreateAccount from '../Components/CreateAccount'

function Authentication() {
  return (
    <>
    <Login/>
    <CreateAccount/>   
    </>
  )
}

export default Authentication
