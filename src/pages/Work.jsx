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

const CAPABILITY_DETAILS = {
  brand: {
    title: 'Brand Systems',
    desc: 'We design identity and communication systems that give organisations a clear structure for how they appear, communicate, and stay consistent across contexts.',
  },
  campaign: {
    title: 'Campaign Communication',
    desc: 'We develop campaign communication that translates complex issues into clear, compelling messages that reach audiences and generate engagement.',
  },
  publications: {
    title: 'Knowledge Publications',
    desc: 'We design reports, briefs, manuals, and long-form publications that structure complex information into formats people can read, navigate, and use.',
  },
  institutional: {
    title: 'Institutional Platforms',
    desc: 'We build communication environments — from summits to public-facing platforms — that position organisations clearly and hold their presence in shared spaces.',
  },
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
            We structure complex work into communication systems that move across audiences, institutions, and public space.
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
          {activeCapability !== 'all' && CAPABILITY_DETAILS[activeCapability] && (
            <div className="work-capability-panel" aria-label="Selected capability">
              <h2 className="work-capability-panel__title">
                {CAPABILITY_DETAILS[activeCapability].title}
              </h2>
              <p className="work-capability-panel__desc">
                {CAPABILITY_DETAILS[activeCapability].desc}
              </p>
            </div>
          )}

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
