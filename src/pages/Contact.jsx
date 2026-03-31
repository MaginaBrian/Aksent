import './Page.css';

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Contact</h1>
          <p className="page-hero__lead">
            Start a conversation to discuss knowledge systems, publishing, or studio work. We’d be glad to hear from you.
          </p>
        </div>
      </section>
      <section className="page-content contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-block">
              <h2 className="contact-block__heading">Phone</h2>
              <a href="tel:+254722311089">+254 722 311 089</a>
            </div>
            <div className="contact-block">
              <h2 className="contact-block__heading">Email</h2>
              <a href="mailto:hello@aksent.co.ke">hello@aksent.co.ke</a>
            </div>
            <div className="contact-block">
              <h2 className="contact-block__heading">Address</h2>
              <p>Jabavu road, Kilimani, Nairobi, Kenya</p>
            </div>
            <div className="contact-block">
              <h2 className="contact-block__heading">Web</h2>
              <a href="https://www.aksent.co.ke" target="_blank" rel="noopener noreferrer">www.aksent.co.ke</a>
            </div>
          </div>
          <div className="prose contact-cta">
            <p>
              For projects, collaborations, or general enquiries, reach out via email or phone. We typically respond within 1–2 business days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
