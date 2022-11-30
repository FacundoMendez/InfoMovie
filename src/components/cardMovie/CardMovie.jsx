import React from 'react'
import "./cardMovie.css"



const CardMovie = ({key, movie}) => {
   
  return (
        <div className="cardMovie" key={key}>
            <img src={movie} alt="img movie" />
        </div>
  )
}

export default CardMovie