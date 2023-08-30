import React from 'react';
import Image from 'next/image';

import arrow from '../../../public/icon/arrow.png';

const page = () => {
  const slides = [
    { imageUrl: '/../public/img/T1_img.jpg' },
    { imageUrl: '/../public/img/T3_img.jpg' },
    { imageUrl: '/../public/img/mainImag.jpg' },
  ];

  return (
    <div className="container fwTraining">
      <h2 className="section__title">Training Sessies</h2>

      <div className="slider">
        <div className="slids">
          {slides.map((slid, index) => {
            return (
              <div className="slid" key={index} style={{ height: 360 }}>
                <Image
                  src={slid.imageUrl}
                  quality={100}
                  fill
                  alt="training section image"
                  sizes="100vw"
                />
              </div>
            );
          })}
        </div>
        <div className="slider__buttons">
          <p className="slider__buttons__slid__button">
            <Image src={arrow} quality={100} width={25} height={25} alt="arrow ico" />
          </p>
          <div className="slider__buttons__dots">
            <div className="slider__buttons__dots__dot" />
            <div className="slider__buttons__dots__dot" />
            <div className="slider__buttons__dots__dot slider__buttons__dots__dot__active" />
          </div>
          <p className="slider__buttons__slid__button">
            <Image src={arrow} quality={100} width={25} height={25} alt="arrow ico" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
