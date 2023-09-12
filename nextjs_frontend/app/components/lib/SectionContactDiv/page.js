import React from 'react';
import ContactForm from './ContactForm/page';

const page = () => {
  return (
    <div className="container SectionContactDiv">
      <h2>HOE KUNNEN WE U HELPEN?</h2>
      <p>
        Wilt u advies op maat of heeft u een andere vraag? Onze specialisten staan klaar om al uw
        vragen te beantwoorden.
      </p>
      <ContactForm />
    </div>
  );
};

export default page;
