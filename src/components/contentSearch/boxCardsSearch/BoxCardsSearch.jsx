import React from 'react'
import "./boxCardsSearch.css"

const BoxCardsSearch = ({movie}) => {
  return (
    <div className="boxCardSearch">
        <img className='img_search' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />

        <div className="box_info_search">
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
        </div>
    </div>
  )
}

export default BoxCardsSearch