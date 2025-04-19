import Image from "next/image";
import "./AboutHaick.css";

const AboutHaick = () => {
  return (
    <div className="haick-container">
      <h2 className="haick-title">About Haick</h2>

      <div className="haick-content">
        <div className="haick-text">
          <p>
            <strong>HAICK</strong>, an event organized by the School of AI Algiers (SOAI), is a notable datathon in Algeria. 
            It brings together local companies and researchers who present real-world problems along with relevant data, 
            inviting Algerian data scientists and AI enthusiasts to develop and compete with their solutions. 
            The first HAICK event was held in 2022, followed by a second edition in 2023, 
            which included a series of workshops.
          </p>
        </div>

        <div className="haick-images">
        <div className="img-back">
  <Image
    src="/bg-remove.png"
    alt="Haick Event Back"
    width={170}
    height={170}
    className="haick-image"
  />
</div>
<div className="img-front">
  <Image
    src="/bg-remove.png"
    alt="Haick Event Front"
    width={170}
    height={170}
    className="haick-image"
  />
</div>
</div>



      </div>

      <div className="haick-tags">
        <span>+ 2 Editions</span>
        <span>AI</span>
        <span>Network</span>
        <span>Data Sciences</span>
        <span>Problem Solving</span>
        <span>Only Good Vibes</span>
      </div>
    </div>
  );
};

export default AboutHaick;
