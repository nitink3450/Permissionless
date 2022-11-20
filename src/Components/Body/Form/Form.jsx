import React from 'react'
import './Form.css';
const Form = () => {
    return (
        <>
            <div className='BigDivMain1'>
                <div className="headingChoose6">
                    <div className="ChooseText6">Free consultation<div className="curveChoose6"></div></div>
                </div>
                <div className="des">
                    <h4 style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi soluta in omnis impedit sit doloremque, blanditiis quas velit quae cupiditate.impedit sit doloremque, blanditiis quas velit quae blanditiis quas velit quae</h4>
                </div>
                <div className="FormDiv">
                    <div className="left1">
                        <div className="roundImg">
                            <h3>Zonathan Zord</h3>
                            <h5 style={{ color: "gray" }}>Communication Manager</h5>
                        </div>
                    </div>
                    <div className="right1">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Your Name
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter you Full Name" /></label> <label htmlFor="exampleFormControlInput1">Email address
                                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" /></label>
                                <label htmlFor="exampleFormControlInput1">Phone Number
                                    <input type="Number" className="form-control" id="exampleFormControlInput3" placeholder="xxxxxx0563" /></label>
                                <label htmlFor="exampleFormControlInput1">Subject
                                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Reason" /></label>
                            </div>
                            <div className="form-group1">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea placeholder="Your Message" className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                            <button className='btn_color1'>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Form