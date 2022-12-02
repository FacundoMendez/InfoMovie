import React from 'react'
import "./cardMovie.css"



const CardMovie = ({ movie , key}) => {
  return (
        <div className="cardMovie" id={key} >
            <img src={movie} alt="img movie" />
        </div>
  )
}

export default CardMovie