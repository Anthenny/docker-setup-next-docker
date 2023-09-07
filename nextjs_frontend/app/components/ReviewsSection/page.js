'use client';
import Image from 'next/image';
import React from 'react';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';

import arrow2 from '../../../public/icon/arrow2.png';

const settings = {
    lazyload: true,
    nav: false,
    controls: true,
    controlsContainer: '#custom_reviews',
    prevButton: '.prev_reviews',
    nextButton: '.next_reviews',
    mouseDrag: true,
    loop: true,
    items: 1,
    gutter: 20,
    responsive: {
        1200: {
            items: 3, // Aantal items op breder scherm
        },
        800: {
            items: 2, // Aantal items op breder scherm
        },
    },
};

const page = () => {
    return (
        <div className="container fwRewiew">
            <h2 className="section__title">Reviews</h2>

            <ul className="custom-controls" id={'custom_reviews'}>
                <li className={'prev_reviews'}>
                    <Image src={arrow2} alt="arrow icon" width={50} height={50}/>
                </li>
                <li className={'next_reviews'}>
                    <Image src={arrow2} alt="arrow icon" width={50} height={50}/>
                </li>
            </ul>

            <TinySlider settings={settings}>
                <div className="wrapper">
                    <div className="reviewsCard">
                        <p>Anthenny de Hoon</p>
                        <p>28-06-2023</p>
                        <p>
                            “Een goed uitgedacht schema met heerlijke gerechten. Daarnaast waren de HIIT
                            trainingen een leuke aanvulling op het schema.”
                        </p>
                        <div className="line__col">
                            <span>/</span>
                            <div className="line"/>
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
                            <span>/</span>
                            <div className="line"/>
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
                            {/*<span>/</span>*/}
                            <div className="line"/>
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
                            {/*<span>/</span>*/}
                            <div className="line"/>
                        </div>
                        <p>9 / 10</p>
                    </div>
                </div>
            </TinySlider>

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