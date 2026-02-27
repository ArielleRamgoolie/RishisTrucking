import './Services.css';
import truckImg from '../assets/forklift_1.jpg';
import forkliftImg from '../assets/forklift_2.jpg';
// import musicImg from '../assets/container.jpg';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-content">
          <div className="services-intro">
            <p>
              Rishi's Trucking offers comprehensive contract trucking services, forklift rentals, 
              and music equipment rentals. We work with businesses and individuals to provide reliable 
              solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image-container">
                <img 
                  src= {truckImg}
                  alt="Contract trucking" 
                  className="service-image"
                />
              </div>
              <h3>Contract Trucking</h3>
              <p>
                We accept contract work for specified periods, providing dedicated trucking 
                services for your projects. Our flexible contract terms accommodate both 
                short-term and long-term transportation needs with two fully-equipped trucks.
              </p>
            </div>

            <div className="service-card">
              <div className="service-image-container">
                <img 
                  src={forkliftImg}
                  alt="Forklift rental" 
                  className="service-image service-image-forklift"
                />
              </div>
              <h3>Forklift Rentals</h3>
              <p>
                Need material handling equipment? We offer forklift rentals for construction 
                sites, warehouses, and various projects. Our forklifts are well-maintained 
                and ready to help with your lifting and moving needs.
              </p>
            </div>

            {/* <div className="service-card">
              <div className="service-image-container">
                <img 
                  src={musicImg}
                  alt="Music equipment rental" 
                  className="service-image"
                />
              </div>
              <h3>Music Equipment Rentals</h3>
              <p>
                Hosting an event or party? We rent speakers, DJ equipment, and other music 
                gear to make your event a success. Perfect for weddings, parties, corporate 
                events, and live performances.
              </p>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

