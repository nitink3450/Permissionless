import React from "react"
import Slider from "react-slick"
import { ClientData } from "./ClientData";
import './Client.css';

const Client = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="headingChoose22">
        <div className="ChooseText22">What says our happy Clients<div className="curveChoose22"></div></div>
      </div>
      <div className='content22'>
        <Slider {...settings}>
          {ClientData.map((val, i) => {
            return (
              <div key={i} className='items22'>
                <div className='box shadow'>
                  <div className='images22'>
                    <div className='img122'>
                      <img className="img22" src={val.src} alt='' />
                    </div>
                  </div>
                  <div className='text22'>
                    <h2 className='title22'>{val.Name}</h2>
                    <h5 style={{color:"gray"}}>{val.des}</h5>
                    <p style={{textAlign:"center"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem qui omnis in esse asperiores deserunt necessitatibus, quam commodi fugit recusandae.in esse asperiores deserunt necessitatibus, quam commodi fugit recusandae.</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default Client;
