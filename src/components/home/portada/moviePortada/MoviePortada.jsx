import React from 'react'
import { NavLink } from 'react-router-dom'
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
                <p>{movie.overview.substring(0, 200)} ...</p>
            </div>
            <div className="button_moreInfo" >
                <img src={infoIcon} alt="infoIcon" />

                <NavLink to={`/tv/:${movie.id}`}>
                    <p>More Information</p>
                </NavLink>

            </div>
        </div>
        <img className='imgPortada' id={key} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="sliderPortada" />
    </div>
  )
}

export default MoviePortada