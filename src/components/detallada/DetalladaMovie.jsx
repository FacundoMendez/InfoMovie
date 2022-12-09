import React, {lazy, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./detallada.css"
import axios from 'axios'
import Swal from 'sweetalert2'
import Spinner from '../assets/spinner/Spinner'

const InfoMovieDetail = lazy(() => import ("./componentsDetallada/detalladaMovie/InfoMovie/InfoMovieDetail"))
const PortadaDetallada = lazy(() => import ("./componentsDetallada/detalladaMovie/portadaMovie/PortadaDetallada"))
const Reparto = lazy(() => import ("./componentsDetallada/detalladaMovie/reparto/Reparto"))


const DetalladaMovie = () => {
    
    const {id}= useParams()
    
    let idMovie = id.replace(/:/, '');
    const [loading , setLoading] = useState(false)

    const [movie , setMovie] = useState([])

    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=d37072b0437145eb49f3db14ffeeda76`

        axios.get(endpoint)
            .then(res => {
                const data = res.data
                setMovie(data)
                setLoading(true)
            })
            .catch(error => {
                Swal.fire({
                    title: 'Ops.. the movie was not found!',
                    showCancelButton: false,
                    showConfirmButton: false
                })

                setTimeout(() => {
                    window.location.href = "/"
                }, 2500);

            })                 
    }, [setMovie , setLoading, idMovie])

    
    if(movie.backdrop_path === null || movie.poster_path === null){
        Swal.fire({
            title: 'Ops.. the movie was not found!',
            showCancelButton: false,
            showConfirmButton: false
        })

        setTimeout(() => {
            window.location.href = "/"
        }, 2500);
    }


  return (
    <>
        {loading &&  movie.poster_path !== null ?
        <Suspense fallback={<Spinner/>}>
            <div className="detallada">
                <PortadaDetallada movie={movie} />
                <Reparto idMovie={idMovie} />
                <InfoMovieDetail idMovie={idMovie}  movie={movie}/>
            </div>
        </Suspense>
        :
            <Spinner/>
        }
    </>
  )
}

export default DetalladaMovie