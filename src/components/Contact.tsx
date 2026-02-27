import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              Interested in our trucking services, forklift rentals, or music equipment rentals? 
              We'd love to hear from you. Get in touch to discuss your needs and learn how we can help 
              with your project or event.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>Phone</h3>
                <p>Call us to discuss your contract needs</p>
                <a href="https://wa.me/18687777777" className="contact-link contact-link-whatsapp" aria-label="Open WhatsApp" title="Open WhatsApp">1-868-777-7777</a>
                {/* <p className="contact-value" >1-868-777-777</p> */}
              </div>

              <div className="contact-item">
                <h3>Email</h3>
                <p>Send us an email for inquiries</p>
                <a  href="mailto:rishi.ramgoolie@gmail.com?subject=Rental%20Inquiry" 
                    aria-label="Email Rishi's Trucking" 
                    className='contact-link'
                    title="Email Rishi's Trucking"
                >
                    rishi.ramgoolie@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <h3>Services Available</h3>
                <p>We're currently accepting new contracts and rentals</p>
                <p className="contact-value">Trucking • Forklifts • Music Equipment</p>
              </div>
            </div>

            <div className="contact-cta">
              <p>
                Ready to discuss your trucking, forklift rental, or music equipment needs? 
                Reach out today and let's talk about how Rishi's Trucking can support your project or event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

