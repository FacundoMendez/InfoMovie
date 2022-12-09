import React, { useEffect , useState} from 'react'
import "./nav.css"
import gsap from 'gsap'
import { NavLink } from 'react-router-dom'
import Search from './search/Search';
import axios from 'axios';


const Nav = () => {

/*   const context = useContext(Context)

  const navigate = useNavigate()
  */
  const [isActive, setActive] = useState(false); /* active nav */

  const [sectionsData, setSectionsData] = useState([]); 
  

  
  const handleToggle = () => {
    setActive(!isActive);
  };

  
    /* desconecta el login (con el button) */
  
/*     const handleDisconnectLogin = () => {
      context.setLoginConnected(false);
      sessionStorage.removeItem("token"); 
      navigate("/")
    };
   */

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

  },[])


  const [menuItem, setMenuItem] = useState(false); 
  const [menuItemTv, setMenuItemTv] = useState(false); 


  const handlerMenuMovie = () => {
    setMenuItem(!menuItem)
    setMenuItemTv(false)
  }
  const handlerMenuTv = () => {
    setMenuItemTv(!menuItemTv)
    setMenuItem(false)
  }

  return (

      <div className="nav">

          <Search/>

          <div className="lineNav"></div>
          <div className="toggle" onClick={handleToggle}>
              <div className={ isActive ? "line line1_active" : "line line1"}></div>
              <div className={ isActive ? "line line2_active" : "line line2"}></div>
              <div className={ isActive ? "line line3_active" : "line line3"}></div>
          </div>


          {/* desconecta el login*/}
      
       {/*    <div className="button_login" onClick={() => handleDisconnectLogin()}>
            <p>Logout</p> 
          </div> */}
    
          {/* links de nav */}

          {isActive ? 
              <div className='list_nav' >
                <div className="box_links_nav">
                    <NavLink className="linkHome_despl" to="/" onClick={handleToggle}>
                      Home
                    </NavLink>
                    <hr className='list_hr' />

                    {/* section movie */}

                    <div className="movieSelect">
                      <p className='title_select' onClick={handlerMenuMovie}>Movies</p> 
                      <div className={!menuItem ?"triangle_back": "triangle_top"}></div>
                      {
                        menuItem &&
                          <ul className='desplegableMenu'>
                            <a href={`/trending`} ><li onClick={handleToggle}>Trending</li> </a> 
                            {
                                sectionsData.filter(sectionsData => sectionsData.id !== 10749).map((section , key) => {

                                  return <a key={key} href={`/section/:${section.id}`} >
                                            <li key={key} onClick={handleToggle}>{section.name}</li> 
                                          </a> 
                                  })
                            }
                          </ul> 
                        
                      }
                    </div>

                    {/* section tv */}

                    <div className="movieSelect">
                      <p className='title_select' onClick={handlerMenuTv}>Series</p>
                        <div className={!menuItemTv ?"triangle_back_tv": "triangle_top_tv"}></div>
                        {
                          menuItemTv &&
                            <ul className='desplegableMenu_tv'>
                              <a href={`/trending`} ><li onClick={handleToggle}>Trending</li> </a> 
                              {
                                  sectionsData.filter(sectionsData => sectionsData.id !== 10749).map((section , key) => {

                                    return <a key={key} href={`/section/:${section.id}`} >
                                              <li key={key} onClick={handleToggle}>{section.name}</li> 
                                            </a> 
                                    })
                              }
                            </ul> 
                          
                        }
                    </div>
                  </div>
                </div>
              : 
              null
          }

      </div>

  )
}

export default Nav