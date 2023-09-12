import React from 'react';
import Image from 'next/image';

const page = ({ imgSrc, sectionTitel }) => {
  return (
    <div className="sectionImgDiv">
      <div className="darkBg" />
      <Image src={imgSrc} priority fill alt="fitness foto" />
      <h2 className="container">{sectionTitel}</h2>
    </div>
  );
};

export default page;
