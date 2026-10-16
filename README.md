# S.S. Agency — Security Services & Manpower Solutions Website

A complete, production-ready, corporate website for **S.S. AGENCY — SECURITY SERVICES**, based in Sambalpur, Odisha, India.

---

## 🛡️ Project Overview

- **Business Name:** S.S. AGENCY
- **Category:** Security Services and Manpower Solutions
- **Primary Tagline:** *Your Safety, Our Priority*
- **Secondary Tagline:** *Your Trusted Security Partner*
- **Headquarters:** Ambira Nagar, Khata No. 207/697, Plot No. 872/1355, Saraswati Vihar, Ainthapali, Sambalpur – 768006, Odisha, India.
- **Phone:** `+91 9853692650`
- **Emails:** `ssagency.sbpodi@gmail.com` | `sudam.pandasbp@gmail.com`
- **Main Services:**
  1. Security Guard Services
  2. Cook Services
  3. Cleaning Staff Services
  4. Four-Wheeler Driver Services

---

## 🚀 Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript with strict typing
- **Styling:** Tailwind CSS with custom metallic gold & deep navy design tokens
- **Animations:** Motion / Framer Motion with `prefers-reduced-motion` support
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod
- **Toasts:** Sonner
- **Image Optimization:** Next.js Image with responsive sizes and lazy loading
- **SEO & Schema:** Metadata API, Open Graph, Twitter cards, dynamic XML `sitemap.ts`, `robots.ts`, Schema.org `SecurityService` LocalBusiness JSON-LD

---

## 📁 Project Folder Structure

```
ssagency/
├── public/
│   ├── favicon.svg              # Golden shield emblem favicon
│   └── images/
│       ├── hero/
│       │   └── hero-patrol-fleet.jpg          # 9-vehicle fleet formation
│       ├── fleet/
│       │   ├── fleet-formation-patrol.jpg     # Formation patrol squad
│       │   ├── fleet-trio-patrol.jpg          # 3-vehicle lineup
│       │   ├── vehicle-patrol-6102.jpg        # Bolero unit OD 23 R 6102
│       │   └── vehicle-patrol-5308.jpg        # Bolero unit OD 15 X 5308
│       ├── about/
│       │   ├── company-team-lineup.jpg        # Official team & vehicle banner
│       │   ├── supervisor-vehicle-patrol.jpg  # Supervisor on duty
│       │   └── officer-inspection-vehicle.jpg # Officer inspection
│       └── branding/
│           └── ss-agency-official-banner.jpg  # Original agency banner
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Global root layout, fonts, JSON-LD, Navbar, Footer
│   │   ├── globals.css          # Design tokens, gradients, scrollbars, glassmorphism
│   │   ├── page.tsx             # 12-section cinematic homepage
│   │   ├── about/page.tsx       # About Us with Mission, Vision & Values
│   │   ├── services/
│   │   │   ├── page.tsx         # All services overview
│   │   │   ├── security-guards/page.tsx # Dedicated Security Guard Services page
│   │   │   ├── cook-services/page.tsx   # Dedicated Cook Services page
│   │   │   ├── cleaning-staff/page.tsx  # Dedicated Cleaning Staff page
│   │   │   └── driver-services/page.tsx # Dedicated Driver Services page
│   │   ├── fleet/page.tsx       # Vehicle gallery with filtering & Lightbox
│   │   ├── gallery/page.tsx     # Photo gallery with Lightbox
│   │   ├── contact/page.tsx     # Contact info, Google Maps, validated form
│   │   ├── request-quote/page.tsx # Detailed quote form + WhatsApp prefill
│   │   ├── privacy-policy/page.tsx # Privacy and data policy
│   │   ├── api/
│   │   │   ├── contact/route.ts # Server-side contact validation & submission
│   │   │   └── quote/route.ts   # Server-side quote validation & processing
│   │   ├── sitemap.ts           # Dynamic XML sitemap
│   │   ├── robots.ts            # Robots.txt configuration
│   │   ├── loading.tsx          # Global loading spinner
│   │   ├── error.tsx            # Global error boundary
│   │   └── not-found.tsx        # Branded 404 page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky dynamic header with mobile drawer
│   │   │   ├── Footer.tsx       # 4-column corporate footer
│   │   │   └── PageHero.tsx     # Inner page hero with breadcrumbs
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── VehicleShowcaseSection.tsx
│   │   │   ├── AboutSplitSection.tsx
│   │   │   ├── WhyChooseSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── IndustriesSection.tsx
│   │   │   ├── GalleryPreviewSection.tsx
│   │   │   └── ContactCTASection.tsx
│   │   ├── services/
│   │   │   └── ServiceDetailPage.tsx # Reusable detailed service template
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx  # Zod validated contact form
│   │   │   └── QuoteForm.tsx    # Zod validated quote form with WhatsApp button
│   │   ├── ui/
│   │   │   ├── BrandLogo.tsx    # Scalable vector logo (shield + star)
│   │   │   ├── WhatsAppButton.tsx # Floating bottom-right WhatsApp button
│   │   │   ├── BackToTop.tsx    # Floating back-to-top button
│   │   │   └── Lightbox.tsx     # Fullscreen photo viewer with keyboard nav
│   │   └── animations/
│   │       └── MotionWrapper.tsx # Reusable Framer Motion components
│   ├── data/
│   │   ├── company.ts           # Mission, Vision, Values, Why Choose Us, Timeline
│   │   ├── services.ts          # Complete service scopes, use cases, FAQs
│   │   ├── fleet.ts             # Real vehicle specifications & plate numbers
│   │   └── gallery.ts           # Categorized photo records
│   ├── lib/
│   │   ├── constants.ts         # Centralized company info & links
│   │   ├── utils.ts             # WhatsApp link builder, cn helper
│   │   └── validations.ts       # Zod schemas for contact and quote forms
│   └── types/
│       └── index.ts             # Strict TypeScript definitions
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Installation & Local Development

### 1. Prerequisites
- Node.js 18.18+ or 20+ (tested on Node 24)
- npm or pnpm / yarn

### 2. Setup
```bash
# Clone or navigate to the repository
cd ssagency

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### 3. Run Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Testing

