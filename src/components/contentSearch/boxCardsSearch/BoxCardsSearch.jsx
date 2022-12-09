import React from 'react'
import "./boxCardsSearch.css"
import notFound from "../../assets/notFound.png"


const BoxCardsSearch = ({movie}) => {
  const MyReponsiveComponent = () => {
    const isNarrowScreen = window.matchMedia("(max-width: 900px)").matches;
    if (isNarrowScreen) {
      return (  
        <p>
          { movie.overview === undefined ? "" : movie.overview.substring(0, 100)} ...
        </p>
      );
    } else {
      return (  
        <p>
          { movie.overview === undefined ? "" : movie.overview.substring(0, 350)} ...
        </p>);
    }
 
  }
  return (
    <div className="boxCardSearch">
        {
           movie.poster_path !== null ?
              <img className='img_search' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  alt="busqueda" />
            :
                <img className='img_search_notFound' src={notFound}  alt="busqueda" />
        }

        <div className="box_info_search">
          <div className="box_title_search">
          <h2> { movie.original_name === undefined ? movie.title :  movie.original_name } </h2>
            <p className='date_search'>{ movie.release_date === undefined ? movie.first_air_date :  movie.release_date }</p>
          </div>

          <div className="box_text_desc_search">
            {MyReponsiveComponent()}
          </div>
        
        </div>
    </div>
  )
}

export default BoxCardsSearch