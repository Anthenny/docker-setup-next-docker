'use client';
import React from 'react';
import Image from 'next/image';

import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import arrow from '../../../public/icon/arrow.png';

const settings = {
  lazyload: true,
  controls: true,
  nav: false,
  controlsContainer: '#custom_training',
  prevButton: '.prev_training',
  nextButton: '.next_training',
  mouseDrag: true,
  loop: true,
  items: 1,
  gutter: 10,
  responsive: {
    768: {
      items: 2,
    },
    1200: {
      items: 3, // Aantal items op breder scherm
    },
  },
};

const page = () => {
  const slides = [
    { imageUrl: '/../public/img/T1_img.jpg' },
    { imageUrl: '/../public/img/T3_img.jpg' },
    { imageUrl: '/../public/img/mainImag.jpg' },
    { imageUrl: '/../public/img/T3_img.jpg' },
    { imageUrl: '/../public/img/mainImag.jpg' },
  ];

  return (
    <div className="container fwTraining">
      <h2 className="section__title">Training Sessies</h2>

      <div className="slider">
        <TinySlider settings={settings}>
          {slides.map((slid, index) => {
            return (
              <div className="wrapper" key={index}>
                <div className="slid" style={{ height: 360 }}>
                  <Image
                    src={slid.imageUrl}
                    quality={100}
                    fill
                    alt="training section image"
                    sizes="width: 100vw"
                    priority
                  />
                </div>
              </div>
            );
          })}
        </TinySlider>

        <div className="slider__buttons" id={'custom_training'}>
          <p className="slider__buttons__slid__button prev_training">
            <Image src={arrow} quality={100} width={25} height={25} alt="arrow ico" />
          </p>
          <div className="slider__buttons__dots">
            <div className="slider__buttons__dots__dot" />
            <div className="slider__buttons__dots__dot" />
            <div className="slider__buttons__dots__dot slider__buttons__dots__dot__active" />
          </div>
          <p className="slider__buttons__slid__button next_training">
            <Image src={arrow} quality={100} width={25} height={25} alt="arrow ico" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
