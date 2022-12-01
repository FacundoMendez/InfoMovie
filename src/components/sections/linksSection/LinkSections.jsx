import React, {useEffect, useState} from 'react'
import "./sectionsStyle.css"
import axios from 'axios'
import CardsSection from '../CardsSection'
import Pagination from '../componentsSection/pagination/Pagination'
import { useParams } from 'react-router-dom'


const LinkSections = () => {

    const {roomId} = useParams()

    const [movieList , setMovieList] = useState([])
    const [paginationCount , setPaginationCount] = useState(1)
    const [loading , setLoading] = useState(false)
  
    let paginationA = paginationCount

    let id = roomId.replace(/:/, '');

      console.log(id)
  
    useEffect(() => {
      const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=d37072b0437145eb49f3db14ffeeda76&language=en-US&with_genres=${id}&page=${paginationA}`
  
      axios.get(endPoint)
        .then( res =>{
          const apiData = res.data
          setLoading(true)
          setMovieList(apiData.results)
        })
    }, [paginationA , id])


    


  return (
    <>
        {loading ?
            <div className="container_sect">
                <div className="box_list_sections">
                    {
                        movieList.map((movie, key) => {
                            return <CardsSection key={key} movie={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                        })
                    }
                </div>
                <Pagination setPaginationCount={setPaginationCount} paginationCount={paginationCount} />

            </div>
        :
        null
    }
    </>
  )
}

export default LinkSections