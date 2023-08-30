import React from 'react';
import Image from 'next/image';

const page = () => {
  const slides = [
    { imageUrl: '/../public/img/mainImag.jpg' },
    { imageUrl: '/../public/img/T1_img.jpg' },
    { imageUrl: '/../public/img/mainImag.jpg' },
    { imageUrl: '/../public/img/T4_img.jpg' },
  ];
  return (
    <div className="container fwInstagram">
      <h2 className="section__title">INSTAGRAM</h2>
      <div className="slider">
        <div className="slids">
          {slides.map((slid, index) => {
            return (
              <div className="slid" key={index} style={{ height: 267 }}>
                <Image src={slid.imageUrl} fill alt="instagram section image" sizes="100vw" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
