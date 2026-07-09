# The Samson Foundation — Website

> **Motto:** *"Move to help the less privileged."*

The official website of **The Samson Foundation**, a non-profit, humanitarian, and community-development organization based in Taraba State, Nigeria.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for subtle scroll animations
- [lucide-react](https://lucide.dev/) for icons
- Fully static output — auto-deploys to GitHub Pages on every `git push`

## Getting started (developers)

```bash
npm install
npm run dev        # start the dev server at http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Project structure

```
app/                Pages (App Router)
  page.tsx          Home
  about/            About Us + Vision
  our-work/         The 7 program areas + targets
  impact/           Impact stats + photo gallery
  donate/           Giving page (details TODO — see below)
  get-involved/     Volunteer / partner / church / donor pathways
  contact/          Contact details, form, map
  sitemap.ts        sitemap.xml
  robots.ts         robots.txt
components/         Reusable UI (Navbar, Footer, cards, gallery, form…)
lib/                All editable content lives here (see guide below)
public/images/      Optimised photos (brand/ + impact/ by theme)
scripts/            prepare-images.mjs — one-off photo import pipeline
```

---

## Editing the site (no coding experience needed)

All the words and photos live in a few easy-to-find files. After any change,
someone with access can run `npm run build` (or just push to GitHub if the
site is connected to Vercel) and the site updates.

### 1. Change contact details, phones, email, address

Open **`lib/site.ts`**. Everything is labelled:

```ts
email: "thesamsonfoundation@gmail.com",
phones: [
  { display: "0706 267 2205", tel: "+2347062672205" },
  ...
```

Edit the text between the quotes and save. The navbar, footer, contact page,
donate page, and structured data all update automatically.

### 2. Edit the About / Vision text

Open **`app/about/page.tsx`**. The paragraphs are plain text inside `<p> … </p>`
tags — edit the words, keep the tags.

### 3. Edit a program description

Open **`lib/programs.ts`**. Each of the 7 programs is a block like:

```ts
{
  title: "Youth Empowerment",
  short: "…one-line summary shown on the homepage…",
  description: "…full text shown on the Our Work page…",
  ...
}
```

### 4. Add impact photos

1. Put the photo in a theme folder under `public/images/impact/`
   (e.g. `public/images/impact/relief/new-photo.jpg`). Use lowercase
   names with hyphens, no spaces.
2. Open **`lib/gallery.ts`**, find the matching theme group, and copy one
   of the existing photo blocks:

   ```ts
   {
     src: "/images/impact/relief/new-photo.jpg",
     alt: "A factual description of what is in the photo (for screen readers).",
     caption: "A short, dignified caption shown under the photo.",
     width: 2000,   // the photo's pixel width
     height: 1506,  // the photo's pixel height
   },
   ```

   Please keep captions respectful — describe people with dignity, never pity.

### 5. Add bank account / online giving details (when ready)

Open **`app/donate/page.tsx`** and search for `TODO(foundation)` — there are
two marked spots:

- **Bank transfer block** — replace the placeholder paragraph with the bank
  name, account name, and account number.
- **Give online block** — paste the Paystack / Flutterwave payment link or
  button once the account is set up.

Also see `BRAND_NOTES.md` for the full list of information still needed.

### 6. Update the map pin

Open **`app/contact/page.tsx`**, find `TODO(foundation)`, and replace the
map query with the exact Google Maps link/plus-code for the office.

### 7. Set the real domain

When the Foundation registers a domain, change `url` in **`lib/site.ts`**
so the sitemap, social-share cards, and structured data use it.

---

## Deploying

This repo auto-deploys to **GitHub Pages**. The live site is:

**https://gideon-george.github.io/samson-foundation/**

How it works:

1. The workflow at `.github/workflows/deploy.yml` runs on every push to `main`.
2. It builds the site as static files (`output: "export"` in `next.config.mjs`)
   and publishes them to GitHub Pages.
3. So to update the live site, just commit and `git push` — no other steps.

One-time setup (already done, listed here for reference): in the repo's
**Settings → Pages**, "Build and deployment → Source" is set to **GitHub Actions**.

> The site is served from a sub-path (`/samson-fo