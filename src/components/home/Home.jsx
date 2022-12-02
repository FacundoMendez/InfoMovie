import React from 'react'
import Preload from '../preload/Preload'
import ApiHome from './apiHome/ApiHome'
import "./home.css"
import Portada from './portada/Portada'
import Trending from './trending/Trending'
import arrowTop from "../assets/arrowTop.png"

const Home = () => {

  const nameSection = ([
    {
      name: "Action",
      id: "28"
    },
    {
      name: "Adventure",
      id: "12"
    },
    {
      name: "Animation",
      id: "16"
    },
    {
      name: "Comedy",
      id: "35"
    },
    {
      name: "Crime",
      id: "80"
    },
    {
      name: "Documentary",
      id: "99"
    },
    {
      name: "Drama",
      id: "18"
    },
    {
      name: "Family",
      id: "10751"
    },
    {
      name: "Fantasy",
      id: "14"
    },
    {
      name: "Horror",
      id: "27"
    },
    {
      name: "History",
      id: "36"
    },
    {
      name: "Music",
      id: "10402"
    },
    {
      name: "Mystery",
      id: "9648"
    },
    {
      name: "Romance",
      id: "10749"
    },
    {
      name: "Science Fiction",
      id: "878"
    },
    {
      name: "Tv Movie",
      id: "10770"
    },
    {
      name: "Thriller",
      id: "53"
    },
    {
      name: "War",
      id: "10752"
    },
    {
      name: "Western",
      id: "37"
    },

  ])


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