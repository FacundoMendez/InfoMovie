import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./portada.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MoviePortada from './moviePortada/MoviePortada';

const Portada = () => {

    const [portadaMovie , setPortadaMovie] = useState([])

    useEffect(() => {
        const endpoint = "https://api.themoviedb.org/3/trending/tv/week?api_key=d37072b0437145eb49f3db14ffeeda76"

        axios.get(endpoint)
            .then(res => {
                const data = res.data
                setPortadaMovie(data.results)
            })

    }, [setPortadaMovie])


    const settings = {
        fade: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        initialSlide: 1,
        autoplaySpeed:6000,
    };

    console.log(portadaMovie)

  return (
    <>
        <div className="portada">

            <Slider {...settings}>
                {
                    portadaMovie.filter(movie => movie.vote_average >=7 ).map((movie , key) => {
                    
                        return <MoviePortada key={key} movie={movie} /> 
                        
                    })
                }
            </Slider>
        </div>
    </>
  )
}

export default Portada