import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../cardMovie/cardMovie.css"


const CardTv = ({ movie , id }) => {

  const [heartButton , setHeartButton ] = useState(false)

  const handlerHeart = () => {
    setHeartButton(!heartButton)
  }

  return (
        <div className="cardMovie" >
          <NavLink  to={`/tv/:${id}`}>  <img src={movie} alt="img movie" /></NavLink>
          <div className="stage">
              <div className={heartButton ? "heart-is-active" : "heart"} id="cora" onClick={handlerHeart}></div>
          </div>
        </div>
  )
}

export default CardTv