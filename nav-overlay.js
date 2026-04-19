/**
 * Full-screen primary navigation overlay (hamburger / close).
 */
(function () {
  function injectNavCtas(overlay) {
    if (!overlay || overlay.querySelector(".nav-overlay__link--accent")) return;
    var grid = overlay.querySelector(".nav-overlay__grid");
    if (!grid) return;
    var rule = document.createElement("span");
    rule.className = "nav-overlay__grid-rule";
    rule.setAttribute("aria-hidden", "true");
    var aAi = document.createElement("a");
    aAi.className = "nav-overlay__link nav-overlay__link--accent";
    aAi.href = "./ai-chat.html";
    aAi.innerHTML =
      '<span class="nav-overlay__title" data-i18n="nav.ctaAiTitle">AI CHAT</span>' +
      '<span class="nav-overlay__sub" data-i18n="nav.ctaAiSub">Ask anything</span>';
    var aRes = document.createElement("a");
    aRes.className = "nav-overlay__link nav-overlay__link--accent";
    aRes.href = "./reserve.html";
    aRes.innerHTML =
      '<span class="nav-overlay__title" data-i18n="nav.ctaReserveTitle">RESERVE</span>' +
      '<span class="nav-overlay__sub" data-i18n="nav.ctaReserveSub">Book a consultation</span>';
    grid.appendChild(rule);
    grid.appendChild(aAi);
    grid.appendChild(aRes);
  }

  function init() {
    var openBtn = document.getElementById("nav-menu-open");
    var closeBtn = document.getElementById("nav-menu-close");
    var overlay = document.getElementById("nav-overlay");
    if (!overlay || !openBtn) return;

    injectNavCtas(overlay);

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

    overlay.addEventListener("click", function (e) {
      var link = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      if (!link || !overlay.contains(link)) return;
      close();
    });

    var pack = window.MashiroI18n;
    if (pack && typeof pack.apply === "function") {
      pack.apply(typeof pack.detect === "function" ? pack.detect() : "en");
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
