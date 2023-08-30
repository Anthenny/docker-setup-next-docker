import React from 'react';
import Image from 'next/image';
import textImage from '@/../../public/img/mainImag.jpg';

import Nav from '../components/Nav/page';

const page = () => {
  return (
    <div className="containerTest">
      <Nav />

      <div className="fwMain">
        <div className="fw1">
          <div className="left__col left__col__test">
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
            <div className="button">
              <p>CTA</p>
            </div>
          </div>
        </div>
        <div className="fw2">
          <div className="img__col1">
            <Image priority quality={100} src={textImage} fill alt="image" className="cImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

{
  /* <div className="img__col">
<Image
  priority
  quality={100}
  width={800}
  height={800}
  src={textImage}
  alt="image"
  className="cImg"
/>
</div> */
}
