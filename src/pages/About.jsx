import { Link } from 'react-router-dom';
import './Page.css';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Who we are</h1>
          <p className="page-hero__lead">
            AKSENT was founded in 2009 as a design studio and has evolved into a Knowledge Systems practice rooted in design. We operate at the forefront of the creative industry, marrying creativity and strategy.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="prose">
            <h2>Vision</h2>
            <p>
              AKSENT aspires to be a global linchpin in creative ingenuity and strategic brilliance. We’re not just fantasizing—we’re shaping the future of iconic brands one unforgettable experience at a time.
            </p>
            <h2>Mission</h2>
            <p>
              We don’t just aim to make your brand visible—we strive to make it unforgettable. In an era of transient digital impressions, our narratives and visuals create a powerful, lasting impact, setting you apart as a force to be reckoned with.
            </p>
            <h2>Our journey</h2>
            <p>
              From a fledgling creative start-up to a global practice, we’ve imbued our work with a spirit of innovation. We’re not just service providers—we’re your strategic partners in morphing your brand into an epitome of innovation and distinctiveness.
            </p>
            <blockquote className="pull-quote">
              Design is not just what it looks like and feels like. Design is how it works.
              <cite>— Steve Jobs</cite>
            </blockquote>
            <p>
              <Link to="/contact" className="btn btn--primary">Get in touch</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
