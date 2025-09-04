
# AAFL Static Site (GitHub Pages)

This repository is a static mirror of content currently visible at **2010aafl.com**.  
It is designed to host on **GitHub Pages** with an optional **Cloudflare** custom domain.

> Generated on 2025-09-04. Edit freely—no build step required.

## Structure

- `index.html` & subpages (`services.html`, `become-a-carrier.html`, `bills-and-invoices.html`, `shipping-agency.html`, `testimonials.html`, `contact.html`)
- `styles.css` (lightweight, no frameworks)
- `assets/` (put images, logos here)

## Add Images (optional)
This template does not hotlink images from WordPress. To move media:
1. Manually download images from 2010aafl.com pages, or run a tool like:
   ```bash
   # from your machine (Mac/Linux)
   mkdir -p assets
   npx @antfu/ni || true
   # or simply use wget:
   wget --page-requisites --adjust-extension --convert-links --no-parent --directory-prefix assets https://2010aafl.com/
   ```
2. Place the images into `assets/` and update the `<img src="assets/...">` in your HTML where you want them.

> Note: Avoid full-site mirroring of WordPress dynamic scripts; just copy images.
> Ensure you own the content or have permission.

## Deploy to GitHub Pages

1. Create a new repo, e.g., `aafl-site`.
2. Upload these files.
3. In **Settings → Pages**:
   - **Source**: Deploy from branch `main`
   - **Folder**: `/ (root)`
4. If you want a custom domain (e.g., `2010aafl.com` or `www.2010aafl.com`):
   - Add a file named `CNAME` at the repo root containing exactly one line with your domain (e.g., `2010aafl.com`).

## Connect Cloudflare (DNS, SSL, and CNAME Flattening)

Option A — Use GitHub Pages + Cloudflare DNS (recommended):
1. Point **Apex** root (`2010aafl.com`) and `www` to GitHub Pages using **CNAME**:
   - In **Cloudflare DNS**:
     - Add a **CNAME** record `www → <your-username>.github.io`
     - Add a **CNAME** for root `@ → <your-username>.github.io` with **CNAME Flattening** (Cloudflare enables this at root).
2. In Cloudflare, set **SSL/TLS** to **Full**.
3. In the repo, add the `CNAME` file set to your domain.
4. In GitHub Pages, verify the custom domain, then enable **Enforce HTTPS**.

Option B — Cloudflare Pages (optional alternative):
1. Create a project in **Cloudflare Pages** and upload this folder.
2. Connect your domain in Cloudflare Pages.
3. (No GitHub Pages needed).

## Static Form Handling
- Replace the `mailto:` form in `contact.html` with a provider:
  - **Formspree**: add `<form action="https://formspree.io/f/XXXXX" method="POST">`.
  - **Cloudflare Workers / D1 / Email Routing**: advanced option.

## Local Preview
Just open `index.html` in your browser. Or serve locally:
```bash
python3 -m http.server 5173
```

## Notes
- Text content adapted from public pages on 2010aafl.com.
- You can style further or swap to Tailwind/Bootstrap.
