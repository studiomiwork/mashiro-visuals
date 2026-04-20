/**
 * Checkout page: month calendar + live order totals (demo — wire payment gateway on submit).
 */
(function () {
  var root = document.getElementById("reserve-calendar");
  if (!root) return;

  var monthEl = root.querySelector(".reserve-calendar__month-label");
  var gridEl = root.querySelector(".reserve-calendar__grid");
  var prevBtn = root.querySelector('[data-calendar="prev"]');
  var nextBtn = root.querySelector('[data-calendar="next"]');
  var hiddenInput = document.getElementById("reserve-date");

  var view = new Date();
  view.setDate(1);

  var selected = null;

  function statusForDay(y, m, d) {
    var dt = new Date(y, m, d);
    var wd = dt.getDay();
    if (wd === 3) return "closed";
    var seed = y * 380 + m * 31 + d;
    if (seed % 11 === 0 || seed % 13 === 0) return "closed";
    if (seed % 5 === 0) return "few";
    return "open";
  }

  function fmtMonth(d) {
    try {
      return d.toLocaleDateString(document.documentElement.lang || "en", {
        year: "numeric",
        month: "long",
      });
    } catch (e) {
      return d.getFullYear() + "/" + (d.getMonth() + 1);
    }
  }

  function render() {
    var y = view.getFullYear();
    var m = view.getMonth();
    if (monthEl) monthEl.textContent = fmtMonth(view);

    var firstWd = new Date(y, m, 1).getDay();
    var monOffset = firstWd === 0 ? 6 : firstWd - 1;
    var daysInMonth = new Date(y, m + 1, 0).getDate();

    if (!gridEl) return;
    gridEl.innerHTML = "";

    for (var i = 0; i < monOffset; i++) {
      var pad = document.createElement("div");
      pad.className = "reserve-calendar__cell reserve-calendar__cell--pad";
      pad.setAttribute("aria-hidden", "true");
      gridEl.appendChild(pad);
    }

    for (var d = 1; d <= daysInMonth; d++) {
      var cell = document.createElement("button");
      cell.type = "button";
      cell.className = "reserve-calendar__cell reserve-calendar__day";
      cell.textContent = String(d);

      var st = statusForDay(y, m, d);
      cell.classList.add("reserve-calendar__day--" + st);

      var dt = new Date(y, m, d);
      var wd = dt.getDay();
      if (wd === 0) cell.classList.add("reserve-calendar__day--sun");
      if (wd === 6) cell.classList.add("reserve-calendar__day--sat");

      if (selected && selected.y === y && selected.m === m && selected.d === d) {
        cell.classList.add("is-selected");
      }

      if (st === "closed") {
        cell.disabled = true;
        cell.setAttribute("aria-disabled", "true");
      } else {
        (function (yy, mm, dd) {
          cell.addEventListener("click", function () {
            selected = { y: yy, m: mm, d: dd };
            if (hiddenInput) {
              hiddenInput.value =
                yy + "-" + String(mm + 1).padStart(2, "0") + "-" + String(dd).padStart(2, "0");
              try {
                hiddenInput.dispatchEvent(new Event("input", { bubbles: true }));
                hiddenInput.dispatchEvent(new Event("change", { bubbles: true }));
              } catch (err) {}
            }
            render();
          });
        })(y, m, d);
      }

      gridEl.appendChild(cell);
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      view.setMonth(view.getMonth() - 1);
      render();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      view.setMonth(view.getMonth() + 1);
      render();
    });
  }

  render();
})();

(function () {
  var form = document.getElementById("reserve-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) return;
    var msg = document.getElementById("reserve-success-msg");
    if (msg) {
      msg.classList.remove("visually-hidden");
      msg.setAttribute("role", "status");
      msg.setAttribute("aria-live", "polite");
      try {
        msg.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } catch (err) {}
    }
  });
})();

