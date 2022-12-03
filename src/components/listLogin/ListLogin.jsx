 import React  from 'react'
import {  Navigate } from 'react-router-dom'
import "./listLogin.css"



const ListLogin = () => {

    let token= sessionStorage.getItem("token")


  return (
    <>
    {token === null && <Navigate to="/"/>}

        <div className='listLogin'>

        </div>
    </>
  )
}

export default ListLogin