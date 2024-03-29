import React, {useEffect, useState} from 'react'
import "./sectionsStyle.css"
import axios from 'axios'
import Pagination from '../../componentsSection/pagination/Pagination'
import CardsSectionMovie from '../../CardsSectionMovie'
import PreloadCards from '../../../preload/preloadCards/PreloadCards'


const TrendingSection = () => {
    

    const [movieList , setMovieList] = useState([])
    const [paginationCount , setPaginationCount] = useState(1)
    const [loading , setLoading] = useState(false)


    useEffect(() => {

      const endPoint = `https://api.themoviedb.org/3/trending/movie/week?api_key=d37072b0437145eb49f3db14ffeeda76&page=${paginationCount}`
      
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
                            return <CardsSectionMovie Type="movie" key={key} movie={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} id={movie.id}/>
                        })
                    }
                </div>
                <Pagination setPaginationCount={setPaginationCount} paginationCount={paginationCount} />

            </div>
        :
        <PreloadCards/>
    }
    </>
  )
}

export default TrendingSection