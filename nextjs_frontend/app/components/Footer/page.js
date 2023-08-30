import React from 'react';
import Image from 'next/image';

import facebookIcon from '../../../public/icon/facebook.png';
import instagramIcon from '../../../public/icon/instagram.png';

const page = () => {
  return (
    <div className="fullwidthColor">
      <div className="container cFooter">
        <div className="top__col col">
          <ul>
            <li>
              <Image src={instagramIcon} width={40} height={40} alt="icon instagram" />
            </li>
            <li>
              <Image src={facebookIcon} width={40} height={40} alt="icon instagram" />
            </li>
            <li>Email</li>
          </ul>
          <ul>
            <li>Over</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="bottom__col col">
          <p>Copyright © 2023 - Toensiefit B.V. Alle rechten voorbehouden.</p>
          <ul>
            <li>Privacy</li>
            <li>Algemene voorwaarden</li>
            <li>Disclaimer</li>
            <li>Links</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
