'use client';

import { useState, useEffect } from 'react';

import ReviewsSection from '../components/ReviewsSection/page';
import InstagramSection from '../components/InstagramSection/page';
import Image from 'next/image';
import PricingCard from '../components/paketten/pricingCard/page';

import paketSectionImg from '../../public/img/paketSectionImg.jpg';

const page = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggleSubscription = () => {
    setIsYearly(!isYearly);
  };

  const packagedata = [
    {
      key: 1,
      packageNaam: 'Voedingsschema',
      packageTarget: 'Afvallen',
      packageYearlyPrice: 99.99,
      packageMonthlyPrice: 49.99,
      packageList: [
        'Weekelijks contact',
        'Weekelijks contact',
        'Weekelijks contact',
        'Weekelijks contact',
        'Weekelijks contact',
      ],
      packageAmout: 1,
      packageYearly: isYearly,
    },
    {
      key: 2,
      packageNaam: 'Voedingsschema',
      packageTarget: 'Afvallen',
      packageYearlyPrice: 99.99,
      packageMonthlyPrice: 49.99,
      packageList: [
        'Weekelijks contact',
        'Weekelijks contact',
        'Weekelijks contact',
        'Weekelijks contact',
        'Weekelijks contact',
      ],
      packageAmout: 1,
      packageYearly: isYearly,
    },
    {
      key: 3,
      packageNaam: 'Voedingsschema',
      packageTarget: 'Afvallen',
      packageYearlyPrice: 99.99,
      packageMonthlyPrice: 49.99,
      packageList: [
        'Weekelijks contact',
        'Weekelijks contact',
        'Weekelijks contact',
        'Weekelijks contact',
        'Weekelijks contact',
      ],
      packageAmout: 1,
      packageYearly: isYearly,
    },
  ];

  return (
    <div>
      <div className="fullwidth fwpackagesSection">
        <div className="imgDiv">
          <div className="darkBg" />
          <Image src={paketSectionImg} fill alt="fitness foto" />
        </div>
        <div className="container CpackagesSection">
          <h2>BEKIJK ONZE PAKETTEN</h2>
          <div className="top__col">
            <p>Kies jouw plan!</p>
            <div>
              <p
                className={`${isYearly ? 'active__option' : ''}`}
                onClick={handleToggleSubscription}
              >
                Jaarlijks
              </p>
              <p
                className={`${isYearly ? '' : 'active__option'}`}
                onClick={handleToggleSubscription}
              >
                Maandelijks
              </p>
            </div>
          </div>

          <div className="bottom__col">
            <PricingCard active={false} packagedata={packagedata[0]} />
            <PricingCard active={true} packagedata={packagedata[1]} />
            <PricingCard active={false} packagedata={packagedata[2]} />
          </div>
        </div>
      </div>

      <ReviewsSection />
      <InstagramSection />
    </div>
  );
};

export default page;
