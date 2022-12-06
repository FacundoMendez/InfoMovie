import React , {useEffect} from 'react'
import gsap from 'gsap'
import "./preload.css"

const Preload = () => {

    useEffect(() => {

        let tl = gsap.timeline()

        tl.to(".line_preload",{
            opacity:1,
            duration:1.5,
            width:"50%"
        })

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
    <div className="preload">
        <div className="line_preload"></div>
    </div>
  )
}

export default Preload