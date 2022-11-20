import React from 'react'
import './TopAdCard.css'
const TopAdCard = ({ src: { src, Name } }) => {
  return (
    <>
      <div className="main1">
        <ul className="ch-grid">
          <li>
            <div className="ch-item ch-img-1" style={{ backgroundImage: `url(${src})` }}>
              <div className="ch-info">
                <h3>{Name}</h3>
                <button className='btn1'>Connect</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default TopAdCard;