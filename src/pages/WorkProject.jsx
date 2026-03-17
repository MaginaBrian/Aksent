import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import './Page.css';
import './Work.css';

export default function WorkProject() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="page-content">
        <div className="container">
          <p>Project not found.</p>
          <Link to="/work">Back to Work</Link>
        </div>
      </section>
    );
  }

  const hasImages = project.images && project.images.length > 0;

  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container">
          <Link to="/work" className="work-project__back">
            ← All projects
          </Link>
          <h1 className="page-hero__title">{project.title}</h1>
          {project.description && (
            <p className="page-hero__lead">{project.description}</p>
          )}
        </div>
      </section>
      <section className="page-content work-project-content">
        <div className="container">
          {!hasImages ? (
            <div className="work-project__empty">
              <p>No images for this project yet.</p>
              <Link to="/work" className="btn btn--primary">Back to Work</Link>
            </div>
          ) : (
            <div className="work-scroll-gallery">
              {project.images.map((src, i) => (
                <div key={i} className="work-scroll-gallery__item">
                  <img src={src} alt="" className="work-scroll-gallery__img" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
