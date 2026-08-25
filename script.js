// ============================================================
// Victor Mose — Portfolio
// Vanilla JS: nav scroll state, mobile menu, scroll reveal,
// active section highlighting. No dependencies.
// ============================================================

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- Sticky nav background on scroll ---- */
const nav = document.getElementById("nav");
const onScroll = () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 12);
};
document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---- Mobile menu toggle ---- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const iconMenu = document.getElementById("iconMenu");
const iconClose = document.getElementById("iconClose");

function closeMenu() {
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  iconMenu.style.display = "";
  iconClose.style.display = "none";
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  iconMenu.style.display = isOpen ? "none" : "";
  iconClose.style.display = isOpen ? "" : "none";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

/* ---- Scroll reveal ---- */
const revealEls = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ---- Active section link highlighting ---- */
const sections = ["about", "projects", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const links = Array.from(navLinks.querySelectorAll('a[href^="#"]'));

if ("IntersectionObserver" in window && sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}
