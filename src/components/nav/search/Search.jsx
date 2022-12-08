import React, { useState} from 'react'
import busquedaImg from "../../assets/busqueda.png"
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()



  const [search , setSearch] = useState(false)

  const handleSearch = () => {
    setSearch(!search);
  };

  const handlerSumbit = e => {
    e.preventDefault()

    const searchSubmit = e.currentTarget.searchSubmit.value.trim()

    if (searchSubmit.length >= 1 ){
      navigate(`/search/:${searchSubmit}`)
      e.currentTarget.searchSubmit.value = ""
    }

  }
  

  return (
    <div className="busqueda" >
        <img src={busquedaImg} alt="iconBusqueda" onClick={handleSearch}/>
        <div className={!search ? "boxSearch_active" : "boxSearch"}>
          <form onSubmit={handlerSumbit}>
            <input  type="text" name="searchSubmit" placeholder='Search' />

            <button type='submit'className={search ? "enviar_active" : "enviar"} > </button>
          </form>

        </div>
    </div>
  )
}

export default Search