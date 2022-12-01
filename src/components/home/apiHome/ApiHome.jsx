import React, {useEffect, useState} from 'react'
import CardMovie from '../../cardMovie/CardMovie'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ApiHome = ({movieName, movieId ,key}) => {

  const [movieList , setMovieList] = useState([])


  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=d37072b0437145eb49f3db14ffeeda76&language=en-US&with_genres=${movieId}&`

    axios.get(endPoint)
      .then( res =>{
        const apiData = res.data

        setMovieList(apiData.results)

      })
  }, [setMovieList , movieId])



  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 5,
      initialSlide: 0,
      className:"slider_cards",
      responsive: [
        {
          breakpoint: 1740,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll:3
          }
        },

        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },

        {
          breakpoint: 388,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="box_list" key={key}>
        <h2>{movieName}</h2>
         <Slider {...settings}>
            {
                movieList.map((movie, inx) => {
                    return <CardMovie key={inx} movie={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                })
            }
        </Slider>
    </div>
  )
}

export default ApiHome