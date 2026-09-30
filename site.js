document.documentElement.classList.add("js");

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Reading progress appears on every page without adding extra markup.
const progress = document.createElement("div");
progress.className = "reading-progress";
progress.setAttribute("aria-hidden", "true");
document.body.prepend(progress);

function updateProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const amount = available > 0 ? Math.min(1, window.scrollY / available) : 0;
  progress.style.transform = `scaleX(${amount})`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// Reveal content only when motion is welcome; content remains visible without JS.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .1, rootMargin: "0px 0px -30px" });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

// Homepage project preview.
const previewImage = document.getElementById("hero-preview-image");
const previewTitle = document.getElementById("hero-preview-title");
const previewButtons = document.querySelectorAll("[data-preview-src]");
if (previewImage && previewTitle) {
  const explorer = previewImage.closest(".hero-explorer");
  function switchPreview(button) {
    const frame = previewImage.closest(".preview-frame");
    if (button.classList.contains("active")) return;
    previewButtons.forEach(item => item.classList.toggle("active", item === button));
    explorer.style.setProperty("--preview-accent", button.dataset.previewAccent);
    frame.classList.add("changing");
    window.setTimeout(() => {
      previewImage.src = button.dataset.previewSrc;
      previewImage.alt = button.dataset.previewAlt;
      previewTitle.textContent = button.dataset.previewTitle;
      frame.classList.remove("changing");
    }, 170);
  }
  previewButtons.forEach(button => {
    const preload = new Image();
    preload.src = button.dataset.previewSrc;
    button.addEventListener("click", () => switchPreview(button));
    if (window.matchMedia("(hover: hover)").matches) {
      button.addEventListener("pointerenter", () => switchPreview(button));
    }
  });
}

// The workbench specimens open an original project inspection drawer.
const inspector = document.getElementById("project-inspector");
const specimenButtons = document.querySelectorAll("[data-inspect-title]");
if (inspector && specimenButtons.length) {
  const panel = inspector.querySelector(".inspector-panel");
  const closeButton = inspector.querySelector(".inspector-close");
  const backdrop = inspector.querySelector(".inspector-backdrop");
  const label = document.getElementById("inspector-label");
  const title = document.getElementById("inspector-title");
  const image = document.getElementById("inspector-image");
  const copy = document.getElementById("inspector-copy");
  const link = document.getElementById("inspector-link");
  let previousInspectorFocus;

  function closeInspector() {
    inspector.classList.remove("open");
    inspector.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (previousInspectorFocus) previousInspectorFocus.focus();
  }

  specimenButtons.forEach(button => {
    const preload = new Image();
    preload.src = button.dataset.inspectImage;
    button.addEventListener("click", () => {
      previousInspectorFocus = button;
      label.textContent = button.dataset.inspectLabel;
      title.textContent = button.dataset.inspectTitle;
      image.src = button.dataset.inspectImage;
      image.alt = button.dataset.inspectAlt;
      copy.textContent = button.dataset.inspectCopy;
      link.href = button.dataset.inspectHref;
      inspector.classList.add("open");
      inspector.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeButton.focus();
    });
  });
  closeButton.addEventListener("click", closeInspector);
  backdrop.addEventListener("click", closeInspector);
  panel.addEventListener("keydown", event => {
    if (event.key !== "Tab") return;
    const focusable = [...panel.querySelectorAll('button:not([disabled]), a[href]')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && inspector.classList.contains("open")) closeInspector();
  });
}

// Case-file rows update one persistent evidence preview.
const indexPreviewImage = document.getElementById("index-preview-image");
const indexPreviewTitle = document.getElementById("index-preview-title");
const caseRows = document.querySelectorAll(".case-row[data-row-image]");
if (indexPreviewImage && indexPreviewTitle && caseRows.length) {
  function previewCase(row) {
    if (row.classList.contains("active")) return;
    const frame = indexPreviewImage.closest(".index-preview");
    caseRows.forEach(item => item.classList.toggle("active", item === row));
    frame.classList.add("changing");
    window.setTimeout(() => {
      indexPreviewImage.src = row.dataset.rowImage;
      indexPreviewImage.alt = row.dataset.rowAlt;
      indexPreviewTitle.textContent = row.dataset.rowTitle;
      frame.classList.remove("changing");
    }, 150);
  }
  caseRows.forEach(row => {
    const preload = new Image();
    preload.src = row.dataset.rowImage;
    row.addEventListener("focus", () => previewCase(row));
    row.addEventListener("pointerenter", () => previewCase(row));
    if (!row.hasAttribute("href")) row.addEventListener("click", () => previewCase(row));
  });
}

// Filter the archive while preserving semantic project articles.
const filterButtons = document.querySelectorAll("[data-project-filter]");
const projects = document.querySelectorAll(".project[data-categories]");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.projectFilter;
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    projects.forEach(project => {
      const categories = project.dataset.categories.split(" ");
      project.hidden = filter !== "all" && !categories.includes(filter);
    });
  });
});

// Compact chapter navigation tracks the current section on long pages.
const chapters = [...document.querySelectorAll(".chapter")];
if (chapters.length > 2 && "IntersectionObserver" in window) {
  const rail = document.createElement("nav");
  rail.className = "chapter-indicator";
  rail.setAttribute("aria-label", "Page chapters");
  chapters.forEach((chapter, index) => {
    if (!chapter.id) chapter.id = `chapter-${index + 1}`;
    const link = document.createElement("a");
    link.href = `#${chapter.id}`;
    link.textContent = chapter.dataset.chapter || `Section ${index + 1}`;
    link.title = link.textContent;
    rail.append(link);
  });
  document.body.append(rail);
  const chapterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      rail.querySelectorAll("a").forEach(link => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  chapters.forEach(chapter => chapterObserver.observe(chapter));
}

// Case-study images open at full size and remain keyboard accessible.
const zoomImages = document.querySelectorAll(".case-figure img, .detail-grid img, .eagle-gallery img");
if (zoomImages.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Expanded project image");
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image">×</button><img alt="">';
  document.body.append(lightbox);
  const fullImage = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector("button");
  let previousFocus;
  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
    if (previousFocus) previousFocus.focus();
  }
  zoomImages.forEach(image => {
    image.classList.add("zoomable");
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `${image.alt}. Open full-size image.`);
    function open() {
      previousFocus = image;
      fullImage.src = image.src;
      fullImage.alt = image.alt;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
      closeButton.focus();
    }
    image.addEventListener("click", open);
    image.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
  });
  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && lightbox.classList.contains("open")) closeLightbox(); });
}
