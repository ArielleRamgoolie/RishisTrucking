import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Rishi's Trucking 🇹🇹. All rights reserved.</p>
        <p>Trinidad & Tobago Based • Professional Contract Trucking Services</p>
      </div>
    </footer>
  );
};

export default Footer;

