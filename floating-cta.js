(function () {
  function mountFloatCta() {
    if (document.querySelector(".hero-float-cta")) return;

    var page = (document.body && document.body.getAttribute("data-page")) || "";
    if (page === "ai-chat") return;

    var aside = document.createElement("aside");
    aside.className = "hero-float-cta";
    aside.id = "site-float-cta";
    aside.setAttribute("data-i18n-aria", "common.floatCtaAria");

    var btnAi = document.createElement("a");
    btnAi.className = "hero-circle hero-circle--sand";
    btnAi.id = "site-float-ai-open";
    btnAi.href = "./ai-chat.html";

    var stack1 = document.createElement("span");
    stack1.className = "hero-circle__stack";
    var line1 = document.createElement("span");
    line1.className = "hero-circle__line";
    line1.setAttribute("data-i18n", "common.floatAiTitle");
    line1.textContent = "AI CHAT";
    var sub1 = document.createElement("span");
    sub1.className = "hero-circle__sub";
    sub1.setAttribute("data-i18n", "common.floatAiSub");
    sub1.textContent = "Ask anything";
    stack1.appendChild(line1);
    stack1.appendChild(sub1);
    btnAi.appendChild(stack1);

    var aRes = document.createElement("a");
    aRes.className = "hero-circle hero-circle--dark";
    aRes.href = "./reserve.html";
    if (page === "reserve") aRes.setAttribute("aria-current", "page");

    var stack2 = document.createElement("span");
    stack2.className = "hero-circle__stack";
    var line2 = document.createElement("span");
    line2.className = "hero-circle__line";
    line2.setAttribute("data-i18n", "index.hero.circleReserve");
    line2.textContent = "RESERVE";
    var sub2 = document.createElement("span");
    sub2.className = "hero-circle__sub";
    sub2.setAttribute("data-i18n", "index.hero.circleReserveSub");
    sub2.textContent = "Book a consultation";
    stack2.appendChild(line2);
    stack2.appendChild(sub2);
    aRes.appendChild(stack2);

    aside.appendChild(btnAi);
    aside.appendChild(aRes);
    document.body.appendChild(aside);

    var pack = window.MashiroI18n;
    if (pack && typeof pack.apply === "function") {
      pack.apply(typeof pack.detect === "function" ? pack.detect() : "en");
    }
  }

  document.addEventListener("DOMContentLoaded", mountFloatCta);
})();
