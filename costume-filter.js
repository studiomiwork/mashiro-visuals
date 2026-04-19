(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var root = document.querySelector("[data-costume-filter]");
    if (!root) return;
    var buttons = root.querySelectorAll(".costume-cat__btn");
    var items = root.querySelectorAll("[data-costume-cat]");

    function setCat(cat) {
      items.forEach(function (el) {
        var c = el.getAttribute("data-costume-cat");
        el.hidden = cat !== "all" && c !== cat;
      });
      buttons.forEach(function (btn) {
        var on = (btn.getAttribute("data-cat") || "all") === cat;
        btn.classList.toggle("costume-cat__btn--active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setCat(btn.getAttribute("data-cat") || "all");
      });
    });

    setCat("all");
  });
})();
