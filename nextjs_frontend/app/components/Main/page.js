import React from 'react';
import textImage from '@/../../public/img/fitness.png';
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div className="noFullwidth">
            <div className="image__wrapper">
                <div className="darkBg"></div>
                <Image src={textImage} alt={'image'}/>
            </div>
            <div className="container cBanner">
                <div className="left__col ">
                    <div className="cTitle">
                        <p>JOUW DOELEN</p>
                        <p>WERKELIJKHEID MAKEN</p>
                    </div>
                    <p>
                        Je doel bereiken vereist inzet en motivatie. Met een veeleisende baan, een druk
                        gezinsleven en een rijk sociaal leven is dat soms best moeilijk om op te brengen. Als
                        personal trainer ben ik er om jou te motiveren!
                    </p>
                    <ul className="cList">
                        <p>WAT BIEDEN WIJ AAN?</p>
                        <li>1 op 1 persoonlijke lessen</li>
                        <li>Voedingschema’s</li>
                        <li>Trainingschema’s</li>
                        <li>Boxing / Kickboxing</li>
                        <li>HIIT</li>
                        <li>Kracht en conditie</li>
                    </ul>
                    <Link href={'/paketten'} className="newButton">
                        <span>SERVICES</span>
                    </Link>
                </div>
                <div className="right__col">
                    <Image src={textImage} alt={"image"}/>
                </div>
            </div>
            {/*<div className="img__col ">*/}
            {/*    <div className="darkBg"></div>*/}
            {/*    <Image*/}
            {/*        priority*/}
            {/*        quality={100}*/}
            {/*        width={800}*/}
            {/*        height={800}*/}
            {/*        src={textImage}*/}
            {/*        alt="image"*/}
            {/*        className="cImg"*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
};

export default page;