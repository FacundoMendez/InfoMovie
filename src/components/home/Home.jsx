import React from 'react'
import Preload from '../preload/Preload'
import ApiHome from './apiHome/ApiHome'
import "./home.css"
import Portada from './portada/Portada'
import Trending from './trending/Trending'
import arrowTop from "../assets/arrowTop.png"
import nameSection from './apiHome/NameSections'


const Home = () => {

  return (
    <div className='home'>
      <Preload/>
      <Portada/>
      <Trending/>
      {
        nameSection.map((movieSection, key) => {
          return <ApiHome  movieName={movieSection.name} movieId={movieSection.id} key={key}/>
        })
      }
      <a href="# " >
        <div className="button_top_home">
          <img src={arrowTop} alt="arrowTop" />
        </div>
      </a>
    </div>
  )
}

export default Home