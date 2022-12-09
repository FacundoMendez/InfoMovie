import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
import CardTv from '../../cardTv/CardTv';

const TrendingTv = () => {

    const [movieList , setMovieList] = useState([])

    useEffect(() => {
      const endPoint = "https://api.themoviedb.org/3/trending/tv/week?api_key=d37072b0437145eb49f3db14ffeeda76"

      axios.get(endPoint)
        .then( res =>{
          const apiData = res.data

          setMovieList(apiData.results)

        })
    }, [setMovieList])


    const settings = {
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
    <div className="box_list">
        <h2>Top series</h2>
         <Slider {...settings}>
            {
                movieList.map((movie, key) => {
                    return <CardTv key={key} movie={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} id={movie.id} /> 
                })
            }
        </Slider>

    </div>
  )
}

export default TrendingTv