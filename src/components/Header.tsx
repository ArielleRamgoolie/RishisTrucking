import './Header.css';
import logoImg from '../assets/rishis_trucking_logo_extended_nobg.png';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>
            <img src={logoImg} alt="Rishi's Trucking" className="logo-img" />
          </h1>
          {/* <span className="trini-badge">Trinidad & Tobago Based</span> */}
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('home')} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About Us
          </button>
          <button onClick={() => scrollToSection('services')} className="nav-link">
            Our Services
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

