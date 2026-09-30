# Andrew Castor — Engineering Portfolio

Static engineering portfolio for Andrew Castor, a University of Washington engineering student interested in mechanical design, fluid mechanics, and controls.

## Website

The production entry point is `index.html`. The site uses semantic HTML, CSS, and lightweight vanilla JavaScript with no framework or build step.

## Pages

- Interactive portfolio homepage
- Academic plan with searchable, expandable course information
- Eagle Scout project case study
- Battery Babysitter case study
- Mass–spring lab case study
- Steam turbine lab case study
- Magnetic boat lab case study

## Run locally

From PowerShell:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\serve-local.ps1
```

Then open `http://localhost:8000/`.

## Deployment

This repository is configured for GitHub Pages at `andrewcastor.com` via the
root-level `CNAME` file. In GitHub, select **Settings → Pages → Deploy from a
branch**, then choose `main` and `/ (root)`. After the generated
`castor-andrew.github.io/andrew-castor-portfolio/` preview works, point the
Namecheap root and `www` records to GitHub Pages and enable **Enforce HTTPS**.
