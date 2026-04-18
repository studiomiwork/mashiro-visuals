/**
 * Full-screen primary navigation overlay (hamburger / close).
 */
(function () {
  function init() {
    var openBtn = document.getElementById("nav-menu-open");
    var closeBtn = document.getElementById("nav-menu-close");
    var overlay = document.getElementById("nav-overlay");
    if (!overlay || !openBtn) return;

    var prevFocus = null;

    function open() {
      prevFocus = document.activeElement;
      overlay.removeAttribute("hidden");
      overlay.setAttribute("aria-hidden", "false");
      openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      var first =
        overlay.querySelector("#nav-menu-close") ||
        overlay.querySelector("a[href]");
      if (first && first.focus) first.focus();
    }

    function close() {
      overlay.setAttribute("hidden", "");
      overlay.setAttribute("aria-hidden", "true");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      if (prevFocus && typeof prevFocus.focus === "function") prevFocus.focus();
    }

    openBtn.setAttribute("aria-expanded", "false");
    openBtn.addEventListener("click", function () {
      open();
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        close();
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (overlay.getAttribute("aria-hidden") === "true") return;
      close();
    });

    overlay.querySelectorAll("a[href]").forEach(function (a) {
      a.addEventListener("click", function () {
        close();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
