import React from 'react'

const CardsSection = ({ movie , key}) => {
  return (
    <div className="cardMovie_sections" key={key}>
        <img src={movie} alt="img movie" />
    </div>
  )
}

export default CardsSection