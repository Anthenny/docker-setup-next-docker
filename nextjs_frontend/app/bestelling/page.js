'use client';

import { useState } from 'react';

const page = () => {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleToggle = () => {
    setIsSwitched(!isSwitched);
  };
  return (
    <div className="container FwOrderPage">
      <h2 className="section__title">Bestelling</h2>
      <form className="cOrderPage">
        <div className="left__col">
          <h3>Persoonlijke gegevens</h3>
          <div className="col">
            <div className="inputs__col">
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
              <label class="switch" onClick={handleToggle}>
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <p>Aanmelden voor de nieuwsbrief</p>
            </div>
          </div>
        </div>
        <div className="right__col">
          <h3>Bestelling gegevens</h3>
          <div className="col">
            <div className="top__col">
              <div className="cols">
                <div className="tcol">
                  <h4>Combi deal</h4>
                  <span>Afvallen</span>
                  <p>$128,99</p>
                </div>
                <div className="amount__col">
                  <span>-</span>
                  <p>1</p>
                  <span>+</span>
                </div>
              </div>

              <div className="cols">
                <div className="tcol">
                  <h4>Combi deal</h4>
                  <span>Afvallen</span>
                  <p>$128,99</p>
                </div>
                <div className="amount__col">
                  <span>-</span>
                  <p>1</p>
                  <span>+</span>
                </div>
              </div>
              {/* <div className="cols">
                <div className="tcol">
                  <h4>Combi deal</h4>
                  <span>Afvallen</span>
                  <p>$128,99</p>
                </div>
                <div className="amount__col">
                  <span>-</span>
                  <p>1</p>
                  <span>+</span>
                </div>
              </div> */}
              {/* <div className="cols">
                <div className="tcol">
                  <h4>Combi deal</h4>
                  <span>Afvallen</span>
                  <p>$128,99</p>
                </div>
                <div className="amount__col">
                  <span>-</span>
                  <p>1</p>
                  <span>+</span>
                </div>
              </div> */}
            </div>

            <div className="bottom__col">
              <div>
                <p>Totaal</p>
                <p>$128,99</p>
              </div>
              <p>Bestelling afronden</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
