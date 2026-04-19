/**
 * Shared footer strip: OTHER CONTENTS (Plan / Campaign / Costume) + Reservation banner.
 * Injected once before <footer class="site-footer"> so all pages stay in sync.
 */
(function () {
  var STRIP_ATTR = "data-site-footer-strip";

  function mountFooterStrip() {
    if (document.querySelector("[" + STRIP_ATTR + "]")) return;
    var footer = document.querySelector("footer.site-footer");
    if (!footer || !footer.parentNode) return;

    var holder = document.createElement("div");
    holder.innerHTML =
      '<section class="campaign-other-contents" ' +
      STRIP_ATTR +
      ' aria-labelledby="site-footer-strip-other-h">' +
      '<h2 id="site-footer-strip-other-h" class="campaign-other-contents__label" data-i18n="campaign.otherContentsTitle">OTHER CONTENTS</h2>' +
      '<div class="campaign-other-contents__grid">' +
      '<a class="campaign-other-card" href="./plan.html" style="--campaign-card-image: url(https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&amp;fit=crop&amp;w=1200&amp;q=80);">' +
      '<span class="campaign-other-card__overlay" aria-hidden="true"></span>' +
      '<span class="campaign-other-card__inner">' +
      '<span class="campaign-other-card__row">' +
      '<span class="campaign-other-card__title" data-i18n="campaign.other1Title">PLAN</span>' +
      '<span class="campaign-other-card__deco" aria-hidden="true"><span class="campaign-other-card__deco-line"></span></span>' +
      "</span>" +
      '<span class="campaign-other-card__sub" data-i18n="campaign.other1Sub">Products &amp; packages</span>' +
      "</span></span></a>" +
      '<a class="campaign-other-card" href="./campaign.html" style="--campaign-card-image: url(https://images.unsplash.com/photo-1529634898451-1f3f0d89f495?auto=format&amp;fit=crop&amp;w=1200&amp;q=80);">' +
      '<span class="campaign-other-card__overlay" aria-hidden="true"></span>' +
      '<span class="campaign-other-card__inner">' +
      '<span class="campaign-other-card__row">' +
      '<span class="campaign-other-card__title" data-i18n="nav.campaignEvent">CAMPAIGN &amp; EVENT</span>' +
      '<span class="campaign-other-card__deco" aria-hidden="true"><span class="campaign-other-card__deco-line"></span></span>' +
      "</span>" +
      '<span class="campaign-other-card__sub" data-i18n="nav.subCampaignEvent">Seasonal fairs &amp; news</span>' +
      "</span></span></a>" +
      '<a class="campaign-other-card" href="./costume.html" style="--campaign-card-image: url(https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200);">' +
      '<span class="campaign-other-card__overlay" aria-hidden="true"></span>' +
      '<span class="campaign-other-card__inner">' +
      '<span class="campaign-other-card__row">' +
      '<span class="campaign-other-card__title campaign-other-card__title--costume" data-i18n="campaign.other3Title">COSTUME</span>' +
      '<span class="campaign-other-card__deco" aria-hidden="true"><span class="campaign-other-card__deco-line"></span></span>' +
      "</span>" +
      '<span class="campaign-other-card__sub" data-i18n="campaign.other3Sub">Outfits &amp; styling</span>' +
      "</span></span></a>" +
      "</div></section>" +
      '<section class="campaign-reserve-banner" aria-labelledby="site-footer-strip-reserve-h">' +
      '<div class="container campaign-reserve-banner__inner">' +
      '<h2 id="site-footer-strip-reserve-h" class="campaign-reserve-banner__display" data-i18n="campaign.reserveBannerTitle">Reservation</h2>' +
      '<p class="campaign-reserve-banner__sub" data-i18n="campaign.reserveBannerSub">Consultation booking &amp; inquiries</p>' +
      '<div class="campaign-reserve-banner__cols">' +
      '<div class="campaign-reserve-banner__col">' +
      '<p class="campaign-reserve-banner__col-label" data-i18n="campaign.reserveWebHeading">Web reservation &amp; inquiries</p>' +
      '<div class="campaign-reserve-banner__btns">' +
      '<a class="campaign-reserve-btn campaign-reserve-btn--primary" href="./reserve.html" data-i18n="campaign.reserveBtnReserve">Book a consultation</a>' +
      '<a class="campaign-reserve-btn campaign-reserve-btn--whatsapp" href="https://wa.me/819083038369" target="_blank" rel="noopener noreferrer" data-i18n="campaign.reserveBtnWhatsapp">Chat on WhatsApp</a>' +
      '<a class="campaign-reserve-btn campaign-reserve-btn--wechat" href="./contact.html#wechat" data-i18n="campaign.reserveBtnWechat">WeChat</a>' +
      '<a class="campaign-reserve-btn campaign-reserve-btn--x" href="https://x.com/photour_mi" target="_blank" rel="noopener noreferrer" data-i18n="campaign.reserveBtnX">X</a>' +
      '<a class="campaign-reserve-btn campaign-reserve-btn--dark" href="./contact.html" data-i18n="campaign.reserveBtnContact">Contact</a>' +
      "</div></div>" +
      '<div class="campaign-reserve-banner__divider" aria-hidden="true"></div>' +
      '<div class="campaign-reserve-banner__col campaign-reserve-banner__col--phone">' +
      '<p class="campaign-reserve-banner__col-label" data-i18n="campaign.reservePhoneHeading">Phone inquiries</p>' +
      '<p class="campaign-reserve-banner__phone" data-i18n="campaign.reservePhoneNumber">—</p>' +
      '<p class="campaign-reserve-banner__hours" data-i18n="campaign.reservePhoneHours">10:00–18:00 · Closed Wednesdays</p>' +
      "</div></div></div></section>";

    while (holder.firstChild) {
      footer.parentNode.insertBefore(holder.firstChild, footer);
    }

    var pack = window.MashiroI18n;
    if (pack && typeof pack.apply === "function") {
      pack.apply(typeof pack.detect === "function" ? pack.detect() : "en");
    }
  }

  document.addEventListener("DOMContentLoaded", mountFooterStrip);
})();
