/**
 * Mashiro Visuals — simplified premium booking flow (no checkout).
 * State only; submits via WhatsApp + optional mailto / contact handoff.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "mv_booking_draft_v1";
  var WA_NUMBER = "819083038369";

  var LOCATIONS = {
    tokyo: {
      id: "tokyo",
      title: "Tokyo Prewedding",
      hero:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=82",
      lead:
        "Editorial city light, calm direction, and a day shaped around how you move together—not a fixed tourist route.",
      story: [
        "We read Tokyo through season, crowd flow, and the quality of light—sometimes quiet and minimal, sometimes bold and cinematic.",
        "Hair, makeup, private transport, and location planning are woven into every tier. You choose how wide the story should be.",
      ],
      plans: [
        {
          id: "essential",
          name: "Essential",
          fullName: "Tokyo Prewedding Essential",
          price: "¥148,000",
          note: "One daytime location · one styling look · focused coverage",
        },
        {
          id: "night",
          name: "+ Night",
          fullName: "Tokyo Prewedding + Night",
          price: "¥198,000",
          note: "Daytime plus Tokyo night · one look · strong city atmosphere",
          featured: true,
        },
        {
          id: "signature",
          name: "Signature",
          fullName: "Tokyo Signature",
          price: "¥248,000",
          note: "Up to three locations · day and night · two looks · full-day story",
        },
      ],
    },
    fuji: {
      id: "fuji",
      title: "Mt. Fuji Prewedding",
      hero:
        "https://images.unsplash.com/photo-1576678927114-204c6a782d56?auto=format&fit=crop&w=1800&q=82",
      lead: "Lakes, open views, and private-car pacing around Japan’s most iconic mountain.",
      story: [
        "Full-day hair and makeup, two dresses and two looks, and curated lakeside routes—built for scale and stillness in the same frame.",
        "This destination is offered as one complete package; add-ons below let you extend or enrich the day.",
      ],
      plans: [
        {
          id: "destination",
          name: "Destination package",
          fullName: "Mt. Fuji Prewedding",
          price: "¥288,000",
          note: "Private car · 7:00–18:00 · 400+ files, 30 retouched (confirm at booking)",
        },
      ],
    },
    hokkaido: {
      id: "hokkaido",
      title: "Hokkaido Prewedding",
      hero:
        "https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1800",
      lead: "Northern colour, travel rhythm, and routes around Sapporo and Otaru.",
      story: [
        "Private car, full-day hair and makeup, and two looks—photography shaped for north-country scale.",
        "Offered as one complete package; optional add-ons are quoted to match your season and route.",
      ],
      plans: [
        {
          id: "destination",
          name: "Destination package",
          fullName: "Hokkaido Prewedding",
          price: "¥308,000",
          note: "Private car · 8:00–18:00 · 400+ files, 30 retouched (confirm at booking)",
        },
      ],
    },
  };

  var ADDONS = [
    {
      id: "night_upgrade",
      label: "Night upgrade",
      hint: "Add evening coverage (Tokyo Essential only; otherwise confirm at consult).",
      onlyTokyoEssential: true,
    },
    { id: "extra_hours", label: "Extra hours", hint: "Extend service time — final quote after routing." },
    { id: "video", label: "Behind-the-scenes video", hint: "Optional film add-on, delivered after photos." },
    { id: "dress", label: "Additional dress / look", hint: "Wardrobe extension — studio fitting applies." },
  ];

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function getState() {
    try {
      var raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { step: 1, location: null, plan: null, addons: {} };
  }

  function setState(next) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {}
  }

  function loc() {
    return LOCATIONS[state.location];
  }

  function planObj() {
    var L = loc();
    if (!L || !state.plan) return null;
    for (var i = 0; i < L.plans.length; i++) {
      if (L.plans[i].id === state.plan) return L.plans[i];
    }
    return null;
  }

  var state;

  function setStep(n) {
    state.step = n;
    setState(state);
    render();
    var main = document.getElementById("book-flow-main");
    if (main) {
      try {
        main.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (e) {
        main.scrollIntoView(true);
      }
    }
  }

  function renderProgress() {
    var steps = $all(".book-flow__progress-step");
    steps.forEach(function (el) {
      var s = parseInt(el.getAttribute("data-progress-step"), 10);
      el.classList.toggle("is-done", s < state.step);
      el.classList.toggle("is-current", s === state.step);
    });
    var label = $(".book-flow__progress-label");
    if (label) {
      var names = ["Location", "Experience", "Add-ons", "Send"];
      if (state.step >= 5) label.textContent = "Thank you";
      else label.textContent = names[state.step - 1] || "";
    }
  }

  function renderStep1() {
    var root = $("#book-step-location");
    if (!root) return;
    root.hidden = state.step !== 1;
  }

  function renderStep2() {
    var root = $("#book-step-experience");
    if (!root) return;
    root.hidden = state.step !== 2;
    if (state.step !== 2 || !state.location) return;
    var L = loc();
    var heroImg = $("#book-hero-img");
    if (heroImg) {
      heroImg.src = L.hero;
      heroImg.alt = "";
    }
    $("#book-loc-title").textContent = L.title;
    $("#book-loc-lead").textContent = L.lead;
    var storyEl = $("#book-loc-story");
    if (storyEl) {
      storyEl.innerHTML = "";
      L.story.forEach(function (p) {
        var el = document.createElement("p");
        el.className = "book-flow__prose";
        el.textContent = p;
        storyEl.appendChild(el);
      });
    }
    var grid = $("#book-plan-grid");
    if (!grid) return;
    grid.innerHTML = "";
    L.plans.forEach(function (p) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "book-flow__plan" + (p.featured ? " book-flow__plan--featured" : "");
      btn.setAttribute("data-plan-id", p.id);
      btn.innerHTML =
        '<span class="book-flow__plan-name">' +
        p.name +
        "</span>" +
        '<span class="book-flow__plan-full">' +
        p.fullName +
        "</span>" +
        '<span class="book-flow__plan-price">' +
        p.price +
        "</span>" +
        '<span class="book-flow__plan-note">' +
        p.note +
        "</span>";
      if (state.plan === p.id) btn.classList.add("is-selected");
      btn.addEventListener("click", function () {
        state.plan = p.id;
        setState(state);
        $all(".book-flow__plan", grid).forEach(function (b) {
          b.classList.toggle("is-selected", b.getAttribute("data-plan-id") === p.id);
        });
      });
      grid.appendChild(btn);
    });
  }

  function showAddonRow(a) {
    if (a.onlyTokyoEssential) {
      return state.location === "tokyo" && state.plan === "essential";
    }
    return true;
  }

  function renderStep3() {
    var root = $("#book-step-addons");
    if (!root) return;
    root.hidden = state.step !== 3;
    if (state.step !== 3) return;
    var list = $("#book-addon-list");
    list.innerHTML = "";
    ADDONS.forEach(function (a) {
      if (!showAddonRow(a)) return;
      var row = document.createElement("label");
      row.className = "book-flow__addon";
      var id = "addon-" + a.id;
      var checked = !!state.addons[a.id];
      row.innerHTML =
        '<input type="checkbox" id="' +
        id +
        '" name="addon" data-addon="' +
        a.id +
        '"' +
        (checked ? " checked" : "") +
        " />" +
        '<span class="book-flow__addon-ui" aria-hidden="true"></span>' +
        '<span class="book-flow__addon-text">' +
        '<span class="book-flow__addon-label">' +
        a.label +
        "</span>" +
        '<span class="book-flow__addon-hint">' +
        a.hint +
        "</span></span>";
      var input = row.querySelector("input");
      input.addEventListener("change", function () {
        state.addons[a.id] = input.checked;
        setState(state);
      });
      list.appendChild(row);
    });
  }

  function summaryLines() {
    var lines = [];
    var L = loc();
    var P = planObj();
    lines.push("Mashiro Visuals — prewedding inquiry");
    lines.push("Location: " + (L ? L.title : "—"));
    lines.push("Plan: " + (P ? P.fullName + " (" + P.price + ")" : "—"));
    var addNames = [];
    ADDONS.forEach(function (a) {
      if (state.addons[a.id]) addNames.push(a.label);
    });
    lines.push("Add-ons: " + (addNames.length ? addNames.join(", ") : "None selected"));
    return lines.join("\n");
  }

  function renderStep4() {
    var root = $("#book-step-send");
    if (!root) return;
    root.hidden = state.step !== 4;
    if (state.step !== 4) return;
    var pre = $("#book-summary-text");
    if (pre) pre.textContent = summaryLines();
  }

  function renderStep5() {
    var root = $("#book-step-done");
    if (!root) return;
    root.hidden = state.step !== 5;
  }

  function render() {
    renderProgress();
    renderStep1();
    renderStep2();
    renderStep3();
    renderStep4();
    renderStep5();
    var back = $("#book-btn-back");
    var next = $("#book-btn-next");
    if (back) back.hidden = state.step === 1 || state.step === 5;
    if (next) {
      next.hidden = state.step === 5 || state.step === 1;
      if (state.step < 4) {
        next.textContent = "Continue";
        next.classList.remove("btn-primary");
        next.classList.add("btn-primary");
      } else {
        next.textContent = "Send inquiry";
      }
    }
    var bar = $(".book-flow__bar");
    if (bar) bar.hidden = state.step === 5;
  }

  function validateStep() {
    if (state.step === 1) return !!state.location;
    if (state.step === 2) return !!state.plan;
    return true;
  }

  function goNext() {
    if (!validateStep()) {
      if (state.step === 2) alert("Please choose a plan to continue.");
      return;
    }
    if (state.step === 4) {
      var name = ($("#book-final-name") && $("#book-final-name").value) || "";
      var email = ($("#book-final-email") && $("#book-final-email").value) || "";
      var date = ($("#book-final-date") && $("#book-final-date").value) || "";
      var msg = ($("#book-final-notes") && $("#book-final-notes").value) || "";
      if (!name.trim() || !email.trim()) {
        alert("Please add your name and email so we can reply.");
        return;
      }
      var body =
        summaryLines() +
        "\n\n" +
        "Name: " +
        name.trim() +
        "\n" +
        "Email: " +
        email.trim() +
        "\n" +
        "Preferred timing: " +
        (date.trim() || "—") +
        "\n\n" +
        "Notes:\n" +
        (msg.trim() || "—");
      var wa = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(body);
      window.open(wa, "_blank", "noopener,noreferrer");
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
      state = { step: 5, location: null, plan: null, addons: {} };
      render();
      var mainEl = document.getElementById("book-flow-main");
      if (mainEl) {
        try {
          mainEl.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (e2) {
          mainEl.scrollIntoView(true);
        }
      }
      return;
    }
    setStep(Math.min(5, state.step + 1));
  }

  function goBack() {
    if (state.step <= 1) return;
    setStep(state.step - 1);
  }

  function initFromQuery() {
    var params = new URLSearchParams(window.location.search);
    var l = params.get("location") || params.get("l");
    if (l && LOCATIONS[l]) {
      state.location = l;
      state.step = 2;
      state.plan = null;
      state.addons = {};
      setState(state);
    }
  }

  function bind() {
    $all("[data-location]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-location");
        if (!LOCATIONS[id]) return;
        state.location = id;
        state.plan = null;
        state.addons = {};
        setState(state);
        setStep(2);
      });
    });
    var back = $("#book-btn-back");
    var next = $("#book-btn-next");
    if (back) back.addEventListener("click", goBack);
    if (next) next.addEventListener("click", goNext);

    $("#book-reset") &&
      $("#book-reset").addEventListener("click", function () {
        state = { step: 1, location: null, plan: null, addons: {} };
        setState(state);
        setStep(1);
      });
  }

  state = getState();
  initFromQuery();
  bind();
  render();
})();
