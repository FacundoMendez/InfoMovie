import React, { Suspense } from 'react'
import Spinner from '../../../../assets/spinner/Spinner'

const PortadaTvDetallada = ({movie}) => {
  return (
    <Suspense fallback={<Spinner/>}>
      <div className="portada_detallada">
          <div className="blur_portada_detallada"></div>

          <img className='img_back_portada' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="portada back" />

          <div className="container_portada">
              <div className="portada_title_detallada">{movie.original_name}</div>

              <div className="portada_card_detallada">
                  <img className='img_front_portada' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="portada front" />
                  <div className={movie.vote_average >= 7 ? "rating_card_green" :  movie.vote_average >= 5  &&  movie.vote_average <= 7 ? "rating_card_orange" :  "rating_card_red" }>{movie.vote_average.toFixed(1) }</div>
              </div>
          </div>
      </div>
    </Suspense>
  )
}

export default PortadaTvDetallada