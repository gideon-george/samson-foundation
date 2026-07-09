# Brand Notes — The Samson Foundation website

## Source material

All copy comes from the Foundation's own brief (`the foundation.docx`,
supplied in the raw asset folder) and the photos are the Foundation's own
field photographs. Raw assets are kept **outside** the repository
(`brand-assets/` is git-ignored); the optimised, renamed versions live in
`public/images/`.

- **Motto:** "Move to help the less privileged." (brief spelling
  "less privilege" normalised to "less privileged" for the site)
- **Impact figure:** more than **2,000 lives** — the only statistic used
  anywhere on the site, exactly as given in the brief.
- **Programs:** the 7 areas and their descriptions are reproduced faithfully
  from the brief (Bible Translation & Language Development, Youth
  Empowerment, Women & Widow Empowerment, Education Support, Humanitarian &
  Healthcare Assistance, Community Development, Advocacy & Civic Engagement).
- **Targets:** Education; Bible translation; Community Service; Health
  Interventions; strategic training in technical vocational education;
  Women and youth empowerment; Civic Engagement.
- **Contact:** No. 26 NC Ali, Lassandi, opposite Jolly Nyame Stadium,
  Taraba State · thesamsonfoundation@gmail.com · 07062672205, 09038425082.

## Visual identity

- **Logo:** the supplied circular black-and-white seal (Africa silhouette +
  cross + motto). Used as-is in the navbar; presented inside a white circular
  badge on dark sections and in the footer so the emblem is never distorted
  or recoloured. Favicon and social card are derived from it.
- **Palette** (chosen for a warm, hopeful, dignified faith-based NGO —
  no brand colours were supplied):
  - Deep hope-green `#1B6B4C` (primary; full scale as `forest-*`)
  - Warm amber/gold `#E0A526` (accent / Donate CTAs; `gold-*`)
  - Cream `#FBF8F1` background, parchment `#F4EEDF` alt-sections
  - Deep charcoal-green ink `#1A2621`, warm grey `#6B6A5F` (`stone`)
  - Muted terracotta `#C06B45` (`clay-*`) used sparingly for eyebrows/icons
- **Type:** Fraunces (warm humanist serif) for headings + Inter for body/UI,
  loaded via `next/font`.
- **Photography:** the Foundation's field photos lead every page. The two
  relief-bag video screenshots had their black letterbox bars cropped
  (`scripts/prepare-images.mjs`). Captions and alt text present
  beneficiaries with dignity.

## Information still needed from the Foundation (all marked `TODO` in code)

| Item | Where it goes |
|---|---|
| Bank name, account name, account number | `app/donate/page.tsx` (bank-transfer block) |
| Online giving link (e.g. Paystack / Flutterwave) | `app/donate/page.tsx` (give-online block) |
| CAC / registration number | `components/NonProfitJsonLd.tsx` + footer if desired |
| Which phone number receives WhatsApp | `lib/site.ts` (`whatsapp`) |
| Exact Google Maps pin for the office | `app/contact/page.tsx` (map iframe) |
| Real domain name | `lib/site.ts` (`url`) |
| Contact-form backend (form service or API route) | `components/ContactForm.tsx` |

## Deliberately NOT included (nothing invented)

- No bank/payment details, no tax-deductibility claims
- No CAC/registration number, no founding year
- No staff names or bios, no donor names, no partner logos, no awards
- No statistics beyond the real 2,000+ lives figure

When any of these become available, add them at the locations above.