```bash
# Run Next.js production build
npm run build

# Start production server
npm run start
```

---

## 🌐 Deployment Instructions

### Option 1: Deploy on Vercel (Recommended)
1. Push this repository to GitHub/GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `ssagency` repository.
4. Set the Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com`
   - `RESEND_API_KEY`: *(Optional for automated transactional emails)*
5. Click **"Deploy"**. Vercel will build and assign SSL automatically.

### Option 2: Deploy on Node.js-Compatible VPS (Ubuntu/Debian)
```bash
# 1. Install Node.js, PM2, and Nginx on server
sudo apt update && sudo apt install -y nodejs npm nginx
sudo npm install -g pm2

# 2. Clone repository & install dependencies
git clone <repo-url> /var/www/ssagency
cd /var/www/ssagency
npm install
npm run build

# 3. Start with PM2
pm2 start npm --name "ssagency" -- start
pm2 save
pm2 startup

# 4. Configure Nginx Reverse Proxy
# Point your domain in /etc/nginx/sites-available/ssagency to http://localhost:3000
# Install SSL using certbot
sudo certbot --nginx -d your-domain.com
```

---

## 📋 Missing Business Details Requiring Client Confirmation

The website has been strictly built with **only verified facts** from the user's brief and original photographs. The following optional details can be confirmed by the business owner and added into `src/lib/constants.ts`:

1. **Official Registered Domain:** Update `NEXT_PUBLIC_SITE_URL` once the domain is purchased (e.g., `https://ssagencysecurity.com` or `https://ssagency.in`).
2. **Business Registration / Licenses:** PSARA (Private Security Agencies Regulation Act) license number, GSTIN, or MSME registration (if desired on the footer/about page).
3. **Office Hours:** Official open hours for visitors to Saraswati Vihar office.
4. **Social Media Profiles:** Facebook page, LinkedIn, or Instagram accounts (if active).
5. **Transactional Email Service:** Resend API key or SMTP credentials in `.env.local` for direct inbox notifications when enquiries are submitted.
