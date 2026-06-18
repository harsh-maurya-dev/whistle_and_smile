# Whistle Aligners – React App

A single-page React application replicating the **Whistle Aligners** brand website, built with **React 19**, **TypeScript**, and **Vite**.

> **Live on**: `http://localhost:8001` (after running locally)
> **Live on**: `https://whistle-and-smile-alpha.vercel.app/` (Deployed)

---

## Table of Contents

- [How to Run](#how-to-run)
- [Environment Variables](#environment-variables)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [APIs Used](#apis-used)
- [Form Submission (Web3Forms)](#form-submission-web3forms)
- [Design Approach](#design-approach)
- [Responsive Behavior](#responsive-behavior)

---

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Add your Web3Forms key to .env
#    VITE_WEB3FORMS_ACCESS_KEY=your_key_here

# 3. Start the dev server
npm run dev
```

The application will be available at the URL shown in the terminal (default: `http://localhost:8000`).

---

## Environment Variables

| Variable                      | Required | Description                                                                 |
| ----------------------------- | -------- | --------------------------------------------------------------------------- |
| `VITE_WEB3FORMS_ACCESS_KEY`   | Yes*     | Access key for the Web3Forms API used in the Booking form. Get one free at [web3forms.com](https://web3forms.com). |

> \*The Booking modal form will show a configuration error if the key is missing. The rest of the site works without it.

---

## Tech Stack

| Technology       | Purpose                                          |
| ---------------- | ------------------------------------------------ |
| React 19         | UI library (functional components + hooks)       |
| TypeScript       | Type safety for component props and state        |
| Vite 8           | Build tool and dev server with HMR               |
| Vanilla CSS      | Component-scoped stylesheets (`.css`)            |
| CSS Modules      | Scoped styles for API-driven sections (`.module.css`) |
| Instrument Sans  | Google Font used for headings and body text       |
| Web3Forms API    | Form submission service for the Booking component |

---

## Project Structure

```
Assignment/
├── public/                     # Static assets (favicon)
├── src/
│   ├── assets/                 # SVG images and illustrations
│   │   ├── f1.svg – f8.svg    # Before/After teeth photos
│   │   ├── choose1.svg – choose4.svg  # Feature illustrations
│   │   ├── lady.svg           # Hero banner image
│   │   ├── product.svg        # Product card image
│   │   ├── doctor.svg         # Doctor section image
│   │   ├── clove.svg          # Clove Dental partner logo
│   │   ├── logo.svg           # Whistle brand logo
│   │   └── icons/             # Additional icons
│   ├── components/
│   │   ├── Banner/            # Header, offer bar, hero section
│   │   ├── ScanForm/          # Lead capture form with validation
│   │   ├── PromoCard/         # Clove Dental promo + marquee bar
│   │   ├── ProductDetails/    # Product description + pricing card
│   │   ├── ProductCard/       # Aligner pricing card
│   │   ├── ResultsShowcase/   # Before/After results (f1–f8 paired)
│   │   ├── WhyUs/             # Feature cards grid (choose1–choose4)
│   │   ├── WhyUsCard/         # Individual feature card
│   │   ├── Apart/             # Comparison table (Whistle vs Others)
│   │   ├── Process/           # 4-step timeline + YouTube video
│   │   ├── OurDoctor/         # Doctor-led treatment section
│   │   ├── HappySmilers/      # Customer cards (API-driven)
│   │   ├── FAQSection/        # Accordion FAQ (API-driven)
│   │   ├── Booking/           # CTA bar + modal form (Web3Forms)
│   │   └── Footer/            # Links, contact, social, legal
│   ├── apiServices/           # API service utilities
│   ├── App.jsx                # Root component (section layout)
│   ├── App.css                # App-level styles
│   ├── index.css              # Global CSS variables and resets
│   └── main.jsx               # React DOM entry point
├── .env                       # Environment variables
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── vite.config.ts             # Vite configuration
└── tsconfig.json              # TypeScript configuration
```

---

## Component Architecture

The application is composed of **13 sections** rendered sequentially in `App.jsx`:

| #  | Component           | Type     | Description                                                                 |
| -- | ------------------- | -------- | --------------------------------------------------------------------------- |
| 1  | `Banner`            | Static   | Navbar with logo & call button, offer price bar, and hero section with CTA  |
| 2  | `ScanForm`          | Static   | Lead capture form with radio buttons, floating labels, and input validation |
| 3  | `PromoCard`         | Static   | Clove Dental partnership card + infinite-scroll marquee benefits bar        |
| 4  | `ProductDetails`    | Static   | Product description text + `ProductCard` pricing component                  |
| 5  | `ResultsShowcase`   | Static   | 4 cards with paired Before/After teeth images (f1–f8), concern labels       |
| 6  | `WhyUs`             | Static   | 4-column grid of feature cards with vector illustrations (choose1–choose4)  |
| 7  | `Apart`             | Static   | Comparison table (Whistle vs Other Brands) with expandable rows             |
| 8  | `Process`           | Static   | 4-step vertical timeline + embedded YouTube video player                    |
| 9  | `OurDoctor`         | Static   | Doctor image + description + "Get a Callback" CTA (scrolls to ScanForm)    |
| 10 | `HappySmilers`      | API      | Customer portrait cards fetched from `dummyjson.com/users`                  |
| 11 | `FAQSection`        | API      | Accordion FAQ items fetched from `jsonplaceholder.typicode.com/posts`       |
| 12 | `Booking`           | API      | CTA bar + modal contact form submitting to Web3Forms                        |
| 13 | `Footer`            | Static   | Quick links, contact info, social media icons, legal links                  |

---

## APIs Used

| Section          | Endpoint                                             | Purpose                                                                           |
| ---------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| Happy Smilers    | `https://dummyjson.com/users?limit=5`                | Fetches user profiles; portrait images represent happy customers                  |
| FAQ Accordion    | `https://jsonplaceholder.typicode.com/posts?_limit=5` | Fetches text posts; titles serve as questions, bodies as answers                  |
| Booking Form     | `https://api.web3forms.com/submit`                   | Submits booking form data (name, phone, city, date, etc.) via POST                |

All API-driven components implement:
- **Loading states**: Skeleton placeholders while data is being fetched
- **Error states**: User-friendly error messages with retry guidance
- **Data mapping**: API response fields are transformed to fit the UI context

---

## Form Submission (Web3Forms)

The **Booking** component modal form submits to the [Web3Forms](https://web3forms.com) API:

1. User clicks "Book scan at Home" or "Book scan at Clinic" → modal opens.
2. User fills in: Name, Phone (+91), City, Pincode/Clinic, Preferred Date.
3. Client-side validation runs (10-digit phone, 6-digit pincode, required fields).
4. On submit, a `POST` request is sent to `https://api.web3forms.com/submit` with JSON payload.
5. On success → "Booking Confirmed!" screen. On error → inline error banner.

**Setup**: Add your access key to `.env`:
```
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

---

## Design Approach

- **Functional components** with React hooks (`useState`, `useEffect`) for state and data fetching
- **CSS scoping strategy**:
  - Standard `.css` files for static components (imported directly)
  - CSS Modules (`.module.css`) for API-driven components to avoid class name collisions
- **Typography**: Google Font `Instrument Sans` (weights 400–800) for all headings and body
- **Color palette**: Light blue backgrounds (`#f0f7ff`, `#f3f6fc`), brand purple accent (`#8F62DF`), dark text (`#1e1b29`)
- **Hover interactions**: Cards lift with `translateY` and enhanced `box-shadow` on hover
- **Smooth scroll**: "Get a Callback" and "Book a Free Scan" buttons use `scrollIntoView({ behavior: 'smooth' })`

---

## Responsive Behavior

All components are fully responsive with breakpoints at:

| Breakpoint    | Layout Behavior                                                   |
| ------------- | ----------------------------------------------------------------- |
| `> 1024px`    | Desktop: multi-column grids, side-by-side layouts                 |
| `768–1024px`  | Tablet: 2-column grids, reduced padding and font sizes            |
| `< 768px`     | Mobile: single-column stacks, horizontal swipe carousels with CSS scroll-snap |
| `< 480px`     | Small mobile: further reduced card widths and font sizes          |

Key mobile features:
- **Horizontal swipe carousels** with `scroll-snap-type: x mandatory` for Results, WhyUs, and HappySmilers cards
- **Hidden scrollbars** across all browsers (webkit, Firefox, IE/Edge)
- **Full-bleed sections** with zero horizontal padding for edge-to-edge scrolling
