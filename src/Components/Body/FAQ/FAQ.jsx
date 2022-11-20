import React from 'react'
import Accordian from '../../Common/Accordian/Accordian'
import './FAQ.css'
import {Fdata} from './FAQdata';
const FAQ = () => {
    return (
        <>
            <div className='BigDivMain'>
                <div className="headingChoose5">
                    <div className="ChooseText5">FAQ's<div className="curveChoose5"></div></div>
                </div>
                <div className="acc">
                    {
                        Fdata.map((val,i)=>{
                            return(
                                <Accordian key={i} src={val}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FAQ