/** Live totals: package (excl. tax) + add-ons + 10% tax (matches plan pages). */
(function () {
  var form = document.getElementById("reserve-form");
  if (!form) return;

  var PKG = {
    tokyo: 148000,
    shonan: 238000,
    fuji: 288000,
    kansai: 238000,
    hokkaido: 308000,
    traditional: 138000,
  };
  var KANTO_ROUTE_EX = { tk: 60000, fh: 80000 };
  var DRESS = { dress0: 0, dress1: 20000, dress2: 40000, dress3: 60000 };
  /** Extra dress sets chosen in the dropdown (dress1 = +1 set, etc.). */
  var DRESS_EXTRA_SETS = { dress0: 0, dress1: 1, dress2: 2, dress3: 3 };
  /** Wedding-dress looks already included in each package (before add-ons). */
  var BASE_INCLUDED_DRESSES = {
    tokyo: 2,
    shonan: 2,
    fuji: 2,
    kansai: 2,
    hokkaido: 2,
    traditional: 1,
    kanto_day: 2,
  };
  var MAX_DRESSES_PER_DAY = 4;
  var BTS = { bts_none: 0, bts50: 50000, bts70: 70000 };
  var KIM = { k_none: 0, k50: 50000, k70: 70000 };

  var planEl = document.getElementById("reserve-sum-plan");
  var addEl = document.getElementById("reserve-sum-addons");
  var exEl = document.getElementById("reserve-sum-ex");
  var taxEl = document.getElementById("reserve-sum-tax");
  var inEl = document.getElementById("reserve-sum-in");
  var hint = document.querySelector(".reserve-win__hint");
  var hxEx = document.getElementById("reserve-total-ex");
  var hxIn = document.getElementById("reserve-total-in");
  var hxAd = document.getElementById("reserve-addons-ex");
  var includesPanel = document.getElementById("reserve-includes-panel");
  var includesList = document.getElementById("reserve-includes-list");

  function renderPackageIncludes(pkgVal) {
    if (!includesPanel || !includesList) return;
    if (!pkgVal || !window.MashiroI18n || typeof window.MashiroI18n.get !== "function") {
      includesPanel.hidden = true;
      includesList.innerHTML = "";
      return;
    }
    var langSel = document.getElementById("lang-select");
    var lang = langSel && langSel.value ? langSel.value : "";
    var items = window.MashiroI18n.get("reserve.includes." + pkgVal, lang);
    if (!items || !items.length) {
      includesPanel.hidden = true;
      includesList.innerHTML = "";
      return;
    }
    includesList.innerHTML = "";
    for (var j = 0; j < items.length; j++) {
      var li = document.createElement("li");
      li.textContent = String(items[j]);
      includesList.appendChild(li);
    }
    includesPanel.hidden = false;
  }

  function fmtYen(n) {
    return "¥" + n.toLocaleString("en-US");
  }

  function valRadio(name) {
    var el = form.querySelector('[name="' + name + '"]:checked');
    return el ? el.value : null;
  }

  function valDress() {
    var sel = form.querySelector('select[name="addon_dress"]');
    if (!sel) return "dress0";
    var v = String(sel.value || "dress0");
    return Object.prototype.hasOwnProperty.call(DRESS, v) ? v : "dress0";
  }

  /** Disable add-on dress options that would exceed included + extra ≤ 4 / day. */
  function syncDressSelectLimits() {
    var sel = form.querySelector('select[name="addon_dress"]');
    if (!sel) return;
    var pkgVal = valRadio("photo_package");
    if (
      !pkgVal ||
      (!Object.prototype.hasOwnProperty.call(PKG, pkgVal) && pkgVal !== "kanto_day")
    ) {
      for (var i = 0; i < sel.options.length; i++) {
        sel.options[i].disabled = false;
        sel.options[i].removeAttribute("title");
      }
      return;
    }
    var included = Object.prototype.hasOwnProperty.call(BASE_INCLUDED_DRESSES, pkgVal)
      ? BASE_INCLUDED_DRESSES[pkgVal]
      : 2;
    for (var j = 0; j < sel.options.length; j++) {
      var opt = sel.options[j];
      var extra = Object.prototype.hasOwnProperty.call(DRESS_EXTRA_SETS, opt.value)
        ? DRESS_EXTRA_SETS[opt.value]
        : 0;
      opt.disabled = included + extra > MAX_DRESSES_PER_DAY;
    }
    var idx = sel.selectedIndex;
    if (idx < 0 || sel.options[idx].disabled) {
      var pick = "dress0";
      for (var k = 3; k >= 0; k--) {
        var cand = "dress" + k;
        var ex = DRESS_EXTRA_SETS[cand];
        if (included + ex <= MAX_DRESSES_PER_DAY) {
          pick = cand;
          break;
        }
      }
      if (String(sel.value) !== pick) sel.value = pick;
    }
  }

  function syncPkgHighlight() {
    var labels = form.querySelectorAll(".reserve-pkg");
    for (var i = 0; i < labels.length; i++) {
      var lab = labels[i];
      var inp = lab.querySelector('input[name="photo_package"]');
      lab.classList.toggle("reserve-pkg--active", !!(inp && inp.checked));
    }
  }

  function syncKantoRouteUI() {
    var wrap = document.getElementById("reserve-kanto-route-wrap");
    if (!wrap) return;
    var pkgVal = valRadio("photo_package");
    var show = pkgVal === "kanto_day";
    wrap.hidden = !show;
    var radios = wrap.querySelectorAll('input[name="kanto_route"]');
    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = !show;
    }
  }

  function updateTotals() {
    var pkgVal = valRadio("photo_package");
    syncDressSelectLimits();
    syncKantoRouteUI();

    if (!pkgVal || (!Object.prototype.hasOwnProperty.call(PKG, pkgVal) && pkgVal !== "kanto_day")) {
      if (hint) hint.classList.remove("is-hidden");
      var dash = "—";
      if (planEl) planEl.textContent = dash;
      if (addEl) addEl.textContent = dash;
      if (exEl) exEl.textContent = dash;
      if (taxEl) taxEl.textContent = dash;
      if (inEl) inEl.textContent = dash;
      if (hxEx) hxEx.value = "";
      if (hxIn) hxIn.value = "";
      if (hxAd) hxAd.value = "";
      syncPkgHighlight();
      renderPackageIncludes(null);
      return;
    }

    if (hint) hint.classList.add("is-hidden");

    var base;
    if (pkgVal === "kanto_day") {
      var kr = valRadio("kanto_route") || "tk";
      base = Object.prototype.hasOwnProperty.call(KANTO_ROUTE_EX, kr) ? KANTO_ROUTE_EX[kr] : KANTO_ROUTE_EX.tk;
    } else {
      base = PKG[pkgVal];
    }
    var dress = DRESS[valDress()] || 0;
    var bts = BTS[valRadio("addon_bts") || "bts_none"] || 0;
    var kim = KIM[valRadio("addon_kimono") || "k_none"] || 0;
    var shiroEl = form.querySelector('[name="addon_shiro"]');
    var shiro = shiroEl && shiroEl.checked ? 50000 : 0;
    var addons = dress + bts + kim + shiro;

    var totalEx = base + addons;
    var tax = Math.round(totalEx * 0.1);
    var totalIn = totalEx + tax;

    if (planEl) planEl.textContent = fmtYen(base);
    if (addEl) addEl.textContent = fmtYen(addons);
    if (exEl) exEl.textContent = fmtYen(totalEx);
    if (taxEl) taxEl.textContent = fmtYen(tax);
    if (inEl) inEl.textContent = fmtYen(totalIn);
    if (hxEx) hxEx.value = String(totalEx);
    if (hxIn) hxEx.value = String(totalIn);
    if (hxAd) hxAd.value = String(addons);
    syncPkgHighlight();
    renderPackageIncludes(pkgVal);
  }

  function onFormChange() {
    updateTotals();
  }

  form.addEventListener("change", onFormChange);
  form.addEventListener("input", onFormChange);
  updateTotals();

  var langSel = document.getElementById("lang-select");
  if (langSel) {
    langSel.addEventListener("change", function () {
      setTimeout(function () {
        updateTotals();
      }, 0);
    });
  }
})();

