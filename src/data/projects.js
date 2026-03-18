/**
 * Project showcase data. Images live in public/projects/<slug>/
 */
const amchamImages = [
  '/projects/amcham/01.png',
];
const africanBiodigesterImages = Array.from({ length: 16 }, (_, i) => `/projects/african-biodester/${i + 1}.jpg`);
const acreAfricaImages = Array.from({ length: 20 }, (_, i) => `/projects/acre-africa/${String(i + 1).padStart(2, '0')}.jpg`);
const bimaSalamaImages = Array.from({ length: 6 }, (_, i) => `/projects/bima-salama/${String(i + 1).padStart(2, '0')}.jpg`);
const krkAdvocatesImages = ['/projects/krk-advocates/01.png'];
const redssImages = Array.from({ length: 3 }, (_, i) => `/projects/redss/${String(i + 1).padStart(2, '0')}.png`);
const icpacImages = Array.from({ length: 4 }, (_, i) => `/projects/icpac/${String(i + 1).padStart(2, '0')}.png`);
const hivosImages = Array.from({ length: 12 }, (_, i) => `/projects/hivos/${String(i + 1).padStart(2, '0')}.png`);
const movenpickImages = Array.from({ length: 4 }, (_, i) => `/projects/movenpick/${String(i + 1).padStart(2, '0')}.png`);
const sankaraImages = Array.from({ length: 9 }, (_, i) => `/projects/sankara/${String(i + 1).padStart(2, '0')}.png`);

export const PROJECTS = [
  {
    slug: 'amcham',
    title: 'American Chamber of Commerce Kenya',
    description: 'Business summit brand development for AMCHAM Kenya.',
    images: amchamImages,
  },
  {
    slug: 'hivos',
    title: 'Hivos',
    description: 'Knowledge publication and campaign design for Hivos.',
    images: hivosImages,
  },
  {
    slug: 'african-biodigester',
    title: 'African Biodester',
    description: 'Campaign communication and visual identity for biodigester adoption programmes.',
    images: africanBiodigesterImages,
  },
  {
    slug: 'acre-africa',
    title: 'ACRE Africa',
    description: 'Profile and publication design for ACRE Africa.',
    images: acreAfricaImages,
  },  {
    slug: 'bima-salama',
    title: 'Bima Salama',
    description: 'Insurance and brand communication.',
    images: bimaSalamaImages,
  },
  {
    slug: 'krk-advocates',
    title: 'KRK Advocates',
    description: 'Legal and brand communication for KRK Advocates.',
    images: krkAdvocatesImages,
  },
  {
    slug: 'redss',
    title: 'ReDSS',
    description: 'Research and dissemination support for ReDSS.',
    images: redssImages,
  },
  {
    slug: 'icpac',
    title: 'ICPAC',
    description: 'Knowledge and communication design for ICPAC.',
    images: icpacImages,
  },
  {
    slug: 'movenpick',
    title: 'Mövenpick',
    description: 'Brand and experience design for Mövenpick.',
    images: movenpickImages,
  },
  {
    slug: 'sankara',
    title: 'Sankara',
    description: 'Brand and communication design for Sankara.',
    images: sankaraImages,
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}
