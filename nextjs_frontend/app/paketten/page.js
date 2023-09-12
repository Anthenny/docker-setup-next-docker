'use client';

import { useState } from 'react';

import ReviewsSection from '../components/ReviewsSection/page';
import InstagramSection from '../components/InstagramSection/page';
import PricingCard from '../components/paketten/pricingCard/page';
import SectionImgDiv from '../components/lib/SectionImgDiv/page';

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
    <>
      <div className="fullwidth fwpackagesSection">
        <SectionImgDiv imgSrc={paketSectionImg} sectionTitel={'BEKIJK ONZE PAKETTEN'} />
        <div className="container CpackagesSection">
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
    </>
  );
};

export default page;
