import React from 'react'
import arrowleft from "../../../assets/arrow.png"
import arrowright from "../../../assets/arrow2.png"


const Pagination = ({paginationCount , setPaginationCount}) => {
  return (
    <div className="pagination">
        <a href="!#">
            <img src={arrowleft} alt="arrowLeft" onClick={() => {
                if(paginationCount > 1){
                    setPaginationCount(paginationCount -1)
                }
            }} />
        </a>


        <p>{paginationCount}</p>

        <a href="!#">
            <img src={arrowright} alt="arrowRight" onClick={() => {
                if(paginationCount >= 1){
                    setPaginationCount(paginationCount +1)
                }
            }} />
        </a>

    </div>
    )
}

export default Pagination