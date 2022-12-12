import React from 'react'
import { NavLink } from 'react-router-dom'

const CardsSectionMovie = ({ movie , id, Type}) => {

  return (
    <div className="cardMovie_sections" id={id}>
          <NavLink  to={`/${Type}/:${id}`}>  <img src={movie} alt="img movie" /></NavLink>
    </div>
  )
}

export default CardsSectionMovie