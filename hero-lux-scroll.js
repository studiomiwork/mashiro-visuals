/**
 * Home hero: scroll hint fade with scroll; subtle video "breathing" scale. (Headline lives below video.)
 */
(function () {
  var root = document.querySelector(".hero.hero--lux");
  if (!root) return;

  var scrollHint = root.querySelector(".hero-scroll");
  var media = root.querySelector(".hero-media");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function easeOut(t) {
    return 1 - (1 - t) * (1 - t);
  }

  function tick() {
    var h = root.offsetHeight || window.innerHeight;
    var rect = root.getBoundingClientRect();
    var scrolled = -rect.top;
    var raw = Math.min(1, Math.max(0, scrolled / (h * 0.38)));
    var p = easeOut(raw);

    if (scrollHint) {
      scrollHint.style.opacity = String(Math.max(0, 1 - p * 1.15));
    }

    if (media && !reduceMotion) {
      var scale = 1.04 + 0.05 * (1 - p);
      media.style.transform = "scale(" + scale + ")";
    }
  }

  window.addEventListener("scroll", tick, { passive: true });
  window.addEventListener("resize", tick);
  tick();
})();
