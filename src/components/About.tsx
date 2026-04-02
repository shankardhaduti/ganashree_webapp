import React from 'react';

import OurJourney from "./About_components/OurJourney";
import CommitmentCards from "./About_components/CommitmentCards";
import ImpactPage from './About_components/ImpactPage';

function About() {
  return (
    <section id="about">
      <ImpactPage/>
      <OurJourney />
      <CommitmentCards />
    </section>
  );
}

export default About;