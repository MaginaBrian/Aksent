import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import './Page.css';
import './Work.css';

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Work</h1>
          <p className="page-hero__lead">
            Structured case studies and portfolio. See how we help organisations and brands build knowledge systems, publish with impact, and craft distinctive experiences.
          </p>
        </div>
      </section>
      <section className="page-content work-content">
        <div className="container">
          <div className="work-grid work-grid--projects">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="work-tile work-tile--project"
              >
                <div className="work-tile__media">
                  {project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt=""
                      className="work-tile__img"
                    />
                  ) : (
                    <div className="work-tile__image-placeholder" />
                  )}
                </div>
                <div className="work-tile__body">
                  <h2 className="work-tile__client">{project.title}</h2>
                  <p className="work-tile__desc">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
