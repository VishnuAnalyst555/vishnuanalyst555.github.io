/*
  Dr. Vishnu Bhuvanachandran — Portfolio
  script.js

  Core interactivity is embedded in index.html for reliability.
  This file is for any additional page-level scripts.

  Functions available globally (defined in index.html):
  - toggleMenu()     : mobile navigation
  - switchTab(id)    : skills tab switcher
  - filterProjects() : project category filter
*/

// Page transition polish — add class to body on load for fade-in
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });
});
