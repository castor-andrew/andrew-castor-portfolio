# From-scratch interactive engineering portfolio prompt

## Role

Act as a senior digital art director, interaction designer, accessibility specialist, front-end engineer, and technical-portfolio editor. Rebuild Andrew Castor’s portfolio from a blank visual canvas. Do not preserve the existing layout merely because it already works; reconsider the page structure, hierarchy, navigation, styling, and interaction model as one coherent system.

## Subject and audience

Andrew Castor is a University of Washington engineering student interested in mechanical design, fluid mechanics, controls, and applied mathematics. His documented work includes physical prototypes, physics experiments, rocketry-club hardware, an aircraft project in progress, and an Eagle Scout leadership project.

Primary reviewers:

- University professors and research labs
- Engineering-club leads
- Technical internship recruiters
- Practicing engineers

## Objective

Create an original portfolio that makes technical work enjoyable to discover without turning it into a game or weakening its credibility. A reviewer should quickly understand who Andrew is, then choose how deeply to explore: scan project specimens, open an inspection view, browse a structured case-file index, or read complete project documentation.

## Inspiration boundary

Use [Daily Integral](https://dailyintegral.com/) only as a reference for broad experience qualities:

- A landing screen that invites exploration instead of behaving like a résumé
- One clear focal object surrounded by optional paths
- Brief instructions that explain how to interact
- Color-coded choices with responsive hover and click feedback
- Editorial serif typography paired with small technical labels
- A quiet underlying grid that gives the screen spatial structure
- Friendly pacing and progressive disclosure

Translate those qualities into a different concept: **an engineering workbench map**. Place a central identity record on a coordinate-like drafting surface and arrange rectangular, color-coded project specimens around it. Selecting a specimen opens a side inspection drawer with real evidence and a route to the full case file. Below the map, provide a separate case-file index with one persistent preview that changes as rows receive hover or keyboard focus.

Do not copy or closely approximate Daily Integral’s circular orbs, radial subject constellation, integral branding, central puzzle card, game categories, daily timer, streak mechanics, exact page composition, color assignments, language, typography files, animations, source code, or assets. The workbench must remain rectangular, documentary, photographic, and specific to Andrew’s projects. If the result could be described as “Daily Integral with engineering labels,” redesign it.

## Core experience

### 1. Workbench map

- Fill the first viewport with a subtle coordinate grid.
- Place Andrew’s name, short engineering statement, email, location, and primary navigation in a central identity record.
- Surround it with five rectangular project specimens representing leadership, power/integration, motion/controls, modeling, and flow/energy.
- Give every specimen a short code, direct label, and descriptive subtitle.
- On small screens, convert the spatial map into a clear single-column or two-column sequence without overlapping content.

### 2. Inspection drawer

- Clicking a specimen opens an accessible side drawer.
- Show the project title, category, real image, concise factual description, and a link to the complete case file when available.
- Support Escape to close, backdrop click, visible close control, focus return, and keyboard focus containment.
- Never hide essential project access behind hover alone.

### 3. Case-file index

- Use a split layout with a sticky evidence preview and a numbered list of all projects.
- Change the preview image and title when a row is hovered, focused, or deliberately selected.
- Identify unfinished projects honestly rather than linking to nonexistent results.
- Use different muted specimen colors to aid scanning, not to imply performance or status.

### 4. Complete case studies

Organize each project around:

1. Context or problem
2. Andrew’s specific role
3. Constraints and design decisions
4. Implementation or experimental procedure
5. Evidence and observations
6. Result and limitations
7. What Andrew learned

Use real photographs, captions, timeline blocks, evidence bands, and full-size image viewing. Keep team contributions explicit.

### 5. Academic plan

- Present planned coursework as an interactive course-file timeline.
- Preserve search, expand/collapse controls, course descriptions, prerequisites, credits, and quarter navigation.
- Clearly state that future quarters are planned and the page is not a transcript.

## Visual system

- Warm drafting-paper background and white record surfaces
- Dark ink and deep navy for structure
- Cobalt blue for primary action
- Coral for emphasis
- Muted yellow, mint, lavender, and pale blue for project categories
- Georgia or another dependable editorial serif for names and major headings
- Arial or another neutral sans serif for interface copy
- Monospace labels for coordinates, specimen codes, captions, and metadata
- Square corners, fine black rules, offset shadows, and restrained grid lines
- Real project photography rather than stock art or decorative AI imagery

Avoid glassmorphism, gradient blobs, excessive rounded cards, fake dashboards, custom cursors, typewriter effects, skill percentages, invented statistics, autoplay carousels, ornamental 3D effects, stock illustrations, testimonials, and generic startup language.

## Content rules

- Preserve verified facts, dates, responsibilities, outcomes, and limitations.
- Never invent measurements, performance claims, research experience, awards, tools, or proficiency.
- Use direct first-person writing and concrete verbs such as designed, assembled, measured, modeled, tested, revised, coordinated, and led.
- Distinguish team work from individual contribution.
- Describe inconclusive experiments accurately and explain why the evidence was limited.
- Keep the academic plan separate from completed coursework.

## Technical requirements

- Semantic HTML, maintainable CSS, and lightweight vanilla JavaScript
- Functional content and navigation when JavaScript is unavailable
- Keyboard-accessible controls and visible focus states
- Correct dialog semantics and focus management
- Helpful alternative text and figure captions
- Reduced-motion support
- No horizontal overflow or overlapping specimen controls
- Responsive behavior at 500 px, tablet widths, and 1440 px desktop
- Fast loading with no unnecessary framework or dependency

## Acceptance criteria

- Within 20 seconds, a new visitor can identify Andrew, his university, engineering interests, strongest work, and contact route.
- Every interactive element communicates that it is actionable.
- Specimens open the correct inspection content; the drawer closes by button, backdrop, and Escape.
- Focus returns to the triggering specimen after the drawer closes.
- Case-file previews update on both pointer hover and keyboard focus.
- Case studies, academic-plan controls, image expansion, reading progress, and chapter navigation continue to function.
- All local links and referenced assets resolve.
- The layout is coherent at 500 px, 1000 px, and 1440 px viewport widths.
- The finished site feels built around Andrew’s real engineering record and cannot reasonably be mistaken for a clone of Daily Integral.
