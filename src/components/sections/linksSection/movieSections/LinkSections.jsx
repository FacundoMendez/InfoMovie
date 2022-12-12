import React, {useEffect, useState} from 'react'
import "./sectionsStyle.css"
import axios from 'axios'
import Pagination from '../../componentsSection/pagination/Pagination'
import { useParams } from 'react-router-dom'
import Spinner from '../../../assets/spinner/Spinner'
import CardsSectionMovie from '../../CardsSectionMovie'
import PreloadCards from '../../../preload/preloadCards/PreloadCards'


const LinkSections = () => {

    const {roomId} = useParams()

    const [movieList , setMovieList] = useState([])
    const [paginationCount , setPaginationCount] = useState(1)

    const [loading , setLoading] = useState(false)

    let id = roomId.replace(/:/, '');

    useEffect(() => {

      const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=d37072b0437145eb49f3db14ffeeda76&language=en-US&with_genres=${id}&page=${paginationCount}`
  
      axios.get(endPoint)
        .then( res =>{
          const apiData = res.data
          setLoading(true)
          setMovieList(apiData.results)
        })
    }, [paginationCount , id , roomId , setLoading ])


  return (
    <>
        {loading ?
            <div className="container_sect">
                <div className="box_list_sections">
                    {
                        movieList.map((movie, key) => {
                            return <CardsSectionMovie Type="movie" key={key} id={movie.id} movie={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                        })
                    }
                </div>
                <Pagination setPaginationCount={setPaginationCount} paginationCount={paginationCount}/>

            </div>
        :
        <PreloadCards/>
    }
    </>
  )
}

export default LinkSections