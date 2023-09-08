import React from 'react';
import SectionImgDiv from '../components/lib/SectionImgDiv/page';
import SectionTekstDiv from '../components/lib/SectionTekstDiv/page';
import paketSectionImg from '../../public/img/paketSectionImg.jpg';
const page = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SectionImgDiv imgSrc={paketSectionImg} sectionTitel={'Over mij'} />
      <SectionTekstDiv
        title={'Over mij'}
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim, porro doloribus expedita ipsum, atque nobis necessitatibus id placeat reiciendis minus, temporibus et sint. Animi molestiae quas aperiam expedita impedit?
        Vero nulla neque nemo, at nobis minima enim officiis illo, culpa, rerum modi eos aliquam recusandae nostrum magni omnis id fuga? Pariatur eum possimus saepe fugiat sint reprehenderit, labore quaerat.
        Fuga quae, eius illum aperiam cumque distinctio fugit sit corporis voluptate, iusto dolores quos aliquam saepe nobis deserunt laudantium obcaecati, asperiores ipsa cupiditate id veritatis autem quam rerum voluptatum.`}
      />
    </div>
  );
};

export default page;
