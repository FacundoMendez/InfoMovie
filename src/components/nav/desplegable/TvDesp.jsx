import React, { useEffect , useState} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const TvDesp = ({handleToggle}) => {
    const [sectionsData, setSectionsData] = useState([]); 
    

    useEffect(() => {
        const endpoint = "https://api.themoviedb.org/3/genre/tv/list?api_key=d37072b0437145eb49f3db14ffeeda76&language=en-US"
  
        axios.get(endpoint)
          .then(res => {
            const apiData = res.data
            setSectionsData(apiData.genres)
  
          })
  
    },[])

  return (
    <ul className='desplegableMenu_tv'>
        <a href={`/trending/series`} ><li onClick={handleToggle}>Trending</li> </a> 
        {
            sectionsData.map((section , key) => {

            return <NavLink key={key} to={`/section/series/:${section.id}`} >
                        <li onClick={handleToggle}>{section.name}</li> 
                    </NavLink> 
            })
        }
    </ul> 

  )
}
export default TvDesp