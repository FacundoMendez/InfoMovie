import React, { useEffect } from 'react'
import "./preloadCards.css"
import gsap from 'gsap'

const PreloadCards = () => {

  useEffect(() => {
    let tl = gsap.timeline()

    tl.to(".placeholder",{
      delay:1.1,
      zIndex: -1 ,
      opacity:0,
  })

  tl.to(".placeholder",{
      visibility:"hidden"
  })
  },[])

  return (
    <div className="placeholder preloadCards">
      <div className="box_container">
          <div className="box1"></div>
          <div className="box placeholder-loader"></div>
          <div className="box placeholder-loader"></div>
          <div className="box placeholder-loader"></div>
          <div className="box placeholder-loader"></div>
          <div className="box placeholder-loader"></div>
          <div className="box placeholder-loader"></div>
      </div>
    </div>
  )
}

export default PreloadCards