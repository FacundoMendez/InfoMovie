import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./cardMovie.css"


const CardMovie = ({ movie , id , type}) => {

  const [heartButton , setHeartButton ] = useState(false)

  const handlerHeart = () => {
    setHeartButton(!heartButton)
  }

  return (
        <div className="cardMovie" >
          <NavLink  to={`/${type}/:${id}`}>  <img src={movie} alt="img movie" /></NavLink>
          <div className="stage">
              <div className={heartButton ? "heart-is-active" : "heart"} id="cora" onClick={handlerHeart}></div>
          </div>
        </div>
  )
}

export default CardMovie