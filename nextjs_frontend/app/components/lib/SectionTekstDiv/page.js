import React from 'react';

const page = ({ title, description }) => {
  return (
    <div className="container SectionTekstDiv">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default page;
