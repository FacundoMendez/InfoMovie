import React from 'react'
import "./cardMovie.css"



const CardMovie = ({ movie }) => {
  return (
        <div className="cardMovie" >
            <img src={movie} alt="img movie" />
        </div>
  )
}

export default CardMovie