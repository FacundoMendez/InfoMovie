import React, { useEffect , useState} from 'react'
import "./nav.css"
import gsap from 'gsap'
import Login from '../login/Login';
import { NavLink } from 'react-router-dom'
import Search from './search/Search';
import axios from 'axios';



const Nav = () => {

 
  const [isActive, setActive] = useState(false); /* active nav */

  const handleToggle = () => {
    setActive(!isActive);
  };


  const [sectionsData, setSectionsData] = useState([]); /* active nav */
  
  const [loginConnected , setLoginConnected ] = useState(false) /* verify connected user */
  const [isActiveLogin, setActiveLogin] = useState(false); /* active box login */

    /* activa login */
    const handleToggleLogin = () => {
      setActiveLogin(!isActiveLogin);
    };
  
  
    /* desconecta el login (con el button) */
  
    const handleDisconnectLogin = () => {
      setLoginConnected(false);
      sessionStorage.removeItem("token"); 
    };
  

  useEffect(() => {
      gsap.to(".lineNav",{
          delay:.8,
          opacity:1,
          duration:1.5,
          width:"50%"
      })
  
      const endpoint = "https://api.themoviedb.org/3/genre/movie/list?api_key=d37072b0437145eb49f3db14ffeeda76&language=en-US"

      axios.get(endpoint)
        .then(res => {
          const apiData = res.data
          setSectionsData(apiData.genres)

        })

      /* detecta si hay token de login */
      
      if(sessionStorage.getItem("token") !== null){
        setLoginConnected(true)
      }
  },[])



  return (
    <div className="nav">

        <Search/>

        <div className="lineNav"></div>
        <div className="toggle" onClick={handleToggle}>
            <div className={ isActive ? "line line1_active" : "line line1"}></div>
            <div className={ isActive ? "line line2_active" : "line line2"}></div>
            <div className={ isActive ? "line line3_active" : "line line3"}></div>
        </div>


        {/* modificar boton de login / login / logout */}
     
        {
          loginConnected !== true ? 
            <div className="button_login" onClick={() => handleToggleLogin()}>
              <p>Login</p> 
            </div>
          :
            <div className="button_login" onClick={() => handleDisconnectLogin()}>
              <p>Logout</p> 
            </div>
        }

    
        {/* activar boton de login */}

        {isActiveLogin ? 
           <Login  handleToggleLogin={handleToggleLogin} setLoginConnected={setLoginConnected}/>
            : 
            null
        }


        {/* links de nav */}

        {isActive ? 
            <div className='list_nav' >
              <div className="box_links_nav">
                  <NavLink className="linkHome_despl" to="/" onClick={handleToggle}>
                    Home
                  </NavLink>
                  <hr className='list_hr' />
                  <ul>
                    <a href={`/trending`} ><li onClick={handleToggle}>Trending</li> </a> 
                    {
                        sectionsData.filter(sectionsData => sectionsData.id !== 10749).map((section , key) => {
                          return <a key={key} href={`/section/:${section.id}`} >
                              <li key={key} onClick={handleToggle}>{section.name}</li> 
                            
                            </a> 
                          })
                    }

                  </ul>
                </div>
              </div>
            : 
            null
        }

    </div>
  )
}

export default Nav