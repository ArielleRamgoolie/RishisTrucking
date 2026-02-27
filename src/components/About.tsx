import './About.css';
import flatbedTruck from '../assets/flatbedTruck.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-image-section">
            <img src={flatbedTruck} alt="Trucking fleet" className="about-image" />
          </div>
          <div className="about-text">
            <p>
              Welcome to Rishi's Trucking, a trusted name in contract trucking services, forklift rentals, 
              and music equipment rentals. With years of experience in the transportation and equipment 
              rental industry, we pride ourselves on delivering reliable, efficient, and professional solutions.
            </p>
            <p>
              Our company operates with two fully-equipped trucks, allowing us to take on contract work 
              for various periods and project scopes. In addition to trucking services, we offer forklift 
              rentals for your material handling needs and music equipment rentals including speakers, 
              DJ equipment, and more. Whether you need short-term or extended services, we're committed 
              to meeting your needs with dedication and professionalism.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <h3>Experienced Team</h3>
                <p>Years of expertise in trucking and logistics</p>
              </div>
              <div className="highlight">
                <h3>Reliable Fleet</h3>
                <p>Two well-maintained trucks ready for service</p>
              </div>
              <div className="highlight">
                <h3>Equipment Rentals</h3>
                <p>Forklifts and music equipment available for rent</p>
              </div>
              <div className="highlight">
                <h3>Flexible Contracts</h3>
                <p>Customized solutions for your project timeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

