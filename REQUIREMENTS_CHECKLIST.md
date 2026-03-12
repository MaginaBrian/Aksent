# AKSENT Website — Requirements Checklist

## ✅ Met requirements

### Site architecture & navigation
| Requirement | Status |
|-------------|--------|
| Top-level nav: Home, Work, About, Contact | ✅ Done |
| No Systems / Forum / Studio in nav (for now) | ✅ Done |
| Clean, minimal navigation | ✅ Done |

### Homepage
| Requirement | Status |
|-------------|--------|
| Hero: “Clarity is structure.” + “Knowledge systems, rooted in design.” | ✅ Done |
| Second line lighter weight (hierarchy) | ✅ Done |
| No “AKSENT” eyebrow above headline | ✅ Done |
| Supporting line (AKSENT translates complex work…) | ✅ Done |
| Buttons: “View our work” + “Start a conversation” | ✅ Done |
| Selected Work section with 4 project tiles | ✅ Done |
| What We Do: Lime Moss background, white text | ✅ Done |
| What We Do: categories linked to Work page | ✅ Done |
| “Design is structure.” section (no Vignelli quote) | ✅ Done |
| Trusted By section with client logos | ✅ Done (5 image logos) |
| CTA section at bottom | ✅ Done |

### Brand & visual
| Requirement | Status |
|-------------|--------|
| Primary: Lime Moss #A7B841 | ✅ Done |
| Neutral background: Platinum #EAEFEF | ✅ Done |
| Accent: Amethyst #B317B4 (buttons, link hover) | ✅ Done |
| Text: Charcoal Ink #1F2A28 | ✅ Done |
| Logo in use (lime AKSENT Creative Services) | ✅ Done |
| Header: Platinum/white, no lime box around logo | ✅ Done |
| Favicon: A in lime circle | ✅ Done |
| Favicon used where full logo doesn’t fit (small viewports) | ✅ Done |
| Primary buttons: amethyst, white text, darker hover | ✅ Done |
| Secondary button: outline style | ✅ Done |

### About page
| Requirement | Status |
|-------------|--------|
| Founded 2009, evolved toward knowledge communication | ✅ Done |
| Today AKSENT works with research orgs, foundations, businesses | ✅ Done |
| Experience: 15+ years, Global network, Cross-sector | ✅ Done |
| “Start a conversation” CTA | ✅ Done |

### Contact & footer
| Requirement | Status |
|-------------|--------|
| Phone: +254 722 311 089 | ✅ Done |
| Email: hello@aksent.co.ke | ✅ Done |
| Address: Jabavu Road, PCEA Flats, Kilimani, Nairobi, Kenya | ✅ Done |
| Web: www.aksent.co.ke | ✅ Done |
| Footer: AKSENT + “Knowledge Systems | Strategic Communication | Design Intelligence” | ✅ Done |
| Footer background: Lime Moss | ✅ Done |
| Footer text: white; link hover: amethyst | ✅ Done |
| All “Get in touch” → “Start a conversation” | ✅ Done |

### Technical
| Requirement | Status |
|-------------|--------|
| Mobile-responsive layout | ✅ Done |
| Fast build (Vite), production-ready output | ✅ Done |
| SEO: title + meta description in index.html | ✅ Done |

---

## ⚠️ Partially met / needs content or assets

### 1. Selected Work — project images
- **Status:** Tiles exist but use **placeholder blocks** (no images).
- **Required:** One image per project (or per case study) for:
  - Africa Bioenergy Programs  
  - WomanKind Worldwide  
  - Hivos  
  - American Chamber of Commerce Kenya  
- **Action:** Upload **portfolio/project images** (JPG or PNG). They will be wired into the Selected Work tiles and (if you add them) case study pages.

### 2. Trusted By — 3 client logos only as PDF
- **Status:** Five logos show as images. Three are in the folder only as **PDFs** and cannot be shown in the “Trusted by” grid:
  - Hivos Logo.pdf  
  - Icpac.pdf  
  - LV_Logo.pdf  
- **Action:** Export each as **PNG or JPG** and add to `public/client-logos/`. Then they can be added to the Trusted By list in code.

### 3. Work page — case studies & structure
- **Status:** Work page has a short intro and one CTA; no case study listings or filters.
- **Action (optional):**  
  - If you want **case study pages**: provide content (and optional images) per project so we can add templates and links.  
  - If you want **category filtering** (campaign-communication, research-publication, etc.): we can hook the existing `/work#...` links to filters once project data exists.

---

## ❌ Not yet implemented (brief / future)

| Item | Notes |
|------|--------|
| **Newsletter** | Brief: “Integrate newsletter capability.” No signup form or provider (e.g. Mailchimp) yet. Need decision on provider and where the form should live (e.g. footer, Contact). |
| **CMS** | Brief assumed “WordPress or equivalent.” Current site is static (Vite/React). Adding a CMS would mean either a headless CMS + API or moving to WordPress; not in codebase yet. |
| **Case study / article templates** | Brief: “Page templates for Case Studies, Articles/Essays, Studio Documentation.” Not built as separate template types yet; can be added once you have sample content. |
| **Hosting, backups, admin** | Handover deliverables; not in repo. To be done at deploy/hosting stage. |
| **Backend / handover documentation** | Brief: “Clear backend documentation upon handover.” README is generic. A short “Site management” or “Handover” doc can be added when you lock hosting and CMS. |

---

## Summary: what to upload next

1. **Portfolio images** for the four Selected Work projects (and any extra case studies you want) so we can replace placeholders and use them on Work/case study pages.  
2. **Hivos, Icpac, LV** logos as **PNG or JPG** (export from the existing PDFs) if you want them in the Trusted By section.  
3. (Optional) **Case study text** (and extra images) for the Work page or future case study pages.

No further documents are strictly required to meet the **current** design and content requirements; the gaps above are either **asset** (images/logos) or **future scope** (newsletter, CMS, templates, hosting/docs).
