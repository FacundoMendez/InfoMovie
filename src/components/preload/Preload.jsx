import React , {useEffect} from 'react'
import gsap from 'gsap'
import "./preload.css"

const Preload = () => {

    useEffect(() => {

        let tl = gsap.timeline()

        tl.to(".preload",{
            delay:.5,
            zIndex: -1 ,
            opacity:0,
        })
    
        tl.to(".preload",{
            visibility:"hidden"
        })

    },[])

  return (
    <div className='preload' id='wrapper'>
        <div id='loading'>
            <div className='bulletouter'>
                <div className='bulletinner'></div>
                <div className='mask'></div>
                <div className='dot'></div>
            </div>
        </div>
    </div>
  )
}

export default Preload