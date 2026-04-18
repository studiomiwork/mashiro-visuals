/**
 * Home: first-time viewport entrance for .reveal / .reveal--chain blocks.
 */
(function () {
  if (document.body.getAttribute("data-page") !== "index") return;

  var els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  var mq = window.matchMedia("(prefers-reduced-motion: reduce)");

  function revealAll() {
    for (var i = 0; i < els.length; i++) {
      els[i].classList.add("is-visible");
    }
  }

  if (mq.matches) {
    revealAll();
    return;
  }

  var obs = new IntersectionObserver(
    function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      }
    },
    { root: null, rootMargin: "0px 0px -7% 0px", threshold: 0.06 }
  );

  for (var j = 0; j < els.length; j++) {
    obs.observe(els[j]);
  }
})();
