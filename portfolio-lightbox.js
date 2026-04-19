/**
 * Gallery lightbox: click a tile to browse all photos in the same group.
 * Group = data-album if set, otherwise data-category.
 */
(function () {
  var grid = document.getElementById("gallery-page-grid");
  if (!grid) return;

  var root;
  var backdrop;
  var stage;
  var imgEl;
  var btnClose;
  var btnPrev;
  var btnNext;
  var btnFs;
  var btnZoomIn;
  var btnZoomOut;
  var counterEl;
  var slides = [];
  var index = 0;
  var scale = 1;
  var touchStartX = null;
  var lastFocused = null;

  var SCALE_STEPS = [1, 1.35, 1.85, 2.5];

  function t(key) {
    var fn = window.MashiroI18n && window.MashiroI18n.get;
    var s = fn ? fn("portfolio.gallery." + key) : "";
    return s || "";
  }

  function refreshLabels() {
    if (!btnClose) return;
    btnClose.setAttribute("aria-label", t("lightboxCloseAria"));
    btnPrev.setAttribute("aria-label", t("lightboxPrevAria"));
    btnNext.setAttribute("aria-label", t("lightboxNextAria"));
    btnFs.setAttribute("aria-label", t("lightboxFsEnterAria"));
    btnZoomIn.setAttribute("aria-label", t("lightboxZoomInAria"));
    btnZoomOut.setAttribute("aria-label", t("lightboxZoomOutAria"));
    updateCounter();
  }

  function largerSrc(url) {
    if (!url || url.indexOf("images.unsplash.com") === -1) return url;
    var base = url.split("?")[0];
    return base + "?auto=format&fit=max&w=2400&q=90";
  }

  function albumKey(tile) {
    return tile.getAttribute("data-album") || tile.getAttribute("data-category") || "";
  }

  function collectGroup(startTile) {
    var key = albumKey(startTile);
    var all = grid.querySelectorAll(".gallery-page-tile");
    var out = [];
    for (var i = 0; i < all.length; i++) {
      if (albumKey(all[i]) === key) out.push(all[i]);
    }
    return out;
  }

  function buildSlides(figures) {
    return figures.map(function (fig) {
      var im = fig.querySelector("img");
      if (!im) return null;
      return {
        src: largerSrc(im.getAttribute("src") || ""),
        alt: im.getAttribute("alt") || "",
      };
    }).filter(Boolean);
  }

  function applyZoomToImg() {
    if (!imgEl) return;
    if (scale <= 1) {
      imgEl.style.maxWidth = "";
      imgEl.style.maxHeight = "";
    } else {
      imgEl.style.maxWidth = Math.min(96 * scale, 280) + "vw";
      imgEl.style.maxHeight = Math.min(88 * scale, 280) + "dvh";
    }
    if (stage) {
      stage.classList.toggle("gallery-lightbox__stage--zoomed", scale > 1);
    }
    if (btnZoomIn) btnZoomIn.disabled = scale >= SCALE_STEPS[SCALE_STEPS.length - 1];
    if (btnZoomOut) btnZoomOut.disabled = scale <= SCALE_STEPS[0];
  }

  function setScale(next) {
    scale = next;
    applyZoomToImg();
  }

  function zoomIn() {
    var i = 0;
    while (i < SCALE_STEPS.length && SCALE_STEPS[i] <= scale) i++;
    if (i < SCALE_STEPS.length) setScale(SCALE_STEPS[i]);
  }

  function zoomOut() {
    var i = SCALE_STEPS.length - 1;
    while (i >= 0 && SCALE_STEPS[i] >= scale) i--;
    if (i >= 0) setScale(SCALE_STEPS[i]);
    else setScale(1);
  }

  function updateCounter() {
    if (!counterEl) return;
    var tpl = t("lightboxCounter") || "{current} / {total}";
    counterEl.textContent = tpl
      .replace("{current}", String(index + 1))
      .replace("{total}", String(slides.length));
  }

  function showSlide(i) {
    if (!slides.length) return;
    index = (i + slides.length) % slides.length;
    scale = 1;
    imgEl.removeAttribute("src");
    imgEl.style.maxWidth = "";
    imgEl.style.maxHeight = "";
    imgEl.src = slides[index].src;
    imgEl.alt = slides[index].alt;
    applyZoomToImg();
    imgEl.onload = function () {
      applyZoomToImg();
      if (stage) stage.scrollTo(0, 0);
    };
    updateCounter();
    var multi = slides.length > 1;
    btnPrev.hidden = !multi;
    btnNext.hidden = !multi;
    btnPrev.disabled = !multi;
    btnNext.disabled = !multi;
  }

  function syncFsLabel() {
    var doc = document;
    var fs =
      doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.msFullscreenElement;
    var inFs = fs === root;
    btnFs.setAttribute("aria-label", inFs ? t("lightboxFsExitAria") : t("lightboxFsEnterAria"));
  }

  function toggleFullscreen() {
    var doc = document;
    if (doc.fullscreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement) {
      var exit = doc.exitFullscreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
      if (exit) exit.call(doc);
    } else {
      var req = root.requestFullscreen || root.webkitRequestFullscreen || root.msRequestFullscreen;
      if (req) req.call(root);
    }
  }

  function open(startTile) {
    var figs = collectGroup(startTile);
    slides = buildSlides(figs);
    if (!slides.length) return;
    var startIdx = figs.indexOf(startTile);
    index = startIdx >= 0 ? startIdx : 0;
    lastFocused = document.activeElement;
    root.hidden = false;
    document.body.classList.add("gallery-lightbox-open");
    setScale(1);
    if (stage) {
      stage.scrollTo(0, 0);
    }
    refreshLabels();
    showSlide(index);
    btnClose.focus();
    syncFsLabel();
  }

  function close() {
    root.hidden = true;
    imgEl.removeAttribute("src");
    document.body.classList.remove("gallery-lightbox-open");
    setScale(1);
    if (stage) {
      stage.scrollTo(0, 0);
    }
    var doc = document;
    if (doc.fullscreenElement === root || doc.webkitFullscreenElement === root) {
      var exit = doc.exitFullscreen || doc.webkitExitFullscreen;
      if (exit) exit.call(doc);
    }
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  function go(delta) {
    showSlide(index + delta);
    setScale(1);
    if (stage) stage.scrollTo(0, 0);
  }

  function buildUi() {
    root = document.createElement("div");
    root.id = "gallery-lightbox";
    root.className = "gallery-lightbox";
    root.setAttribute("hidden", "");
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");

    backdrop = document.createElement("div");
    backdrop.className = "gallery-lightbox__backdrop";
    backdrop.tabIndex = -1;

    stage = document.createElement("div");
    stage.className = "gallery-lightbox__stage";

    imgEl = document.createElement("img");
    imgEl.className = "gallery-lightbox__img";
    imgEl.alt = "";
    imgEl.decoding = "async";
    imgEl.draggable = false;

    stage.appendChild(imgEl);

    function iconBtn(className, svgInner) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "gallery-lightbox__btn " + className;
      b.innerHTML = svgInner;
      return b;
    }

    var svgClose =
      '<svg class="gallery-lightbox__svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12 5.7 16.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z"/></svg>';
    var svgPrev =
      '<svg class="gallery-lightbox__svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>';
    var svgNext =
      '<svg class="gallery-lightbox__svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>';
    var svgFs =
      '<svg class="gallery-lightbox__svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>';
    var svgPlus =
      '<svg class="gallery-lightbox__svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';
    var svgMinus =
      '<svg class="gallery-lightbox__svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 13H5v-2h14v2z"/></svg>';

    btnClose = iconBtn("gallery-lightbox__close", svgClose);
    btnPrev = iconBtn("gallery-lightbox__prev", svgPrev);
    btnNext = iconBtn("gallery-lightbox__next", svgNext);
    btnFs = iconBtn("gallery-lightbox__fs", svgFs);
    btnZoomIn = iconBtn("gallery-lightbox__zoom-in", svgPlus);
    btnZoomOut = iconBtn("gallery-lightbox__zoom-out", svgMinus);

    counterEl = document.createElement("div");
    counterEl.className = "gallery-lightbox__counter";

    root.appendChild(backdrop);
    root.appendChild(btnClose);
    root.appendChild(btnPrev);
    root.appendChild(btnNext);
    root.appendChild(btnFs);
    root.appendChild(btnZoomIn);
    root.appendChild(btnZoomOut);
    root.appendChild(counterEl);
    root.appendChild(stage);

    document.body.appendChild(root);

    btnClose.addEventListener("click", function (e) {
      e.stopPropagation();
      close();
    });
    btnPrev.addEventListener("click", function (e) {
      e.stopPropagation();
      go(-1);
    });
    btnNext.addEventListener("click", function (e) {
      e.stopPropagation();
      go(1);
    });
    btnFs.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleFullscreen();
    });
    btnZoomIn.addEventListener("click", function (e) {
      e.stopPropagation();
      zoomIn();
    });
    btnZoomOut.addEventListener("click", function (e) {
      e.stopPropagation();
      zoomOut();
    });
    backdrop.addEventListener("click", close);

    stage.addEventListener("click", function (e) {
      if (e.target === stage) close();
    });

    document.addEventListener("fullscreenchange", syncFsLabel);
    document.addEventListener("webkitfullscreenchange", syncFsLabel);

    imgEl.addEventListener("dblclick", function (e) {
      e.stopPropagation();
      if (scale > 1) setScale(1);
      else zoomIn();
    });

    stage.addEventListener(
      "touchstart",
      function (e) {
        if (e.touches.length === 1) touchStartX = e.touches[0].clientX;
      },
      { passive: true }
    );
    stage.addEventListener(
      "touchend",
      function (e) {
        if (touchStartX == null || slides.length < 2) return;
        var x = e.changedTouches[0].clientX;
        var d = x - touchStartX;
        touchStartX = null;
        if (Math.abs(d) < 48) return;
        if (d < 0) go(1);
        else go(-1);
      },
      { passive: true }
    );

    document.addEventListener("keydown", function (e) {
      if (root.hidden) return;
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    });

    var langSel = document.getElementById("lang-select");
    if (langSel) {
      langSel.addEventListener("change", refreshLabels);
    }
  }

  buildUi();
  refreshLabels();

  grid.addEventListener("click", function (e) {
    var tile = e.target.closest(".gallery-page-tile");
    if (!tile || !grid.contains(tile)) return;
    if (tile.hasAttribute("hidden")) return;
    e.preventDefault();
    open(tile);
  });

  grid.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var tile = e.target.closest(".gallery-page-tile");
    if (!tile || !grid.contains(tile)) return;
    if (tile.hasAttribute("hidden")) return;
    e.preventDefault();
    open(tile);
  });

  grid.querySelectorAll(".gallery-page-tile").forEach(function (tile) {
    if (!tile.getAttribute("tabindex")) tile.setAttribute("tabindex", "0");
    tile.setAttribute("role", "button");
  });
})();
