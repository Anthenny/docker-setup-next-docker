'use client';
import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';

import arrow2 from '../../../public/icon/arrow2.png';

const settings = {
  lazyload: true,
  nav: false,
  controls: true,
  mouseDrag: true,
  loop: false,
  items: 3,
  gutter: 20,
};

const clickEvent = (slide) => {
  console.log(slide);
};

const page = () => {
  return (
    <div className="container fwRewiew">
      <h2 className="section__title">Reviews</h2>

      {/*<div className="slider">*/}
      {/*  <div className="slids">*/}
      {/*Arrow*/}
      <div>
        <Image src={arrow2} alt="arrow icon" width={50} height={50} />
      </div>

      {/*card item*/}
      <TinySlider settings={settings} onInit={clickEvent}>
        <div className="wrapper">
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
        </div>

        <div className="wrapper">
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
        </div>

        <div className="wrapper">
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
        </div>

        <div className="wrapper">
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
        </div>
      </TinySlider>

      {/*next arrow*/}
      <span>
        <Image src={arrow2} alt="arrow icon" width={50} height={50} />
      </span>
      {/*  </div>*/}
      {/*</div>*/}

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
