import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
      <div className='header-div'>
        <div className="header-div1">
          <div className="div-one">
            <img className='small-icon relative' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt="img" />
            <div>Welcome to the</div>
          </div>
          <div className="div-two">
            <div className='jsfirm'>J.Firm
              <div className="curve"></div>
            </div>
            <img className='small-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt="img" />
            <div>Law Group</div>
          </div>
          <p className='para' style={{textAlign:"center"}}>Centralize your Law & order  support with J.Firm</p>
          <div className="form">
            <i className="fa-solid fa-envelope"></i>
            <input className='inputmail' type="email" placeholder='Your Email Address For Line Support' />
            <button className='emailbtn'>Let's Talk</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Header;