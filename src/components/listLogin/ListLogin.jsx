 import React  from 'react'
import {  Navigate } from 'react-router-dom'
import "./listLogin.css"



const ListLogin = () => {

    let token= localStorage.getItem("token")


  return (
    <>
    {token === null && <Navigate to="/"/>}

        <div className='listLogin'>

        </div>
    </>
  )
}

export default ListLogin