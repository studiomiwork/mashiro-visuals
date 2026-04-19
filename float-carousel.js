/**
 * Horizontal float carousel: centered slide, optional autoplay.
 * Infinite loop both ways: JS removes any .float-card--clone, prepends a clone of the
 * last real slide and appends a clone of the first. Real slides stay in markup order;
 * add as many .float-card (non-clone) items as needed — dots are built from real count.
 */
(function () {
  var roots = document.querySelectorAll(".float-carousel--horizontal");
  if (!roots.length) return;

  var DEFAULT_TRANS = "transform 0.78s cubic-bezier(0.25, 0.08, 0.25, 1)";
  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function prepareInfiniteTrack(track) {
    var toRemove = track.querySelectorAll(".float-card--clone");
    for (var r = 0; r < toRemove.length; r++) {
      toRemove[r].remove();
    }
    var reals = track.querySelectorAll(".float-card");
    var nReal = reals.length;
    if (nReal < 1) return null;

    var firstEl = reals[0];
    var lastEl = reals[nReal - 1];

    var head = lastEl.cloneNode(true);
    head.classList.add("float-card--clone");
    head.setAttribute("aria-hidden", "true");
    head.setAttribute("tabindex", "-1");
    track.insertBefore(head, track.firstChild);

    var tail = firstEl.cloneNode(true);
    tail.classList.add("float-card--clone");
    tail.setAttribute("aria-hidden", "true");
    tail.setAttribute("tabindex", "-1");
    track.appendChild(tail);

    return {
      slides: track.querySelectorAll(".float-card"),
      nReal: nReal,
    };
  }

  function initCarousel(root) {
    var viewport = root.querySelector(".float-carousel__viewport");
    var track = root.querySelector(".float-carousel__track");
    if (!viewport || !track) return;

    var prepared = prepareInfiniteTrack(track);
    if (!prepared) return;

    var slides = prepared.slides;
    var nReal = prepared.nReal;
    var n = slides.length;
    if (n < 3) return;

    var intervalMs = parseInt(root.getAttribute("data-carousel-interval") || "3000", 10);
    var autoplay = intervalMs > 0;
    var transAttr = root.getAttribute("data-carousel-transition");
    var TRANS =
      transAttr && transAttr.trim()
        ? "transform " + transAttr.trim() + " cubic-bezier(0.25, 0.08, 0.25, 1)"
        : DEFAULT_TRANS;
    var physical = 1;
    var timer = null;

    var btnPrev = root.querySelector(".float-carousel__btn--prev");
    var btnNext = root.querySelector(".float-carousel__btn--next");
    var dotsWrap = root.querySelector(".float-carousel__dots");
    var dotButtons = [];

    function computeX(index) {
      var vw = viewport.getBoundingClientRect().width;
      var el = slides[index];
      if (!el) return 0;
      var center = el.offsetLeft + el.offsetWidth / 2;
      return vw / 2 - center;
    }

    function dotIndex() {
      if (physical <= 0) return nReal - 1;
      if (physical >= nReal + 1) return 0;
      return physical - 1;
    }

    function updateDots() {
      if (!dotButtons.length) return;
      var di = dotIndex();
      for (var d = 0; d < dotButtons.length; d++) {
        var on = d === di;
        dotButtons[d].classList.toggle("float-carousel__dot--active", on);
        dotButtons[d].setAttribute("aria-current", on ? "true" : "false");
      }
    }

    function apply(animated) {
      var x = computeX(physical);
      track.style.transition = animated ? TRANS : "none";
      track.style.transform = "translate3d(" + x + "px, 0, 0)";
      updateActive();
      updateDots();
      if (!animated) {
        track.offsetHeight;
        track.style.transition = "";
      }
    }

    function updateActive() {
      for (var i = 0; i < n; i++) {
        var s = slides[i];
        var on = i === physical;
        s.style.pointerEvents = on ? "auto" : "none";
        if (s.classList.contains("float-card--clone")) {
          s.setAttribute("tabindex", "-1");
          s.setAttribute("aria-hidden", "true");
        } else {
          s.setAttribute("tabindex", on ? "0" : "-1");
          s.setAttribute("aria-hidden", on ? "false" : "true");
        }
        s.classList.toggle("float-card--active", on);
      }
    }

    function afterTransition(cb) {
      function done(e) {
        if (e.propertyName !== "transform") return;
        track.removeEventListener("transitionend", done);
        cb();
      }
      track.addEventListener("transitionend", done);
    }

    function schedule() {
      if (!autoplay) return;
      clearTimeout(timer);
      timer = setTimeout(stepNext, intervalMs);
    }

    function stop() {
      clearTimeout(timer);
      timer = null;
    }

    function normalizePhysical() {
      if (physical >= nReal + 1) {
        physical = 1;
        apply(false);
        return true;
      }
      if (physical <= 0) {
        physical = nReal;
        apply(false);
        return true;
      }
      return false;
    }

    function stepNext() {
      if (normalizePhysical()) {
        schedule();
        return;
      }
      if (physical === nReal) {
        physical = nReal + 1;
        apply(true);
        afterTransition(function () {
          physical = 1;
          apply(false);
          schedule();
        });
        return;
      }
      physical += 1;
      apply(true);
      afterTransition(schedule);
    }

    function stepPrev() {
      if (normalizePhysical()) {
        schedule();
        return;
      }
      if (physical === 1) {
        physical = 0;
        apply(true);
        afterTransition(function () {
          physical = nReal;
          apply(false);
          schedule();
        });
        return;
      }
      physical -= 1;
      apply(true);
      afterTransition(schedule);
    }

    function goToSlide(targetIndex) {
      if (targetIndex < 0 || targetIndex >= nReal) return;
      stop();
      physical = targetIndex + 1;
      apply(true);
      afterTransition(schedule);
    }

    function onPrevClick() {
      stop();
      stepPrev();
    }

    function onNextClick() {
      stop();
      stepNext();
    }

    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      dotButtons = [];
      for (var b = 0; b < nReal; b++) {
        (function (idx) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "float-carousel__dot";
          btn.setAttribute("aria-label", "Slide " + (idx + 1));
          btn.addEventListener("click", function () {
            goToSlide(idx);
          });
          dotsWrap.appendChild(btn);
          dotButtons.push(btn);
        })(b);
      }
    }

    apply(false);
    if (autoplay && !prefersReduced) {
      schedule();
    }

    if (btnPrev) btnPrev.addEventListener("click", onPrevClick);
    if (btnNext) btnNext.addEventListener("click", onNextClick);

    /* Touch / swipe: left → next, right → previous (mobile) */
    var swipeStartX = 0;
    var swipeStartY = 0;
    var swipeTracking = false;
    var SWIPE_MIN = 48;
    var SWIPE_ANGLE = 1.2;

    function onSwipeStart(e) {
      if (e.touches.length !== 1) return;
      swipeTracking = true;
      swipeStartX = e.touches[0].clientX;
      swipeStartY = e.touches[0].clientY;
    }

    function onSwipeMove(e) {
      if (!swipeTracking || e.touches.length !== 1) return;
      var dx = e.touches[0].clientX - swipeStartX;
      var dy = e.touches[0].clientY - swipeStartY;
      if (Math.abs(dx) > Math.abs(dy) * SWIPE_ANGLE && Math.abs(dx) > 14) {
        e.preventDefault();
      }
    }

    function onSwipeEnd(e) {
      if (!swipeTracking) return;
      swipeTracking = false;
      var dx = e.changedTouches[0].clientX - swipeStartX;
      var dy = e.changedTouches[0].clientY - swipeStartY;
      if (Math.abs(dx) < SWIPE_MIN) return;
      if (Math.abs(dx) < Math.abs(dy) * SWIPE_ANGLE) return;
      stop();
      if (dx < 0) {
        stepNext();
      } else {
        stepPrev();
      }
    }

    function onSwipeCancel() {
      swipeTracking = false;
    }

    viewport.addEventListener("touchstart", onSwipeStart, { passive: true });
    viewport.addEventListener("touchmove", onSwipeMove, { passive: false });
    viewport.addEventListener("touchend", onSwipeEnd, { passive: true });
    viewport.addEventListener("touchcancel", onSwipeCancel, { passive: true });

    var resizeT;
    window.addEventListener("resize", function () {
      clearTimeout(resizeT);
      resizeT = setTimeout(function () {
        apply(false);
      }, 120);
    });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", function () {
      if (autoplay && !prefersReduced) schedule();
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else if (autoplay && !prefersReduced) schedule();
    });
  }

  for (var r = 0; r < roots.length; r++) {
    initCarousel(roots[r]);
  }
})();
