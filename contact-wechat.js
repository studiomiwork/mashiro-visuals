/**
 * Contact page: copy WeChat ID to clipboard (contact.html#wechat).
 */
(function () {
  if ((document.body && document.body.getAttribute("data-page")) !== "contact") return;

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("contact-wechat-copy");
    var idEl = document.getElementById("contact-wechat-id-text");
    if (!btn || !idEl) return;

    function t(key) {
      var M = window.MashiroI18n;
      if (!M || typeof M.get !== "function") return "";
      var lang = typeof M.detect === "function" ? M.detect() : "en";
      return M.get(key, lang) || "";
    }

    function restoreLabel() {
      var M = window.MashiroI18n;
      if (M && typeof M.apply === "function") M.apply(typeof M.detect === "function" ? M.detect() : "en");
    }

    btn.addEventListener("click", function () {
      var text = (idEl.textContent || "").trim();
      if (!text) return;

      function flashCopied() {
        btn.textContent = t("contact.wechat.copied") || "Copied";
        window.setTimeout(restoreLabel, 1600);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(flashCopied).catch(fallback);
      } else {
        fallback();
      }

      function fallback() {
        try {
          var ta = document.createElement("textarea");
          ta.value = text;
          ta.setAttribute("readonly", "");
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          flashCopied();
        } catch (e) {}
      }
    });
  });
})();
