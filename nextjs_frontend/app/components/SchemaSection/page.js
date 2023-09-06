import Image from 'next/image';
import React from 'react';

import image1 from '../../../public/img/schema_img_1.jpg';
import image2 from '../../../public/img/schema_img_2.jpg';
import image3 from '../../../public/img/schema_img_3.jpg';
import iconRestaurant from '../../../public/icon/Restaurant.png';

const page = () => {
  return (
    <div className="fullwidthColor fwSchema">
      <div className="container">
        <h3 className="cSchemas__header">Kies jouw schema</h3>
        <div className="cSchemas">
          <div className="schemaCard">
            <p className="schemaCard__header">VOEDINGS SCHEMA</p>
            <div className="schemaCard__icon">
              <Image src={iconRestaurant} alt="logo" height={50} width={50} />
            </div>
            <p className="schemaCard__button">Meer info</p>

            <Image src={image1} alt="fooding shema food" fill sizes="width: 100vw" />
            <div />
          </div>
          <div className="schemaCard">
            <p className="schemaCard__header">VOEDINGS SCHEMA</p>
            <div className="schemaCard__icon">
              <Image src={iconRestaurant} alt="logo" height={50} width={50} sizes="width: 100vw" />
            </div>
            <p className="schemaCard__button">Meer info</p>

            <Image src={image2} alt="fooding shema food" fill sizes="width: 100vw" />
            <div />
          </div>
          <div className="schemaCard">
            <p className="schemaCard__header">VOEDINGS SCHEMA</p>
            <div className="schemaCard__icon">
              <Image src={iconRestaurant} alt="logo" height={50} width={50} sizes="width: 100vw" />
            </div>
            <p className="schemaCard__button">Meer info</p>

            <Image src={image3} alt="fooding shema food" fill sizes="width: 100vw" />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
