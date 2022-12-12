import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "../../detalladaMovie/InfoMovie/infoMovieDetail.css"
import notFound from "../../../../assets/notFound.png"

const InfoTvDetail = ({idMovie , movie}) => {

    const [movieInfo , setMovieInfo] = useState([])

    const [errorSection , setErrorSection] = useState([])
    let [inputValue, setInputValue] = useState("US")

    const options = [
        { value: 'US', label: 'EEUU' },
        { value: 'AR', label: 'ARG' },
      ];

  
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        setErrorSection(false)
        const endpoint = `https://api.themoviedb.org/3/tv/${idMovie}/watch/providers?api_key=d37072b0437145eb49f3db14ffeeda76`

        if ( inputValue === "US"){
            axios.get(endpoint)
            .then(res => {
                const data = res.data.results.US.flatrate

                setMovieInfo(data)
            })
            .catch(error => {
                setErrorSection(true)
            })
        }else{
            if ( inputValue === "AR"){
                axios.get(endpoint)
                .then(res => {
                    const data = res.data.results.AR.flatrate
    
                    setMovieInfo(data)
                })
                .catch(error => {
                    setErrorSection(true)
                })
            }
        }
              
    }, [setMovieInfo, inputValue, idMovie ])



  return (
    <>
       <div className="infoMovieDetail">
           <h2 className='synopsis_title'>Synopsis</h2>
           <p className='text_sinapsis'>{movie.overview}</p>

            <div className="container_info">

                <div className="temporadas">
                    <h2 className='temporada_title'>Seasons</h2>

                    <div className="box_temporadas">
                        <div className="cardSeason">{movie.seasons.map((season, indx) => {
                                return <div key={indx} className="contain_cards_seasons">
                                            <p className='titleSeason'>{season.name} <br /> </p> 
                                            <p className='episodesSeason'>{season.episode_count} episodes</p>
                                            {
                                                season.poster_path !== null ?
                                                    <img className='img_season'  src={`https://image.tmdb.org/t/p/original${season.poster_path}`}  alt="imgSeason" />
                                                :
                                                    <img className='img_season_notfound'  src={notFound}  alt="imgSeason" />
                                            }
                                            
                                        </div> 
                            })}
                        </div>
                    </div>
                </div>
            
               <div className="box_providers">
                    <h2 className='available_provider'>Available in:</h2>

                   <select onChange={handleChange} className="select_change_lang">
                       {options.map((option, key) => (
                           <option key={key} value={option.value}>{option.label}</option>
                       ))}
                   </select>

                   {!errorSection && movieInfo !== undefined ? 

                        <div className="box_img_prover">
                            {
                                movieInfo.map((provider, indx) => {
                                    return <img className='img_provider' key={indx} src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}  alt="provider" /> 
                                })
                            }
                        </div>
                      :
                      <p>Opss.. information not available</p>
                  }
               </div>
            </div>
       </div>
    </>

  )
}

export default InfoTvDetail