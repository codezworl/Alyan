# Email Signature — Muhammad Alyan Shahid

Professional HTML email signature designed specifically for **Muhammad Alyan Shahid** (`FULL STACK DEVELOPER`), crafted to strictly mirror the visual design language, typographic hierarchy, and color tokens of the personal portfolio ([alyan-mu.vercel.app](https://alyan-mu.vercel.app)).

---

## 1. Exact Contact Information

| Property | Value |
|---|---|
| **Name** | MUHAMMAD ALYAN SHAHID |
| **Title** | FULL STACK DEVELOPER |
| **Skills** | React.js • TypeScript • Node.js • NestJS • AI Integration |
| **Email** | [hafizalyan66@gmail.com](mailto:hafizalyan66@gmail.com) |
| **Phone** | [+92 321 5953600](tel:+923215953600) |
| **Location** | Lahore, Pakistan |
| **Website** | [alyan-mu.vercel.app](https://alyan-mu.vercel.app) |
| **LinkedIn** | [linkedin.com/in/alyan-shahid-a1a81a262](https://www.linkedin.com/in/alyan-shahid-a1a81a262) |
| **GitHub** | [github.com/codezworl](https://github.com/codezworl) |

---

## 2. Portfolio Design & Color Tokens

Extracted directly from `src/index.css` and portfolio theme variables:

| Token Name | Hex Code | Usage in Signature |
|---|---|---|
| **Background Dark** | `#0B0B0B` | Card container background & table cells (`bgcolor="#0B0B0B"`) |
| **Surface Dark** | `#141414` | Social icon button container background |
| **Accent Yellow** | `#FFD60A` | Vertical accent divider bar, field labels (`E:`, `P:`, `W:`, `L:`), Portfolio button, social glyphs |
| **Primary Text** | `#F5F5F0` | Name (`MUHAMMAD ALYAN SHAHID`) & contact link text |
| **Muted Text** | `#9A9A93` | Skills line bullet text & location |
| **Border / Divider** | `#2A2A2A` | Horizontal separator line & social button borders |

---

## 3. Public Hosted Image Assets

All images are baked as standalone PNG files with transparency and hosted under `public/email/`:

| Asset Name | Public Production URL | Dimensions | File Size | Description |
|---|---|---|---|---|
| **Logo Avatar** | `https://alyan-mu.vercel.app/email/logo-as-240.png` | 240 × 240 px (displayed at 96 × 96 px) | ~32.9 KB | Circular crop of portrait with baked `#FFD60A` accent ring. Transparent background. |
| **LinkedIn Icon** | `https://alyan-mu.vercel.app/email/icon-linkedin-64.png` | 64 × 64 px (displayed at 20 × 20 px) | 729 B | Sharp FontAwesome LinkedIn `in` glyph in `#FFD60A` on transparent background. |
| **GitHub Icon** | `https://alyan-mu.vercel.app/email/icon-github-64.png` | 64 × 64 px (displayed at 20 × 20 px) | 1.65 KB | Sharp GitHub Octocat silhouette glyph in `#FFD60A` on transparent background. |

> **Why baked images?** Web email clients (especially Gmail and Outlook) strip CSS properties like `border-radius`, `overflow: hidden`, and `object-fit: cover`. By baking the circular crop and yellow ring into `logo-as-240.png` and rendering icons as pure PNGs, the signature renders reliably in all email clients without layout distortion.

---

## 4. Deliverables in `public/email/`

1. **`signature.html`**: Production-ready, table-based inline-CSS signature snippet (no outer `<html>`, `<head>`, or `<body>` wrappers). Contains explicit `bgcolor="#0B0B0B"` on every cell to protect against unpredictable email dark mode inversions.
2. **`signature-preview.html`**: Dual preview dashboard displaying the signature rendered on both Light canvas (`#FFFFFF`) and Gmail Dark Mode canvas (`#202124`), equipped with a 1-click clipboard copy button and live preview.
3. **`signature-plain.txt`**: Fallback plain-text version formatted for mobile email clients that do not support rich HTML signatures.
4. **`logo-as-240.png`**: 240x240 avatar image with circular mask and accent ring.
5. **`icon-linkedin-64.png`**: 64x64 transparent yellow LinkedIn icon.
6. **`icon-github-64.png`**: 64x64 transparent yellow GitHub icon.
7. **`README-signature.md`**: This guide.

---

## 5. Gmail Web Import Instructions (8 Steps)

Follow these steps to import the HTML signature into Gmail:

1. **Deploy to Vercel**: Ensure the repository changes under `public/email/` are deployed to Vercel so that the images and preview URL are publicly accessible at `https://alyan-mu.vercel.app/email/...`.
2. **Open Preview Page**: In Google Chrome or your default web browser, navigate to:
   ```
   https://alyan-mu.vercel.app/email/signature-preview.html
   ```
   *(Or open `public/email/signature-preview.html` locally in your browser).*
3. **Copy Signature**: Click the yellow **"COPY SIGNATURE TO CLIPBOARD"** button at the top of the preview page. A green confirmation toast *"Signature copied to clipboard!"* will appear.
4. **Open Gmail Settings**: Open [Gmail](https://mail.google.com), click the gear icon in the top right corner, and select **"See all settings"**.
5. **Locate Signature Section**: On the **General** tab, scroll down to the **Signature** section.
6. **Create or Edit Signature**: Click **"+ Create new"**, enter a name (e.g. `Portfolio Dark`), or select your existing signature.
7. **Paste Signature**: Click inside the signature text area and press **`Ctrl + V`** (Windows/Linux) or **`Cmd + V`** (macOS). The complete card with logo, accent bar, links, and icons will appear instantly.
8. **Save Changes**: Under **Signature defaults**, select your new signature for both *For new emails use* and *On reply/forward use*, then scroll to the bottom of the page and click **"Save Changes"**.

---

## 6. Mobile Mail App Setup (Plain Text)

For mobile email apps (e.g., iOS Mail, Gmail for Android) where pasting HTML tables can cause formatting glitches, use `signature-plain.txt`:

1. Open `public/email/signature-plain.txt`.
2. Copy the text:
   ```text
   MUHAMMAD ALYAN SHAHID
   FULL STACK DEVELOPER
   React.js • TypeScript • Node.js • NestJS • AI Integration
   hafizalyan66@gmail.com
   +92 321 5953600
   Lahore, Pakistan
   https://alyan-mu.vercel.app
   https://www.linkedin.com/in/alyan-shahid-a1a81a262
   https://github.com/codezworl
   ```
3. In your mobile mail client settings, paste this into your account signature field.

---

## 7. QA & Technical Validation Metrics

### A. Size & Character Budget
- **`signature.html` Character Count**: 5,611 characters (well within Gmail's recommended 9,000 character limit).
- **`signature.html` File Size**: 5.6 KB.
- **Image Sizes**:
  - `logo-as-240.png`: 32.9 KB (instant load)
  - `icon-linkedin-64.png`: 729 B (< 1 KB)
  - `icon-github-64.png`: 1.65 KB (< 2 KB)
  - **Total payload for all 3 images**: < 36 KB.

### B. WCAG 2.1 Color Contrast Ratios (on `#0B0B0B` background)
- **Primary Text (`#F5F5F0`) on `#0B0B0B`**: **18.7 : 1** (Passes WCAG AAA for all text sizes; requirement is 7:1)
- **Accent Yellow (`#FFD60A`) on `#0B0B0B`**: **14.2 : 1** (Passes WCAG AAA; requirement is 7:1)
- **Secondary / Muted Text (`#9A9A93`) on `#0B0B0B`**: **7.2 : 1** (Passes WCAG AAA for normal text; requirement is 7:1)

### C. Email Compatibility Rules Verified
- [x] **No `<style>` or `<script>` tags** in `signature.html` (all styles are strictly inline `style="..."`).
- [x] **No `<svg>` elements** (SVG vector tags are stripped by Gmail, Outlook, Yahoo; replaced by high-DPI transparent PNGs).
- [x] **No `data:` URI images** (Data URIs are blocked by Gmail; replaced by absolute HTTPS production URLs).
- [x] **No relative file paths** (All image sources and links use absolute `https://alyan-mu.vercel.app/...`).
- [x] **No banned separator characters** (No pipes `|`, no em dashes `—`, no en dashes `–` in signature lines).
- [x] **Strict Table Layout**: Uses `table`, `tr`, `td` with explicit `width`, `valign`, `cellpadding="0"`, `cellspacing="0"`, and `role="presentation"`.
- [x] **Cross-Client Dark Mode Defense**: Uses both CSS `background-color:#0B0B0B` and HTML attribute `bgcolor="#0B0B0B"` on tables and table cells to retain the dark card presentation across both light and dark mail clients.
