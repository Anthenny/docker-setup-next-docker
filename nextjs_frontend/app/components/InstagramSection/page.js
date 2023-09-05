import React from 'react';
import Image from 'next/image';
import instagramIcon from '@/../../public/icon/instagram.png';

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
                <span>
                  <Image src={instagramIcon} width={40} height={40} alt="icon instagram" />
                </span>
                <div className="darkBg" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
