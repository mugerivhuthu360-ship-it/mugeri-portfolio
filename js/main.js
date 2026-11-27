/* ============================================================
   Mugeri Vhuthuhawe — Portfolio
   main.js — mobile navigation, footer year, back-to-top

   Deliberately small. No framework, no build step, no scroll
   reveal: content must be readable even if JS fails.
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    var closeNav = function () {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    };

    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    // Close after choosing a destination
    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav();
    });

    // Close on Escape, return focus to the trigger
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && links.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });

    // Reset when the layout grows past the mobile breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1020) closeNav();
    });
  }

  // Footer year
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  // Back-to-top
  var btt = document.createElement("button");
  btt.className = "back-to-top";
  btt.type = "button";
  btt.setAttribute("aria-label", "Back to top");
  btt.textContent = "\u2191";
  document.body.appendChild(btt);

  btt.addEventListener("click", function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      btt.classList.toggle("is-visible", window.scrollY > 600);
      ticking = false;
    });
  }, { passive: true });
});
