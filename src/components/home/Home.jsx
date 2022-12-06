import React, {useContext , Suspense} from 'react'
import Preload from '../preload/Preload'
import "./home.css"
import Portada from './portada/Portada'
import arrowTop from "../assets/arrowTop.png"
import nameSection from './apiHome/NameSectionsMovie'
import TrendingMovies from './apiHome/trending/TrendingMovies'
import TrendingTv from './apiHome/trending/TrendingTv'
import ApiMovieHome from './apiHome/ApiMovieHome'
import ApiTvHome from './apiHome/ApiTvHome'
import NameSectionTv from './apiHome/NameSectionTv'
import Context from '../context/Context';
import Spinner from "../assets/spinner/Spinner"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const context = useContext(Context)
  const navigate = useNavigate()

  return (
  <>
    {context.loginConnected ? 
        <Suspense fallback={<Spinner/>}>

          <div className='home'>
              <Preload/>
              <Portada/>
              <TrendingMovies/>
              <TrendingTv />
              {
                nameSection.map((movieSection, key) => {
                  return  <ApiMovieHome  movieName={movieSection.name} movieId={movieSection.id} key={key}/>
                })
              }
              {
                NameSectionTv.map((tvSection, key) => {
                  return  <ApiTvHome  movieName={tvSection.name} movieId={tvSection.id} key={key}/>
                })
              }
              <a href="# " >
                <div className="button_top_home">
                  <img src={arrowTop} alt="arrowTop" />
                </div>
              </a>
          </div>
        </Suspense>
      :
      navigate("/")
    }

  </>
  )
}

export default Home