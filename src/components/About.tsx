import React from 'react';
import ImpactPage from "./About_components/ImpactPage";
import OurJourney from "./About_components/OurJourney";
import CommitmentCards from "./About_components/CommitmentCards";

function About() {
  return (
    <section id="about">
      <ImpactPage />
      <OurJourney />
      <CommitmentCards />
    </section>
  );
}

export default About;