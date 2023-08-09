'use client';

import { useState } from 'react';

import ReviewsSection from '../components/ReviewsSection/page';
import InstagramSection from '../components/InstagramSection/page';
import Image from 'next/image';

import paketSectionImg from '../../public/img/paketSectionImg.jpg';
import vinkje1 from '../../public/icon/vinkje1.png';
import vinkje2 from '../../public/icon/vinkje2.png';

const pakketten = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggleSubscription = () => {
    setIsYearly(!isYearly);
  };
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
            <div className="pricingCard">
              <h3>Voedingsschema</h3>
              <p>
                <span>{isYearly ? '$99.99' : '$49.99'}</span> / per maand
              </p>
              <ul>
                <li>
                  <span>
                    <Image src={vinkje2} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje2} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje2} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje2} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje2} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
              </ul>
              <div className="priceButton">
                <p>In winkelmand</p>
              </div>
            </div>

            <div className="pricingCard active">
              <h3>Voedingsschema</h3>
              <p>
                <span>{isYearly ? '$99.99' : '$49.99'}</span> / per maand
              </p>
              <ul>
                <li>
                  <span>
                    <Image src={vinkje1} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje1} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje1} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje1} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje1} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
              </ul>
              <div className="priceButton priceButton__active">
                <p>In winkelmand</p>
              </div>
            </div>
            <div className="pricingCard">
              <h3>Voedingsschema</h3>
              <p>
                <span>{isYearly ? '$99.99' : '$49.99'}</span> / per maand
              </p>
              <ul>
                <li>
                  <span>
                    <Image src={vinkje2} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje2} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje2} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje2} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
                <li>
                  <span>
                    <Image src={vinkje2} width={20} height={20} alt="vinkje icon" />
                  </span>
                  Weekelijks contact
                </li>
              </ul>
              <div className="priceButton">
                <p>In winkelmand</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReviewsSection />
      <InstagramSection />
    </div>
  );
};

export default pakketten;
