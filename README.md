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

This is a static site and can be deployed directly to Cloudflare Pages, GitHub Pages, Netlify, or another static host. See `DEPLOY_ANDREWCASTOR_COM.md` for the current custom-domain procedure.
