import React from 'react';
import Big from '../../Common/Cards/Big';
import Small from '../../Common/Cards/Small';
import './Practices.css';
import { DataBS } from '../../Common/Cards/DataBS';
const Practices = () => {
    return (
        <>
            <div id="practice" className="headingChoose10">
                <div className="ChooseText10">Area of Practices<div className="curveChoose10"></div></div>
            </div>
            <div className="Pcards">
                {
                    DataBS.map((val, i) => {
                        if (val.category === 'big') {
                            return (
                                <>
                                    <Big key={val.id} src={val} />

                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Small key={val.id} src={val} />

                                </>
                            )
                        }
                    })
                }

            </div>
        </>
    )
}

export default Practices;