import React from 'react'
import Preload from '../preload/Preload'
import "./home.css"
import Portada from './portada/Portada'
import arrowTop from "../assets/arrowTop.png"
import nameSection from './apiHome/NameSectionsMovie'
import TrendingMovies from './apiHome/trending/TrendingMovies'
import ApiMovieHome from './apiHome/ApiMovieHome'

const Home = () => {
 /*  const navigate = useNavigate() */

  return (
  <>
    <div className='home'>
        <Preload/>
        <Portada/>
        <TrendingMovies type="movie"/>
        <TrendingMovies type="tv"/>
        {
          nameSection[0].map((movieSection, key) => {
            return  <ApiMovieHome type="movie" movieName={movieSection.name} movieId={movieSection.id} key={key}/>
          })
        }
        {
          nameSection[1].map((tvSection, key) => {
            return  <ApiMovieHome type="tv" movieName={tvSection.name} movieId={tvSection.id} key={key}/>
          })
        }
        <a href="# " >
          <div className="button_top_home">
            <img src={arrowTop} alt="arrowTop" />
          </div>
        </a>
    </div>

  </>
  )
}

export default Home