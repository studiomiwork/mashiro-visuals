/**
 * Mashiro AI consult: keyword-based multilingual replies.
 * - Default: slide-over panel from floating CTA / [data-ai-consult-open].
 * - Full page: body[data-page="ai-chat"] with #ai-consult-page in the document.
 * Optional backend: <body data-ai-chat-endpoint="https://..."> POST JSON { q, lang } → { reply } string.
 */
(function () {
  var WA = "https://wa.me/819083038369";
  var PAGE = (document.body && document.body.getAttribute("data-page")) || "";

  function t(key) {
    var M = window.MashiroI18n;
    if (!M || typeof M.get !== "function") return "";
    var lang = typeof M.detect === "function" ? M.detect() : "en";
    return M.get(key, lang) || "";
  }

  function hasNeedle(raw, needle) {
    var a = String(raw || "").toLowerCase();
    var b = String(raw || "");
    var n = needle.toLowerCase();
    return a.indexOf(n) !== -1 || b.indexOf(needle) !== -1;
  }

  function pickReply(qRaw) {
    var rules = [
      {
        keys: [
          "price",
          "cost",
          "how much",
          "¥",
          "yen",
          "budget",
          "料金",
          "いくら",
          "見積",
          "予算",
          "价格",
          "價格",
          "多少",
          "費用",
          "報價",
          "가격",
          "얼마",
          "비용",
          "цен",
          "стоим",
          "сколько",
          "precio",
          "cuánto",
          "cuanto",
        ],
        key: "common.aiReplyPricing",
      },
      {
        keys: [
          "tokyo",
          "kyoto",
          "fuji",
          "kamakura",
          "hokkaido",
          "karuizawa",
          "nikko",
          "shonan",
          "location",
          "where",
          "地點",
          "地点",
          "東京",
          "京都",
          "富士",
          "鎌倉",
          "北海道",
          "湘南",
          "로케이션",
          "촬영지",
          "지역",
          "локац",
          "ubicación",
          "ubicacion",
          "región",
          "region",
        ],
        key: "common.aiReplyLocations",
      },
      {
        keys: [
          "book",
          "reserve",
          "booking",
          "schedule",
          "date",
          "預約",
          "预约",
          "予約",
          "예약",
          "일정",
          "брон",
          "запис",
          "reserv",
          "cita",
        ],
        key: "common.aiReplyBooking",
      },
      {
        keys: [
          "deliver",
          "gallery",
          "photo",
          "retouch",
          "file",
          "turnaround",
          "納品",
          "精修",
          "張數",
          "照片",
          "납품",
          "리터치",
          "достав",
          "ретуш",
          "кадр",
          "entrega",
          "archivo",
          "retoque",
        ],
        key: "common.aiReplyDeliver",
      },
      {
        keys: [
          "weather",
          "rain",
          "snow",
          "天氣",
          "天气",
          "下雨",
          "天候",
          "悪天候",
          "날씨",
          "눈",
          "비",
          "погод",
          "дожд",
          "снег",
          "clima",
          "lluvia",
          "nieve",
        ],
        key: "common.aiReplyWeather",
      },
      {
        keys: [
          "whatsapp",
          "human",
          "person",
          "contact",
          "email",
          "人工",
          "真人",
          "担当",
          "연락",
          "담당",
          "человек",
          "менедж",
          "correo",
          "humano",
        ],
        key: "common.aiReplyWhatsApp",
      },
    ];

    for (var i = 0; i < rules.length; i++) {
      var r = rules[i];
      for (var j = 0; j < r.keys.length; j++) {
        if (hasNeedle(qRaw, r.keys[j])) return t(r.key);
      }
    }
    return t("common.aiReplyDefault");
  }

  function wireChatUi(root) {
    if (!root || root.getAttribute("data-ai-wired") === "1") return;

    var messagesEl = root.querySelector("#ai-consult-messages");
    var form = root.querySelector("#ai-consult-form");
    var input = root.querySelector("#ai-consult-input");
    if (!messagesEl || !form || !input) return;

    function appendRow(text, who) {
      var row = document.createElement("div");
      row.className = "ai-consult__row ai-consult__row--" + who;
      row.textContent = text;
      messagesEl.appendChild(row);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function appendThinking() {
      var row = document.createElement("div");
      row.className = "ai-consult__row ai-consult__row--bot ai-consult__row--thinking";
      row.id = "ai-consult-thinking";
      row.textContent = t("common.aiThinking");
      messagesEl.appendChild(row);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function removeThinking() {
      var th = root.querySelector("#ai-consult-thinking");
      if (th) th.remove();
    }

    function welcome() {
      if (!messagesEl.childNodes.length) appendRow(t("common.aiWelcome"), "bot");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = input.value.trim();
      if (!text) return;
      appendRow(text, "user");
      input.value = "";

      var ep = document.body.getAttribute("data-ai-chat-endpoint");
      if (ep) {
        appendThinking();
        var lang =
          window.MashiroI18n && typeof window.MashiroI18n.detect === "function"
            ? window.MashiroI18n.detect()
            : "en";
        fetch(ep, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q: text, lang: lang }),
        })
          .then(function (r) {
            return r.json();
          })
          .then(function (data) {
            removeThinking();
            var reply = data && typeof data.reply === "string" ? data.reply : pickReply(text);
            appendRow(reply, "bot");
          })
          .catch(function () {
            removeThinking();
            appendRow(pickReply(text), "bot");
          });
        return;
      }

      appendThinking();
      window.setTimeout(function () {
        removeThinking();
        appendRow(pickReply(text), "bot");
      }, 320);
    });

    root.setAttribute("data-ai-wired", "1");
    root._aiWelcome = welcome;
  }

  function ensurePanel() {
    var existing = document.getElementById("ai-consult-root");
    if (existing) {
      wireChatUi(existing);
      return existing;
    }

    var root = document.createElement("div");
    root.id = "ai-consult-root";
    root.className = "ai-consult";
    root.setAttribute("hidden", "");
    root.innerHTML =
      '<div class="ai-consult__backdrop" data-ai-consult-close tabindex="-1"></div>' +
      '<div class="ai-consult__panel" role="dialog" aria-modal="true" aria-labelledby="ai-consult-title">' +
      '<div class="ai-consult__head">' +
      '<h2 id="ai-consult-title" class="ai-consult__title" data-i18n="common.aiPanelTitle">AI</h2>' +
      '<button type="button" class="ai-consult__close" data-ai-consult-close data-i18n-aria="common.aiPanelCloseAria" aria-label="Close">&times;</button>' +
      "</div>" +
      '<div class="ai-consult__messages" id="ai-consult-messages" aria-live="polite"></div>' +
      '<p class="ai-consult__disclaimer" data-i18n="common.aiDisclaimer"></p>' +
      '<a class="ai-consult__wa" href="' +
      WA +
      '" target="_blank" rel="noopener noreferrer"><span data-i18n="common.aiWhatsAppCta">WhatsApp</span></a>' +
      '<form class="ai-consult__form" id="ai-consult-form">' +
      '<input type="text" class="ai-consult__input" id="ai-consult-input" autocomplete="off" data-i18n-placeholder="common.aiPlaceholder" placeholder="" />' +
      '<button type="submit" class="ai-consult__submit" data-i18n="common.aiSend">Send</button>' +
      "</form>" +
      "</div>";

    document.body.appendChild(root);

    var pack = window.MashiroI18n;
    if (pack && typeof pack.apply === "function") {
      pack.apply(typeof pack.detect === "function" ? pack.detect() : "en");
    }

    wireChatUi(root);

    function openPanel() {
      root.removeAttribute("hidden");
      document.body.classList.add("ai-consult-open");
      var inp = root.querySelector("#ai-consult-input");
      if (inp)
        setTimeout(function () {
          inp.focus();
        }, 80);
    }

    function closePanel() {
      root.setAttribute("hidden", "");
      document.body.classList.remove("ai-consult-open");
      var opener = document.getElementById("site-float-ai-open");
      if (opener) opener.focus();
    }

    root.addEventListener("click", function (e) {
      if (e.target && e.target.getAttribute("data-ai-consult-close") != null) closePanel();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !root.hasAttribute("hidden")) closePanel();
    });

    root._aiOpen = openPanel;
    root._aiClose = closePanel;

    return root;
  }

  function initAiChatPage() {
    var pageRoot = document.getElementById("ai-consult-page");
    if (!pageRoot) return;

    wireChatUi(pageRoot);
    if (typeof pageRoot._aiWelcome === "function") pageRoot._aiWelcome();

    var pack = window.MashiroI18n;
    if (pack && typeof pack.apply === "function") {
      pack.apply(typeof pack.detect === "function" ? pack.detect() : "en");
    }

    var inp = document.getElementById("ai-consult-input");
    if (inp)
      setTimeout(function () {
        inp.focus();
      }, 120);
  }

  if (PAGE === "ai-chat") {
    document.addEventListener("DOMContentLoaded", initAiChatPage);
    return;
  }

  document.addEventListener("click", function (e) {
    var el = e.target;
    if (!el || !el.closest) return;
    var openEl = el.closest("#site-float-ai-open, [data-ai-consult-open]");
    if (!openEl) return;
    if (openEl.tagName === "A") {
      var href = openEl.getAttribute("href") || "";
      if (href && href !== "#") return;
    }
    e.preventDefault();
    var root = ensurePanel();
    if (root._aiWelcome) root._aiWelcome();
    if (root._aiOpen) root._aiOpen();
  });

  document.addEventListener("DOMContentLoaded", function () {
    var sel = document.getElementById("lang-select");
    if (sel) {
      sel.addEventListener("change", function () {
        var root = document.getElementById("ai-consult-root");
        if (!root || root.hasAttribute("hidden")) return;
        var M = window.MashiroI18n;
        if (M && typeof M.apply === "function") M.apply(sel.value);
      });
    }
  });
})();
