import React from 'react'
import './Achieve.css';
import { AchieveData } from './AchieveData';
const Achieve = () => {
    return (
        <>
            <div className="main_C">
                <div className="headingChoose3">
                    <div className="ChooseText3">Our Achievements<div className="curveChoose3"></div></div>
                </div>
                <div className="main_C2">
                    {
                        AchieveData.map((val, i) => {
                            return (
                                <div key={i} className="mainD">
                                    <img className='imagTag' src={val.src} alt="" />
                                    <div className="vertical">

                                    </div>
                                    <div className="boxnum">
                                        <div className='num'>{val.Numbers}</div>
                                        <h2>{val.tag}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Achieve