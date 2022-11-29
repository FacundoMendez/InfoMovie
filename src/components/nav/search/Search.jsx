import React, { useState} from 'react'
import busquedaImg from "../../assets/busqueda.png"


const Search = () => {

  const [search , setSearch] = useState(false)

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <div className="busqueda" >
        <img src={busquedaImg} alt="iconBusqueda" onClick={handleSearch}/>
        <div className={!search ? "boxSearch_active" : "boxSearch"}>
        <input  type="text" placeholder='Search' />
        </div>
    </div>
  )
}

export default Search