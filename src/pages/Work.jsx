import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import './Page.css';
import './Work.css';

const CAPABILITIES = [
  { id: 'brand', label: 'Brand Systems' },
  { id: 'campaign', label: 'Campaign Communication' },
  { id: 'publications', label: 'Knowledge Publications' },
  { id: 'institutional', label: 'Institutional Platforms' },
];

function getProjectCapabilities(project) {
  const text = `${project.title ?? ''} ${project.description ?? ''}`.toLowerCase();
  const caps = new Set();

  if (text.includes('campaign')) caps.add('campaign');

  if (text.includes('publication') || text.includes('publish') || text.includes('profile')) {
    caps.add('publications');
  }

  if (text.includes('brand') || text.includes('identity') || text.includes('experience')) {
    caps.add('brand');
  }

  // Institutional platforms are typically knowledge/research/dissemination work.
  // Avoid tagging "knowledge publication" as institutional as it belongs in publications.
  if (
    text.includes('research') ||
    text.includes('dissemination') ||
    text.includes('platform') ||
    (text.includes('knowledge') && !text.includes('publication'))
  ) {
    caps.add('institutional');
  }

  return Array.from(caps);
}

const CAPABILITY_LABELS = {
  campaign: 'CAMPAIGN COMMUNICATION',
  publications: 'KNOWLEDGE PUBLICATION',
  brand: 'BRAND SYSTEM',
  institutional: 'INSTITUTIONAL PLATFORM',
};

function getPrimaryCapability(capabilities) {
  const priority = ['campaign', 'publications', 'brand', 'institutional'];
  return priority.find((id) => capabilities.includes(id)) ?? null;
}

export default function Work() {
  const [activeCapability, setActiveCapability] = useState('all');

  const projectsWithPrimaryCapabilities = useMemo(() => {
    return PROJECTS.map((project) => {
      const derivedCapabilities = getProjectCapabilities(project);
      const derivedPrimary = getPrimaryCapability(derivedCapabilities);

      return {
        project,
        primaryCapability: project.primaryCapability ?? derivedPrimary ?? 'campaign',
      };
    });
  }, []);

  const filteredProjectsWithPrimary = useMemo(() => {
    if (activeCapability === 'all') {
      return projectsWithPrimaryCapabilities;
    }

    return projectsWithPrimaryCapabilities.filter((x) => x.primaryCapability === activeCapability);
  }, [activeCapability, projectsWithPrimaryCapabilities]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Our Work</h1>
          <p className="page-hero__lead">
            Work that translates complexity into clarity.
          </p>
          <div className="work-filters" aria-label="Filter projects by capability">
            {CAPABILITIES.map((cap) => (
              <span
                key={cap.id}
                role="button"
                tabIndex={0}
                className={`work-filters__link ${activeCapability === cap.id ? 'is-active' : ''}`}
                aria-current={activeCapability === cap.id ? 'page' : undefined}
                onClick={() => setActiveCapability(cap.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveCapability(cap.id);
                }}
              >
                {cap.label}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="page-content work-content">
        <div className="container">
          <div className="work-grid work-grid--projects">
            {filteredProjectsWithPrimary.map(({ project, primaryCapability }) => (
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
                  <p className="work-tile__category">{CAPABILITY_LABELS[primaryCapability]}</p>
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
