import "./ContactMe.css";

import WhatsAppIconBrown from '../../assets/whatsapp-line-brown.svg';
import MailIconBrown from '../../assets/mail-line-brown.svg';
import LinkedinIconBrown from '../../assets/linkedin-box-line-brown.svg';

function ContactMe() {
  return (
    <section id="contact-me" className="contact-me">
      <div className="contact__left">
        <h3 className="contact__left-title" data-aos="fade-right">
          Get in touch.
        </h3>
        <form action="" method="POST" data-aos="fade-right">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            rows={5}
          />
          <div className="contact__form-button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className="contact__right" data-aos="fade-left">
        <div className="contact__right-message">
          <h3>Let's create something amazing together!</h3>
        </div>

        <div className="contact__right-contacts">
          <a href="https://wa.me/60108634158" target="_blank" className="contact__whatsapp">
            <img src={WhatsAppIconBrown} alt="whatsapp" />
            <div className="contact__whatsapp-content">
              <p>Whatsapp:</p>
              <p>+6010 8634158 / +44 7920853951</p>
            </div>
          </a>
          <a href="mailto:asyrfkamal@gmail.com" className="contact__email">
            <img src={MailIconBrown} alt="email" />
            <div className="contact__email-content">
              <p>Email:</p>
              <p>asyrfkamal@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/asyrfkamal" target="_blank" className="contact__linkedin">
            <img src={LinkedinIconBrown} alt="linkedin" />
            <div className="contact__linkedin-content">
              <p>Message me directly on Linkedln</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
