import React, {Suspense, useEffect, useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import BoxCardsSearch from './boxCardsSearch/BoxCardsSearch'
import "./contentSearch.css"
import PreloadCards from '../preload/preloadCards/PreloadCards'

const ContentSearch = () => {


    const {submit} = useParams()
    let submitName = submit.replace(/:/, '');

    const [movie , setMovie] = useState([])
    const [loading , setLoading] = useState(false)


    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/search/multi?api_key=d37072b0437145eb49f3db14ffeeda76&language=en-US&page=1&include_adult=false&query=${submitName}`

        axios.get(endpoint)
            .then(res => {
                const data = res.data.results
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
            

    }, [setMovie , submitName ,setLoading])


    const errorLenght = () => {
        if(movie.length === 0){
            Swal.fire({
                title: 'Ops.. the movie was not found!',
                showCancelButton: false,
                showConfirmButton: false
            })
    
            setTimeout(() => {
                window.location.href = "/"
            }, 2500);
        }
    }

    

  return (
    <>
    {loading  ?
        <Suspense fallback={<PreloadCards/>}>
            <div className="searchContent">
                {movie.length === 0 && errorLenght()}
                <h2 className='title_results_searchs'>Resutls</h2>
                {
                    movie.filter(movie => movie.media_type !=='person' ).map((result , indx) => {
                        return <NavLink className="link_busqueda" key={indx} to={`/${result.media_type}/:${result.id}`}>
                                    <BoxCardsSearch movie={result} />
                                </NavLink> 
                    })
                }

            </div>
        </Suspense>
    :
        <PreloadCards/>
    }
</>
  )
}

export default ContentSearch