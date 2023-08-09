import Image from 'next/image';
import React from 'react';

import arrow2 from '../../../public/icon/arrow2.png';

const page = () => {
  return (
    <div className="container fwRewiew">
      <h2 className="section__title">revieuws</h2>

      <div className="slider">
        <div className="slids">
          <span>
            <Image src={arrow2} alt="arrow icon" width={50} height={50} />
          </span>
          <div className="reviewsCard">
            <p>Anthenny de Hoon</p>
            <p>28-06-2023</p>
            <p>
              “Een goed uitgedacht schema met heerlijke gerechten. Daarnaast waren de HIIT
              trainingen een leuke aanvulling op het schema.”
            </p>
            <div className="line__col">
              <span>//</span>
              <div className="line" />
            </div>
            <p>9 / 10</p>
          </div>
          <div className="reviewsCard">
            <p>Anthenny de Hoon</p>
            <p>28-06-2023</p>
            <p>
              “Een goed uitgedacht schema met heerlijke gerechten. Daarnaast waren de HIIT
              trainingen een leuke aanvulling op het schema.”
            </p>
            <div className="line__col">
              <span>//</span>
              <div className="line" />
            </div>
            <p>9 / 10</p>
          </div>
          <div className="reviewsCard">
            <p>Anthenny de Hoon</p>
            <p>28-06-2023</p>
            <p>
              “Een goed uitgedacht schema met heerlijke gerechten. Daarnaast waren de HIIT
              trainingen een leuke aanvulling op het schema.”
            </p>
            <div className="line__col">
              <span>//</span>
              <div className="line" />
            </div>
            <p>9 / 10</p>
          </div>
          <span>
            <Image src={arrow2} alt="arrow icon" width={50} height={50} />
          </span>
        </div>
      </div>

      <div className="cReview">
        <p>
          Toensiefitness is gemiddeld beoordeeld met een 9.1 / 10 op basis van 920 klantervaringen.
        </p>
        <div className="button">
          <p>ALLE REVIEWS</p>
        </div>
      </div>
    </div>
  );
};

export default page;