/** Checkout phases: build order → personal details → online payment. */
(function () {
  var form = document.getElementById("reserve-form");
  if (!form) return;

  var stepOpts = document.getElementById("reserve-step-options");
  var includesPanel = document.getElementById("reserve-includes-panel");
  var stepSched = document.getElementById("reserve-step-schedule");
  var stepDetails = document.getElementById("reserve-step-details");
  var stepPayment = document.getElementById("reserve-step-payment");
  var stepModel = document.getElementById("reserve-step-model");
  var changePkgBtn = document.getElementById("reserve-change-package");
  var dateInput = document.getElementById("reserve-date");
  var dateErr = document.getElementById("reserve-date-error");
  var btnToDetails = document.getElementById("reserve-btn-to-details");
  var btnToPayment = document.getElementById("reserve-btn-to-payment");
  var btnBackConfig = document.getElementById("reserve-back-to-config");
  var btnBackPayment = document.getElementById("reserve-back-from-payment");
  var nameInput = document.getElementById("reserve-name");
  var emailInput = document.getElementById("reserve-email");
  var wizardSteps = form.querySelectorAll(".reserve-wizard-nav__step[data-checkout-wizard]");

  function selectedPackage() {
    var el = form.querySelector('input[name="photo_package"]:checked');
    return el && el.value ? String(el.value) : "";
  }

  function hasDate() {
    return !!(dateInput && String(dateInput.value || "").length >= 8);
  }

  function getPhase() {
    return form.getAttribute("data-checkout-phase") || "config";
  }

  function setPhase(phase) {
    form.setAttribute("data-checkout-phase", phase);
    if (stepDetails) stepDetails.hidden = phase === "config";
    if (stepPayment) stepPayment.hidden = phase !== "payment";
    syncCheckoutWizardNav();
  }

  function syncCheckoutWizardNav() {
    var phase = getPhase();
    var order = ["config", "details", "payment"];
    var idx = order.indexOf(phase);
    if (idx < 0) idx = 0;
    for (var i = 0; i < wizardSteps.length; i++) {
      var li = wizardSteps[i];
      li.classList.toggle("is-done", i < idx);
      li.classList.toggle("is-current", i === idx);
    }
  }

  function hideDateError() {
    if (dateErr) dateErr.classList.add("visually-hidden");
  }

  function refreshPkgGate() {
    var pkg = selectedPackage();
    var unlocked = !!pkg;

    if (stepOpts) stepOpts.hidden = !unlocked;
    form.classList.toggle("reserve-form--has-pkg", unlocked);
    if (stepSched) {
      if (unlocked) stepSched.removeAttribute("inert");
      else stepSched.setAttribute("inert", "");
    }

    if (btnToDetails) {
      var canContinue = unlocked && hasDate();
      btnToDetails.disabled = !canContinue;
      btnToDetails.setAttribute("aria-disabled", canContinue ? "false" : "true");
    }

    if (hasDate()) hideDateError();
  }

  function scrollTo(el) {
    if (!el) return;
    try {
      var reduce =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    } catch (err) {}
  }

  form.addEventListener("change", function (e) {
    if (e.target && e.target.name === "photo_package") {
      refreshPkgGate();
      if (selectedPackage()) {
        setTimeout(function () {
          if (includesPanel && !includesPanel.hidden) {
            scrollTo(includesPanel);
          }
        }, 120);
      }
    }
  });

  if (dateInput) {
    dateInput.addEventListener("change", function () {
      refreshPkgGate();
      if (hasDate()) hideDateError();
    });
    dateInput.addEventListener("input", function () {
      refreshPkgGate();
      if (hasDate()) hideDateError();
    });
  }

  if (btnToDetails && stepDetails) {
    btnToDetails.addEventListener("click", function () {
      if (!selectedPackage() || !hasDate()) {
        if (dateErr) dateErr.classList.remove("visually-hidden");
        return;
      }
      hideDateError();
      setPhase("details");
      setTimeout(function () {
        scrollTo(stepDetails);
        if (nameInput) {
          try {
            nameInput.focus();
          } catch (e2) {}
        }
      }, 80);
    });
  }

  function externalReservePaymentUrl() {
    try {
      if (typeof window.MASHIRO_RESERVE_PAYMENT_URL === "string") {
        var w = String(window.MASHIRO_RESERVE_PAYMENT_URL).trim();
        if (w) return w;
      }
    } catch (e0) {}
    return String(form.getAttribute("data-reserve-payment-url") || "").trim();
  }

  function isHttpUrlForRedirect(url) {
    try {
      var u = new URL(url, window.location.href);
      return u.protocol === "https:" || u.protocol === "http:";
    } catch (e1) {
      return false;
    }
  }

  if (btnToPayment && stepPayment) {
    btnToPayment.addEventListener("click", function () {
      if (nameInput && !nameInput.checkValidity()) {
        nameInput.reportValidity();
        return;
      }
      if (emailInput && !emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
      }
      var payUrl = externalReservePaymentUrl();
      if (payUrl && isHttpUrlForRedirect(payUrl)) {
        window.location.assign(payUrl);
        return;
      }
      setPhase("payment");
      setTimeout(function () {
        scrollTo(stepPayment);
      }, 80);
    });
  }

  if (btnBackConfig) {
    btnBackConfig.addEventListener("click", function () {
      setPhase("config");
      setTimeout(function () {
        scrollTo(stepSched || stepModel);
      }, 80);
    });
  }

  if (btnBackPayment && stepDetails) {
    btnBackPayment.addEventListener("click", function () {
      setPhase("details");
      setTimeout(function () {
        scrollTo(stepDetails);
      }, 80);
    });
  }

  if (changePkgBtn && stepModel) {
    changePkgBtn.addEventListener("click", function () {
      setPhase("config");
      scrollTo(stepModel);
      var radios = form.querySelectorAll('input[name="photo_package"]');
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          try {
            radios[i].focus();
          } catch (e2) {}
          break;
        }
      }
    });
  }

  form.setAttribute("data-checkout-phase", "config");
  if (stepDetails) stepDetails.hidden = true;
  if (stepPayment) stepPayment.hidden = true;
  refreshPkgGate();
  syncCheckoutWizardNav();
})();
