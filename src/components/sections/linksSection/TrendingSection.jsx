import React, {useEffect, useState} from 'react'
import "./sectionsStyle.css"
import axios from 'axios'
import CardsSection from '../CardsSection'
import Pagination from '../componentsSection/pagination/Pagination'
import { NavLink } from 'react-router-dom'


const TrendingSection = () => {
    

    const [movieList , setMovieList] = useState([])
    const [paginationCount , setPaginationCount] = useState(1)
    const [loading , setLoading] = useState(false)


    useEffect(() => {

      const endPoint = `https://api.themoviedb.org/3/trending/all/week?api_key=d37072b0437145eb49f3db14ffeeda76&page=${paginationCount}`
      
      axios.get(endPoint)
        .then( res =>{
          const apiData = res.data
          setLoading(true)
          setMovieList(apiData.results)
        })
    }, [paginationCount])

  return (
    <>
        {loading ?
            <div className="container_sect">
                <div className="box_list_sections">
                    {
                        movieList.map((movie, key) => {
                            return <NavLink key={key} to={`/:${movie.id}`}><CardsSection key={key} movie={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/></NavLink>
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

export default TrendingSection