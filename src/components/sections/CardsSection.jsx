import React from 'react'

const CardsSection = ({ movie , id}) => {
  return (
    <div className="cardMovie_sections" id={id}>
        <img src={movie} alt="img movie" />
    </div>
  )
}

export default CardsSection