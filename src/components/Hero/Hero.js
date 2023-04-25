import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey I'm <br />
        Shaquib Siddique
      </SectionTitle>
      <SectionText>
      I'm front-end web developer.
      </SectionText>
      <Button onClick={() =>  window.location = "https://google.com"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;