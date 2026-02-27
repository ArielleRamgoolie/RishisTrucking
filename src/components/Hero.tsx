import './Hero.css';
import heroPhoto from '../assets/heroPhoto.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroPhoto})` }}>
      <div className="hero-image-overlay"></div>
      <div className="hero-content">
        <div className="trini-flag-header">
          <span className="flag-icon">🇹🇹</span>
        </div>
        <h1 className="hero-title">Rishi's Trucking</h1>
        <p className="hero-location">Trinidad & Tobago Based</p>
        <p className="hero-subtitle">Trucking • Forklift Rentals • Music Equipment Rentals</p>
        <p className="hero-description">
          Professional contract trucking services, forklift rentals, and music equipment rentals including speakers and DJ equipment. Two fully-equipped trucks ready for your contract work needs.
        </p>
      </div>
    </section>
  );
};

export default Hero;

