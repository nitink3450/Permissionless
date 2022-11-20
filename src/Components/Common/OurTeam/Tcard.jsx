import React from 'react'
import './Team.css';
const Tcard = ({src:{src,Names,cases}}) => {
  return (
    <>
    <div className="tcardSmall">
      <img className='tcardSmallImg' src={src} alt="" />
      <div>
        <h1>{Names}</h1>
        <h4>{cases}</h4>
      </div>
    </div>
    </>
  )
}

export default Tcard