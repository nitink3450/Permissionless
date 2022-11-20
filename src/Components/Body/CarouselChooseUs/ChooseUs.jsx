import React from "react"
import Slider from "react-slick"
import { DataChoose } from "./DataChoose";
import './ChooseUs.css';

const ChooseUs = () => {
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
      <div className="headingChoose">
        <div className="ChooseText">Why Choose us<div className="curveChoose"></div></div>
      </div>
      <div className='content'>
        <Slider {...settings}>
          {DataChoose.map((val, i) => {
            return (
              <div key={i} className='items'>
                <div className='box shadow'>
                  <div className='images'>
                    <div className='img1'>
                      <img className="img" src={val.src} alt='' />
                    </div>
                  </div>
                  <div className='text'>
                    <h1 className='title'>{val.desc}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aliquam deserunt porro. Dolorem maiores alias at aspernatur molestias doloremque repellat culpa magni, repudiandae sequi nihil minima aliquid itaque nulla! Ea.</p>
                    <button className="btn2">Read More</button>
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

export default ChooseUs;
