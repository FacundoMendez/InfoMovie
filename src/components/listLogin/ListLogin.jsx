import React from 'react'
import {  Navigate } from 'react-router-dom'
import "./listLogin.css"

import imgPrueba from "../assets/blur-colors.png"

const ListLogin = () => {

    let token= localStorage.getItem("token")

  return (
    <>
    {token === null && <Navigate to="/"/>}

        <div className='listLogin'>
            <div className="card_list">
                <img src={imgPrueba} alt="img movie" />
{/*                 <div className="title_card"> <h2>Title Movie</h2></div>
                <button className="button_view_card">Info</button> */}
            </div>
        </div>
    </>
  )
}

export default ListLogin