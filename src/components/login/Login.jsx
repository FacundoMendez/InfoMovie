import { useContext} from 'react';
import "./login.css"
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Context from '../context/Context';

const Login = () => {

  const context = useContext(Context)

  const navigate = useNavigate()

    const submitHandler= e =>{
        e.preventDefault()


        const password = e.target.password.value
        const email = e.target.email.value

        const regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (email === "" || password === "" ){
           Swal.fire('Fields cannot be empty')
            return
        }

        
        if (email !== "" && !regexEmail.test(email)){
            Swal.fire('Enter a valid email')
            return
        }

        if (email !== "challenge@alkemy.org" || password !== "react"){
            Swal.fire('Invalid Credentials')
            return
        }



        axios
            .post(`http://challenge-react.alkemy.org `,{email,password})
            .then(res => {
                
                  const token = res.data.token
                  sessionStorage.setItem("token" , token)
                  navigate("/")
                  context.setLoginConnected(true)
            })
    }


  return (
  <>
    <div className="login">
      <div className="login_back"></div>
      <form className='form' onSubmit={(submitHandler)}>
        <label className='label_form'>
            <span>Email:</span>
            <input type="text" name='email' placeholder='challenge@alkemy.org' />
        </label>
        <label className='label_form'>
            <span>Password:</span>
            <input type="password" placeholder='react'  name='password'  />
        </label>
        <button className='buttonSubmit-login' type='submit'>Log In</button>
      </form>
    </div>
  </>
  )
}

export default Login