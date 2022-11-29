import React, { useEffect , useState} from 'react'
import "./nav.css"
import gsap from 'gsap'
import Login from '../login/Login';
import { NavLink, useNavigate } from 'react-router-dom'
import Search from './search/Search';


const Nav = () => {

  const [loginConnected , setLoginConnected ] = useState([]) /* verify connected user */
  const [isActive, setActive] = useState(false); /* active nav */
  const [isActiveLogin, setActiveLogin] = useState(false); /* active box login */


  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleToggleLogin = () => {
    setActiveLogin(!isActiveLogin);
  };


  const navigate = useNavigate()

  const handleDisconnectLogin = () => {
    setLoginConnected(false);
    localStorage.removeItem("token"); 
    navigate("/")
  };


  useEffect(() => {
      gsap.to(".lineNav",{
          delay:.8,
          opacity:1,
          duration:1.5,
          width:"50%"
      })
  
      if(localStorage.getItem("token") !== null){
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

        <NavLink className="linkHome" to="/">
          Home
        </NavLink>
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
    

        {isActiveLogin ? 
           <Login  handleToggleLogin={handleToggleLogin} setLoginConnected={setLoginConnected}/>
            : 
            null
        }


        {isActive ? 
            <ul className='list_nav' >
                <div className="imgBlur"></div>
            </ul>
            : 
            null
        }

    </div>
  )
}

export default Nav