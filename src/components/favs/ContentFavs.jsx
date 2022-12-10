import React, {Suspense, useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'

import Spinner from '../assets/spinner/Spinner'
import BoxCardsSearch from './boxCardsFavs/BoxCardsSearch'
import "./contentFavs.css"

const ContentFavs = () => {

    const {submit} = useParams()
    let submitName = submit.replace(/:/, '');

    const [movie , setMovie] = useState([])

  return (
    <>
        <Suspense fallback={<Spinner/>}>
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
 
</>
  )
}

export default ContentFavs