import React, {lazy, Suspense, useEffect, useState, useContext} from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import "./detallada.css"
import axios from 'axios'
import Spinner from '../assets/spinner/Spinner'
import Swal from 'sweetalert2'
import Context from '../context/Context'

const InfoTvDetail = lazy(() => import ("./componentsDetallada/detalladaTv/InfoTv/InfoTvDetail"))
const PortadaTvDetallada = lazy(() => import ("./componentsDetallada/detalladaTv/portadaTv/PortadaTvDetallada"))
const RepartoTv = lazy(() => import ("./componentsDetallada/detalladaTv/repartoTv/RepartoTv"))



const DetalladaTv = () => {
    const context = useContext(Context)
    const navigate = useNavigate()

    const {idTv}= useParams()
    let idMovie = idTv.replace(/:/, '');

    const [loading , setLoading] = useState(false)
    const [movie , setMovie] = useState([])



    /*verifica si el usuario esta logeado   */

    const verifyConnected = () => {
        if (!context.loginConnected ){
            navigate("/")
        }
    }
    verifyConnected()


    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/tv/${idMovie}?api_key=d37072b0437145eb49f3db14ffeeda76`

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
        {context.loginConnected && loading &&  movie.poster_path !== null ?
            <Suspense fallback={<Spinner/>}>
                <div className="detallada">
                    <PortadaTvDetallada movie={movie} />
                    <InfoTvDetail idMovie={idMovie}  movie={movie}/>
                    <RepartoTv idMovie={idMovie} />
                </div>
            </Suspense>
        :
            <Spinner/>
        }
    </>
  )
}

export default DetalladaTv