'use client';

import { useState } from 'react';

// const [isSwitched, setIsSwitched] = useState(false);

const handleToggle = () => {
  setIsSwitched(!isSwitched);
};
const page = () => {
  return (
    <div className="left__col">
      <h3>Persoonlijke gegevens</h3>
      <div className="col">
        <div className="inputs__col">
          <div className="input">
            <label htmlFor="naam">Naam</label>
            <input id="naam" type="text" placeholder="U naam" />
          </div>
          <div className="input">
            <label htmlFor="naam">E-mail</label>
            <input id="naam" type="email" placeholder="U email" />
          </div>
          <div className="input">
            <label htmlFor="naam">Naam</label>
            <input id="naam" type="text" placeholder="U email" />
          </div>
          <div className="input">
            <label htmlFor="naam">Naam</label>
            <input id="naam" type="text" placeholder="U naam" />
          </div>
          <div className="input">
            <label htmlFor="naam">Naam</label>
            <input id="naam" type="text" placeholder="U naam" />
          </div>
          <div className="input">
            <label htmlFor="naam">Naam</label>
            <input id="naam" type="text" placeholder="U naam" />
          </div>
        </div>

        <div className="toggel__col">
          <label className="switch" onClick={handleToggle}>
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p>Aanmelden voor de nieuwsbrief</p>
        </div>
      </div>
    </div>
  );
};

export default page;
