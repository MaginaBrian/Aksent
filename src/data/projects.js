/**
 * Project showcase data. Images live in public/projects/<slug>/
 */
const africanBiodigesterImages = Array.from({ length: 12 }, (_, i) => `/projects/african-biodigester/${i + 1}.jpg`);
const acreAfricaImages = Array.from({ length: 20 }, (_, i) => `/projects/acre-africa/${String(i + 1).padStart(2, '0')}.jpg`);
const amtechLogosImages = Array.from({ length: 18 }, (_, i) => `/projects/amtech-logos/${String(i + 1).padStart(2, '0')}.jpg`);
const bimaSalamaImages = Array.from({ length: 6 }, (_, i) => `/projects/bima-salama/${String(i + 1).padStart(2, '0')}.jpg`);
const abcKFarmersImages = Array.from({ length: 4 }, (_, i) => `/projects/abc-k-farmers/${String(i + 1).padStart(2, '0')}.jpg`);
const krkAdvocatesImages = ['/projects/krk-advocates/01.png'];
const redssImages = Array.from({ length: 3 }, (_, i) => `/projects/redss/${String(i + 1).padStart(2, '0')}.png`);
const icpacImages = Array.from({ length: 4 }, (_, i) => `/projects/icpac/${String(i + 1).padStart(2, '0')}.png`);

export const PROJECTS = [
  {
    slug: 'african-biodigester',
    title: 'African Biodigester',
    description: 'Campaign communication and visual identity for biodigester adoption programmes.',
    images: africanBiodigesterImages,
  },
  {
    slug: 'acre-africa',
    title: 'Acre Africa',
    description: 'Profile and publication design for Acre Africa.',
    images: acreAfricaImages,
  },
  {
    slug: 'amtech-logos',
    title: 'Amtech',
    description: 'Product logo and brand identity system.',
    images: amtechLogosImages,
  },
  {
    slug: 'bima-salama',
    title: 'Bima Salama',
    description: 'Insurance and brand communication.',
    images: bimaSalamaImages,
  },
  {
    slug: 'abc-k-farmers',
    title: 'ABC K Farmers',
    description: 'Communication and publication design for ABC K Farmers.',
    images: abcKFarmersImages,
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
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}
