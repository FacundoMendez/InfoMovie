import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import user from "../../../../assets/user.png"
import "../../detalladaMovie/reparto/reparto.css"
import Spinner from '../../../../assets/spinner/Spinner';

const RepartoTv = ({idMovie}) => {

    const [movie , setMovie] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/tv/${idMovie}/credits?api_key=d37072b0437145eb49f3db14ffeeda76&language=en-US&known_for_department=Acting`
        
        axios.get(endpoint)
            .then(res => {
                const data = res.data.cast
                setMovie(data)
                setLoading(true)
            })
              
    }, [setMovie , setLoading])

    console.log(movie)


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        className:"slider_cards_reparto",
        responsive: [
   
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },

          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },

          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };


  return (
    <>
        {loading ?
            <div className="reparto">
                <h2 className='title_reparto'>Distribution</h2>

                <Slider {...settings}>
                {
                    movie.filter(movie => movie.known_for_department='Acting').map((reparto , inx) => {
                        return <div className='box_user_reparto' key={inx}>
                                    {
                                        reparto.profile_path === null ? 
                                            <img className='repato_img_user_null' src={user}   alt="img reparto" />
                                        :

                                            <img className='repato_img_user' src={`https://image.tmdb.org/t/p/original${reparto.profile_path}`}   alt="img reparto" />
                                    }
                                    <div className="name_reparto"> <strong> {reparto.name} </strong></div>
                                    <div className="name_reparto_acting"> <strong> {reparto.character} </strong></div>

                                </div>
                             
                    }) 
                }
                </Slider>

            </div>
        :
            <Spinner/>
        }
    </>
  )
}

export default RepartoTv