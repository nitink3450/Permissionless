import React from 'react'
import Tcard from './Tcard'
import './Team.css';
import { TeamData } from './TeamData';
const Team = () => {
    return (
        <>
            <div className="mainCon">
                <div className="headingChoose4">
                    <div className="ChooseText4">Our Team<div className="curveChoose4"></div></div>
                </div>
                <div className="Tcard">
                    {
                        TeamData.map((val, i) => {
                            return (
                                <Tcard key={i} src={val} />
                            )
                        })
                    }
                </div>
                <h3>View All Advocates <i className="fa-solid fa-arrow-right-long"></i></h3>
            </div>
        </>
    )
}

export default Team