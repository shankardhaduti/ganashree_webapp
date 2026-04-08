
import OurJourney from "./About_components/OurJourney";
import CommitmentCards from "./About_components/CommitmentCards";
import ImpactPage from "./About_components/ImpactPage";

function About() {
  return (
    <section>
      <ImpactPage />
      <OurJourney />
        <div className="relative w-full">
          
                <CommitmentCards />
            </div>
    
    </section>
  );
}

export default About;