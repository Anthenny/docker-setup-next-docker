'use client'
import Image from 'next/image';
import React from 'react';
import TinySlider from 'tiny-slider-react'
import "tiny-slider/dist/tiny-slider.css";

import arrow2 from '../../../public/icon/arrow2.png';

const settings = {
    lazyload: true,
    nav: false,
    controls: true,
    controlsContainer: '#custom',
    prevButton: '.prev',
    nextButton: '.next',
    mouseDrag: true,
    loop: true,
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
            <ul className="custom-controls" id={'custom'}>
                <li className={'prev'}>
                    <Image src={arrow2} alt="arrow icon" width={50} height={50}/>
                </li>
                <li className={'next'}>
                    <Image src={arrow2} alt="arrow icon" width={50} height={50}/>
                </li>
            </ul>
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
                            <span>//</span>
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
                            <span>//</span>
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
                            <span>//</span>
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