import React from 'react';

const page = () => {
  return (
    <div className="container SectionContactDiv">
      <h2>HOE KUNNEN WE U HELPEN?</h2>
      <p>
        Wilt u advies op maat of heeft u een andere vraag? Onze specialisten staan klaar om al uw
        vragen te beantwoorden.
      </p>
      <form>
        <div className="inputDiv">
          <input type="text" name="" id="" placeholder="Naam" />
        </div>
        <div className="inputDiv">
          <input type="email" name="" id="" placeholder="Email adres" />
        </div>
        <div className="inputDiv">
          <input type="text" name="" id="" placeholder="Telefoon nummer" />
        </div>
        <div className="inputDiv">
          <textarea name="" id="" cols="30" rows="8" placeholder="Bericht"></textarea>
        </div>

        <div className="button">
          <p>bericht versturen</p>
        </div>
      </form>
    </div>
  );
};

export default page;
