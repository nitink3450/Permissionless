import React from 'react'
import TopAdCard from '../../Common/TopAdCircleCard/TopAdCard'
import './TopAd.css';
import { data } from '../.././Common/TopAdCircleCard/Data'
const TopAd = () => {
  return (
    <>
      <div className="main">
        <div className="head">
          <div className="topText">Top Advocate<div className="curvetop"></div></div>
          <a style={{ textDecoration: "underline", color: "white" }} href="/">View All</a>
        </div>
        <div className="drag">
          {data.map((val, i) => {
            return (<TopAdCard key={i} src={val} />)
          })}
        </div>
      </div>
      <div className="intro">
        <div className="left">
          <div>Let's Introduce Ourself<div className="curveIntro"></div></div>
        </div>
        <div className="right">
          <h3>Criminal Lawyer</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum cumque et iure sunt vel assumenda officia, recusandae ad aut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae deleniti asperiores atque molestias laborum suscipit eum eius sit maiores magni.</p>
        </div>
      </div>

    </>
  )
}

export default TopAd