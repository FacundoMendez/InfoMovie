import React ,  { lazy } from 'react'
import Preload from '../preload/Preload'
import "./home.css"
import arrowTop from "../assets/arrowTop.png"
import nameSection from './apiHome/NameSectionsMovie'

const Portada = lazy(() => import('./portada/Portada'))
const TrendingMovies = lazy(() => import('./apiHome/trending/TrendingMovies'))
const ApiMovieHome = lazy(() => import('./apiHome/ApiMovieHome'))


const Home = () => {

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