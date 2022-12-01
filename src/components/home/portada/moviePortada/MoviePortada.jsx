import React from 'react'
import infoIcon from "../../../assets/info.png"

const MoviePortada = ({key, movie}) => {
  return (
    <div className="moviePortada">
        <div className="blur_portada"></div>
        <div className="box_info_portada">
            <div className="title_portada">
                <h2>{movie.name === undefined ? movie.title : movie.name}</h2>
            </div>
            <div className="descripcion_portada">
                <p>{movie.overview}</p>
            </div>
            <div className="button_moreInfo" >
                <img src={infoIcon} alt="infoIcon" />
                <p>More Information</p>
            </div>
        </div>
        <img className='imgPortada' id={key} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="sliderPortada" />
    </div>
  )
}

export default MoviePortada