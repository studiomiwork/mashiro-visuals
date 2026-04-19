/**
 * Gallery page: category tabs + sort (popular / newest), optional two-row preview + VIEW MORE.
 * Call window.initGalleryFilter() after replacing grid HTML.
 */
(function () {
  var grid;
  var tiles = [];
  var filterBtns;
  var sortBtns;
  var listenersAttached = false;
  var viewMoreWrap;
  var viewMoreBtn;
  var galleryExpanded = false;
  var resizeTimer;

  var currentFilter = "all";
  var currentSort = "newest";

  function refreshTiles() {
    grid = document.getElementById("gallery-page-grid");
    if (!grid) return false;
    tiles = Array.prototype.slice.call(grid.querySelectorAll(".gallery-page-tile"));
    return tiles.length > 0;
  }

  function getGalleryColumns() {
    var w = window.innerWidth || document.documentElement.clientWidth;
    if (w <= 720) return 2;
    if (w <= 960) return 3;
    return 4;
  }

  function visibleTilesInOrder() {
    return tiles.filter(function (t) {
      return !t.hidden;
    });
  }

  function updateViewMoreVisibility() {
    if (!viewMoreWrap) return;
    var cols = getGalleryColumns();
    var cap = cols * 2;
    var vis = visibleTilesInOrder();
    var hasMore = vis.length > cap;
    viewMoreWrap.hidden = galleryExpanded || !hasMore;
  }

  function applyRowTruncation() {
    tiles.forEach(function (t) {
      t.classList.remove("gallery-page-tile--truncated");
    });
    if (galleryExpanded) {
      updateViewMoreVisibility();
      return;
    }
    var cols = getGalleryColumns();
    var maxFirst = cols * 2;
    var vis = visibleTilesInOrder();
    vis.forEach(function (t, i) {
      if (i >= maxFirst) {
        t.classList.add("gallery-page-tile--truncated");
      }
    });
    updateViewMoreVisibility();
  }

  function applyFilter() {
    tiles.forEach(function (el) {
      var cat = el.getAttribute("data-category") || "";
      var show = currentFilter === "all" || cat === currentFilter;
      el.hidden = !show;
    });
  }

  function applySort() {
    var ordered = tiles.slice().sort(function (a, b) {
      if (currentSort === "newest") {
        var da = a.getAttribute("data-date") || "";
        var db = b.getAttribute("data-date") || "";
        return db.localeCompare(da);
      }
      var pa = parseInt(a.getAttribute("data-pop"), 10) || 0;
      var pb = parseInt(b.getAttribute("data-pop"), 10) || 0;
      return pb - pa;
    });
    ordered.forEach(function (el) {
      grid.appendChild(el);
    });
  }

  function setFilterActive() {
    if (!filterBtns) return;
    filterBtns.forEach(function (btn) {
      var f = btn.getAttribute("data-filter");
      var on = f === currentFilter;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  function setSortActive() {
    if (!sortBtns) return;
    sortBtns.forEach(function (btn) {
      var s = btn.getAttribute("data-sort");
      var on = s === currentSort;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function attachListenersOnce() {
    if (listenersAttached) return;
    listenersAttached = true;
    filterBtns = document.querySelectorAll(".gallery-filter-bar__btn");
    sortBtns = document.querySelectorAll(".gallery-sort__btn");
    viewMoreWrap = document.getElementById("gallery-page-more");
    viewMoreBtn = document.getElementById("gallery-view-more-btn");

    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        if (!f || f === currentFilter) return;
        currentFilter = f;
        galleryExpanded = false;
        setFilterActive();
        applyFilter();
        applyRowTruncation();
      });
    });

    sortBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var s = btn.getAttribute("data-sort");
        if (!s || s === currentSort) return;
        currentSort = s;
        galleryExpanded = false;
        setSortActive();
        applySort();
        applyRowTruncation();
      });
    });

    if (viewMoreBtn) {
      viewMoreBtn.addEventListener("click", function () {
        galleryExpanded = true;
        applyRowTruncation();
      });
    }

    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (!galleryExpanded) {
          applyRowTruncation();
        } else {
          updateViewMoreVisibility();
        }
      }, 150);
    });
  }

  function initGalleryFilter() {
    if (!refreshTiles()) return;
    attachListenersOnce();
    galleryExpanded = false;
    setFilterActive();
    setSortActive();
    applySort();
    applyFilter();
    applyRowTruncation();
  }

  window.initGalleryFilter = initGalleryFilter;
  initGalleryFilter();
})();
