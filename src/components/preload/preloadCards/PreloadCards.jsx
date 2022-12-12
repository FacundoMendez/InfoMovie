import React from 'react'
import "./preloadCards.css"

const PreloadCards = () => {

  return (
    <div className="placeholder preload">
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