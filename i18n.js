/**
 * Mashiro Visuals — client-side i18n (English primary).
 * Supported: en, zh-TW, ja, ko, ru, es
 */
(function () {
  var STORAGE_KEY = "mashiro-lang";
  var DEFAULT_LANG = "en";
  var SUPPORTED = ["en", "zh-TW", "ja", "ko", "ru", "es"];

  var MESSAGES = {
    en: {
      nav: {
        home: "Home",
        elopement: "Elopement",
        outdoor: "Outdoor",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        plan: "Plan",
        gallery: "Gallery",
        costume: "COSTUME",
        subPlan: "Products & packages",
        subGallery: "Selected work",
        subCostume: "Outfits & styling",
        subAbout: "Our story",
        subContact: "Inquire & booking",
        menuTitle: "Menu",
        menuOpenAria: "Open menu",
        menuCloseAria: "Close menu",
        instagramAria: "Instagram",
        whatsappAria: "WhatsApp",
        wechatAria: "WeChat",
        xAria: "X",
        campaignEvent: "CAMPAIGN & EVENT",
        subCampaignEvent: "Seasonal fairs & news",
        ctaAiTitle: "AI CHAT",
        ctaAiSub: "Ask anything",
        ctaReserveTitle: "RESERVE",
        ctaReserveSub: "Book a consultation",
      },
      common: {
        langAria: "Language",
        floatCtaAria: "AI assistant and reservation shortcuts",
        floatAiTitle: "AI CHAT",
        floatAiSub: "Ask anything",
        aiPanelTitle: "Mashiro AI assistant",
        aiPanelCloseAria: "Close chat",
        aiWelcome:
          "Hi — I’m an automated assistant for Mashiro Visuals. Ask about packages, locations, booking, or timing. For a firm quote or contract, we’ll connect you with a human via WhatsApp or the reserve form.",
        aiPlaceholder: "Type your question…",
        aiSend: "Send",
        aiThinking: "Thinking…",
        aiDisclaimer:
          "Answers are automated and may be incomplete. Plans and prices are confirmed after human review.",
        aiReplyDefault:
          "Thanks for your message. Try asking about pricing, locations we cover, how to book, or delivery. You can also use WhatsApp from the site header for a personal reply.",
        aiReplyPricing:
          "Published plans and price bands are on the Plan page (tax notes included where shown). Final quotes depend on season, locations, and add-ons — Reserve or WhatsApp for a tailored estimate.",
        aiReplyLocations:
          "We often shoot around Tokyo, Shonan, Mt. Fuji & lakes, Kyoto, Kamakura, Hokkaido, Karuizawa, and Nikko — see Gallery → Location spots. Your route is shaped for light, weather, and pace.",
        aiReplyBooking:
          "Start from the RESERVE button, the Reserve page, or WhatsApp. We confirm dates and deliverables before any payment link.",
        aiReplyDeliver:
          "File counts, retouching, and turnaround are listed per package on the Plan pages and in your order summary after booking.",
        aiReplyWeather:
          "Outdoor days flex with weather — we plan buffer time where we can and prioritise safety; your consult covers backup ideas.",
        aiReplyWhatsApp:
          "For the fastest human answer, open WhatsApp from the header icons or the reservation strip and share your dates and region.",
        aiWhatsAppCta: "Open WhatsApp",
        aiBack: "Back to site",
        aiBackAria: "Back to home",
      },
      meta: {
        index: {
          title: "Mashiro Visuals | Japan Elopement & Outdoor Photography",
          description:
            "Wedding & elopement photography in Japan's wild places. Honest, cinematic—natural light, real emotion.",
        },
        elopement: {
          title: "Elopement | Mashiro Visuals",
          description:
            "Elopement and on-location wedding photography across Japan — routes, packages, and what to expect.",
        },
        ski: {
          title: "Outdoor Photography | Mashiro Visuals",
          description:
            "Outdoor couple and adventure stories in Japan — movement, weather-aware planning, cinematic stills.",
        },
        portfolio: {
          title: "Portfolio | Mashiro Visuals",
          description:
            "Selected location work from Tokyo, Mount Fuji, Hokkaido, Kamakura, studio days, and more.",
        },
        about: {
          title: "About | Mashiro Visuals",
          description:
            "Meet Miller / Mashiro — Japan-based photographer for elopements, outdoor weddings, and honest light.",
        },
        contact: {
          title: "Contact | Mashiro Visuals",
          description:
            "Reach Mashiro Visuals for dates, destinations, and budgets — form, WhatsApp, or WeChat.",
        },
        aiChat: {
          title: "AI assistant | Mashiro Visuals",
          description:
            "Chat with the Mashiro Visuals assistant about packages, locations, booking, and delivery in Japan.",
        },
        plan: {
          title: "Plan | Mashiro Visuals",
          description:
            "Packages and products for wedding and elopement photography in Japan.",
        },
        costume: {
          title: "Costume | Mashiro Visuals",
          description:
            "Browse dress, colour dress, kimono, and suit samples for Japan elopement & location shoots — consult for final lineup.",
        },
        campaign: {
          title: "Campaign & Event | Mashiro Visuals",
          description: "Seasonal campaigns, fairs, and studio events.",
        },
        reserve: {
          title: "Checkout | Mashiro Visuals",
          description:
            "Configure your photo package and add-ons, pick a date, and check out online. Secure payment on the next step.",
        },
      },
      index: {
        hero: {
          tagline: "Photo wedding · Japan",
          eyebrow: "Japan Wedding, Elopement & Outdoor Photography",
          h1: "Wedding & elopement in Japan — natural light, cinematic calm",
          lead:
            "Honest, cinematic wedding and elopement photography for couples who travel to Japan. Snow, mountains, and open air—without stiff posing, just you and the landscape. Natural light and real emotion.",
          ctaPortfolio: "View Portfolio",
          ctaInquire: "Inquire Now",
          circleReserve: "RESERVE",
          circleReserveSub: "Book a consultation",
          scrollAria: "Scroll to content",
          note: "Based in Japan. English inquiries welcome.",
        },
        featured: { cta: "Check our plan" },
        plan: {
          eyebrow: "Packages",
          h2: "Our Plan",
          lead:
            "Compare Tokyo, Fuji, Kanto day routes, add-ons, and what is included before you reserve.",
        },
        costume: {
          eyebrow: "Styling",
          h2: "Costume",
          body:
            "Wedding dress, colour dress, kimono, and suits — preview the wardrobe lineup for your shoot day.",
          btn: "Browse Costume",
        },
        combos: {
          h2: "Popular combinations",
          lead: "Starter pairings guests often book together.",
          c1Title: "Tokyo urban & second look",
          c1Body: "City skyline routes plus an outfit change — full-day pacing.",
          c2Title: "Fuji lakes day trip",
          c2Body: "Lakeside light and mountain backdrops in one session.",
          c3Title: "Kanto day route",
          c3Body: "Tokyo + Kamakura or Fuji + Hakone when you want two moods in one day.",
          c1Cta: "View Tokyo plan",
          c2Cta: "View Fuji plan",
          c3Cta: "View Kanto day plan",
        },
        galleryBand: {
          h2: "Gallery",
          lead:
            "Location work across Fuji, Tokyo, Hokkaido, Kamakura, and studio sets — open the full grid for albums.",
          btn: "Open Gallery",
        },
        endTiles: {
          flowTitle: "FLOW",
          flowSub: "Steps from inquiry to your shoot day.",
          faqTitle: "FAQ",
          faqSub: "Timing, weather buffers, outfits, and booking basics.",
        },
        about: {
          eyebrow: "About",
          h2: "I'm Miller, also known as Mashiro in Japan",
          body:
            "I specialize in elopement and outdoor stories across Japan, using natural light and real interactions. The style is cinematic, but never over-produced.",
          btn: "About Me",
        },
        why: {
          h2: "Why Work With Me",
          i1: {
            title: "Based in Japan",
            body:
              "I know the seasons, weather, and locations, making planning smooth and efficient.",
          },
          i2: {
            title: "Outdoor-Ready",
            body:
              "I move confidently in alpine terrain and capture key moments with safety in mind.",
          },
          i3: {
            title: "Natural Cinematic Style",
            body:
              "Less directing, more guidance. Genuine emotion over staged performance.",
          },
        },
        cta: {
          eyebrow: "Contact",
          h2: "Turn your Japan journey into a living, cinematic story",
          p: "Share your dates and destination ideas. I will send a tailored shooting proposal.",
          btn: "Send Inquiry",
        },
        campaign: {
          eyebrow: "CAMPAIGN & EVENT",
          ariaCarousel: "Campaigns and events",
          c1: {
            tag1: "EVENT",
            title: "Spring trial & consultation fair",
            body:
              "Limited dates — outfit upgrade perks and add-on options. Book a session to see packages.",
          },
          c2: {
            tag1: "CAMPAIGN",
            title: "Second dress complimentary",
            body: "For shoots scheduled within the campaign window — ask when you inquire.",
          },
          c3: {
            tag1: "EVENT",
            tag2: "NEW",
            title: "Online gallery walkthrough",
            body: "Short online session — see how we plan routes, light, and delivery.",
          },
          c4: {
            tag1: "EVENT",
            title: "Early-bird booking window",
            body:
              "A limited window for select dates — check availability and build your session online.",
          },
        },
        float: {
          eyebrow: "Locations",
          h2: "Location photos",
          lead:
            "Use the arrows or wait — each slide opens the same spot in Gallery; plans are linked from there.",
          ariaPrev: "Previous slide",
          ariaNext: "Next slide",
          c1: { title: "Mount Fuji" },
          c2: { title: "Tokyo" },
          c3: { title: "Hokkaido" },
          c4: { title: "Kamakura" },
        },
        footer: { line2: "Japan Elopement & Outdoor Photography" },
      },
      elopement: {
        hero: {
          eyebrow: "Elopement in Japan",
          h1: "Your vows, framed by nature",
          lead:
            "From Tokyo outskirts to Fuji, Hokkaido, and Karuizawa. Routes are customized by season and light.",
        },
        products: {
          h2: "Wedding & elopement packages",
          lead:
            "Coverage, deliverables, and travel notes for each line. All include a private online gallery and print-ready files.",
          fuji: {
            title: "Mount Fuji — Wedding & elopement",
            price: "From ¥180,000",
            b1: "Lakeside and fifth-station routes; sunrise and golden-hour windows",
            b2: "500+ edited images; timeline planned around weather and crowds",
            b3: "Iconic peak backdrops and wide landscape portraits",
          },
          kyoto: {
            title: "Kyoto — Wedding & elopement",
            price: "From ¥200,000",
            b1: "Gion, Arashiyama, bamboo groves, and temple gardens (permits where required)",
            b2: "Classic kimono or modern dress; quiet morning slots available",
            b3: "Heritage streets, stone paths, and seasonal maples or blossoms",
          },
          hokkaido: {
            title: "Hokkaido — Wedding & elopement",
            price: "From ¥280,000",
            b1: "Snow fields, ski areas, and open coastlines — full-day coverage",
            b2: "700+ images; cold-weather guidance and flexible routing",
            b3: "Second shooter available; strong winter bridal portraits",
          },
          kamakura: {
            title: "Kamakura — Wedding & elopement",
            price: "From ¥160,000",
            b1: "Shrines, bamboo paths, and coastline — easy day trip from Tokyo",
            b2: "Half- to full-day options; relaxed pacing for couples and families",
            b3: "Ocean breeze, torii gates, and forest trails in one compact area",
          },
        },
      },
      ski: {
        hero: {
          eyebrow: "Outdoor Photography",
          h1: "Speed, weather, and emotion in one frame",
          lead:
            "For outdoor lovers and adventure couples. Motion-led sessions with a cinematic narrative.",
        },
        price1: { title: "Solo / Couple Outdoor Session", price: "From ¥80,000" },
        price2: { title: "Mountain Story Session", price: "From ¥120,000" },
        cta: {
          h2: "Tell me where you want to go",
          p: "I will share route, timing, and shooting guidance so everything feels safe and effortless.",
          btn: "Inquire Now",
        },
      },
      portfolio: {
        hero: {
          eyebrow: "Portfolio",
          h1: "Real emotion, held in landscape",
          lead:
            "A curated selection of elopement, couples, and outdoor sessions with a natural narrative style.",
        },
        loc: {
          kicker: "LOCATION PHOTO",
          h1: "Location photography",
          h1sub: "Mashiro Visuals · Japan",
          lead:
            "On-location sessions across Japan — natural light, quiet framing, and space for real emotion.",
          intro:
            "Beyond the studio: routes we know by season, light, and crowd rhythm — so you can stay present while the landscape does the rest.",
          memo: "Memories",
          featureTitle: "FEATURE",
          featureLead: "What we bring to every on-location day.",
          f1n: "01",
          f1t: "Light & wardrobe",
          f1b:
            "Dress and suit choices aligned with your route; we plan timing so fabric, skin tone, and landscape read cleanly on camera.",
          f2n: "02",
          f2t: "Locations",
          f2b:
            "From urban lines to lakeside wind — we shortlist spots that match your story, then keep movement unhurried.",
          f3n: "03",
          f3t: "Direction",
          f3b:
            "Light posing and clear cues so you never guess what to do — the day stays yours, not a performance.",
          spotsTitle: "LOCATION SPOTS",
          spotsLead: "Regions we return to often for elopement & couples work.",
          spot1: "Tokyo · urban core",
          spot2: "Shonan · coast",
          spot3: "Mt. Fuji · lakes",
          spot4: "Kyoto · heritage streets",
          spot5: "Kamakura · shrine & sea",
          spot6: "Hokkaido · snow & open land",
          spot7: "Karuizawa · forest light",
          spot8: "Nikko · cedar roads",
          mosaicLabel: "PHOTO GALLERY",
          moreBtn: "VIEW MORE",
          spotPackagesLink: "Packages",
        },
        gallery: {
          title: "GALLERY",
          subtitle: "Photo gallery",
          catAll: "ALL",
          catStudio: "STUDIO PHOTO",
          catTokyo: "Tokyo",
          catFuji: "Mt. Fuji",
          catKamakura: "Kamakura",
          catKyoto: "Kyoto",
          catHokkaido: "Hokkaido",
          catOther: "Other",
          sortPopular: "Popular",
          sortNewest: "Newest",
          filterAria: "Filter gallery by category",
          sortAria: "Sort gallery",
          lightboxCloseAria: "Close gallery",
          lightboxPrevAria: "Previous photo",
          lightboxNextAria: "Next photo",
          lightboxFsEnterAria: "Enter fullscreen",
          lightboxFsExitAria: "Exit fullscreen",
          lightboxZoomInAria: "Zoom in",
          lightboxZoomOutAria: "Zoom out",
          lightboxCounter: "{current} / {total}",
        },
      },
      about: {
        hero: {
          eyebrow: "About Mashiro",
          h1: "I'm Miller, also known as Mashiro in Japan",
          lead:
            "I am a Japan-based photographer focused on elopement and outdoor stories with natural light and genuine interaction.",
        },
        c1: {
          title: "My approach",
          body:
            "Less directing, more guidance. You stay present with each other and the landscape, and the emotion follows naturally.",
        },
        c2: {
          title: "What I bring",
          body:
            "Local knowledge, outdoor mobility, and weather awareness. Sessions stay safer, smoother, and visually stronger.",
        },
      },
      plan: {
        hero: {
          eyebrow: "Plan",
          h1: "Packages & products",
          lead:
            "Browse options, pricing, and what is included for your photography in Japan.",
          brandNote:
            "All packages and prices are Mashiro Visuals offerings. Final quotes depend on season, locations, and add-ons.",
        },
        list: {
          kicker: "PHOTO WEDDING PLAN",
          sub1: "Everything you need is built into every plan.",
          sub2: "All-inclusive destination wedding photography across Japan.",
          viewDetails: "View details",
          priceLabel: "Price",
          yenSuffix: "円",
          taxExcludedTag: "(excl. tax)",
          taxIncludedTag: "(incl. tax)",
          taxNote: "",
        },
        detail: {
          back: "All plans",
          inquire: "Inquire about this plan",
          reserve: "Book a consultation",
        },
        pkg: {
          tokyo: {
            title: "Tokyo urban",
            cardTag1: "STUDIO",
            cardTag2: "TOKYO",
            priceExNum: "148,000",
            priceInNum: "162,800",
            body:
              "Private car; full-day hair and makeup; two wedding dresses and two looks. Service 8:00–18:00 (visit the studio early to choose gowns). Photography: studio plus Tokyo city locations—Tokyo Tower, Tokyo Station, Odaiba, Kasai Kaihin Park—with a refined urban mood. Delivery: 400+ files, 30 retouched. Typical add-ons: extra dress ¥20,000 · behind-the-scenes film ¥50,000 · couple kimono ¥50,000.",
          },
          shonan: {
            title: "Shonan coast",
            cardTag1: "COAST",
            cardTag2: "SHONAN",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "Same inclusions as Tokyo. Service 8:00–18:00. Locations include the coastal train crossing, Shonan shoreline, Enoshima, and beach—soft, lyrical seaside light. Delivery: 400+ files, 30 retouched. Add-ons mirror the Tokyo package.",
          },
          fuji: {
            title: "Mount Fuji & lakes",
            cardTag1: "LAKES",
            cardTag2: "MT. FUJI",
            priceExNum: "288,000",
            priceInNum: "316,800",
            body:
              "Private car; full-day hair and makeup; two dresses and two looks. Service 7:00–18:00; gowns chosen in advance at the studio. Lakeside photography around Mt. Fuji—Yamanakako, Kawaguchiko—plus private shoreline locations curated by Mashiro Visuals. Delivery: 400+ files, 30 retouched. Add-ons: extra dress ¥20,000 · behind-the-scenes film ¥50,000.",
          },
          kansai: {
            title: "Kansai (one city)",
            cardTag1: "KANSAI",
            cardTag2: "ONE CITY",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "Private car; full-day hair and makeup; two dresses and two looks. Service 8:00–18:00. Collaborate with your photographer to plan one city—Kyoto, Nara, or Osaka—literary Japanese aesthetic. Delivery: 400+ files, 30 retouched. Optional kimono upgrade available.",
          },
          hokkaido: {
            title: "Hokkaido",
            cardTag1: "HOKKAIDO",
            cardTag2: "TRAVEL",
            priceExNum: "308,000",
            priceInNum: "338,800",
            body:
              "Private car; full-day hair and makeup; two dresses and two looks. Service 8:00–18:00. Routes around Sapporo and Otaru—north-country colour and scale. Delivery: 400+ files, 30 retouched. Behind-the-scenes film and kimono add-ons use the Hokkaido rate card supplied at booking.",
          },
          traditional: {
            title: "Iro-uchikake or shiromuku",
            cardTag1: "WASOU",
            cardTag2: "FORMAL",
            priceExNum: "138,000",
            priceInNum: "151,800",
            body:
              "Hair, makeup, and professional kitsuke included; choose either iro-uchikake or shiromuku. Service 10:00–15:00. Studio portraits plus nearby Kasai greenery—traditional Japanese formality. Delivery: 200+ files, 20 retouched. Add-ons: extra dress package · extended time with +10 retouches · BTS film.",
          },
          kanto_day: {
            title: "Tokyo area day trip",
            cardTag1: "TRAVEL",
            cardTag2: "1 DAY",
            priceExNum: "60,000",
            priceInNum: "66,000",
            cardNote:
              "Tokyo + Kamakura (1 day) from ¥60,000 excl. tax · Mt. Fuji + Hakone (1 day) ¥80,000 excl. tax",
            priceLead: "Per day, excl. tax. Choose your route when booking.",
            routeA: "Tokyo + Kamakura (1 day)",
            routeB: "Mt. Fuji + Hakone (1 day)",
            priceExNumA: "60,000",
            priceExNumB: "80,000",
            body:
              "A compact one-day travel shoot in the Greater Tokyo area. Two routes: Tokyo and Kamakura in one day (¥60,000 excl. tax), or Mt. Fuji and Hakone in one day (¥80,000 excl. tax). Coverage, hours, and deliverables are scoped for a single day—confirm details at consult. Consumption tax is added at checkout (10%). Optional add-ons follow the same dress / BTS / kimono rules as other packages where applicable.",
          },
        },
      },
      costume: {
        hero: {
          eyebrow: "Costume",
          h1: "Outfits & styling",
          lead:
            "Choose dresses, suits, and seasonal styling that match your session and locations.",
        },
        c1: {
          title: "Bridal & dress",
          body:
            "Lightweight options for travel, outdoor movement, and wind-friendly silhouettes.",
        },
        c2: {
          title: "Suits & layers",
          body:
            "Classic tailoring or relaxed fits for mountains, snow, and city walks.",
        },
        page: {
          kicker: "COSTUME",
          h1: "Costume",
          h1Line2: "A curated wardrobe line-up",
          h1Line3: "for elopement & on-location days",
          lead:
            "Dresses, suits, and wasō — chosen for movement, wind, and light across Japan.",
          intro:
            "We keep silhouettes travel-friendly and photograph cleanly in snow, forest, and city glass. Final selection is confirmed at consult; the grid below is a sample of styles we coordinate with partner ateliers.",
          fairBefore: "Trial fitting days and seasonal fairs are listed on",
          fairLink: "Campaign & Event",
          fairAfter: ".",
          tabAll: "ALL",
          tabWedding: "WEDDING DRESS",
          tabColor: "COLOR DRESS",
          tabKimono: "KIMONO",
          tabMens: "MEN'S",
          filtersAria: "Filter costume catalogue",
          catalogHeading: "Costume catalogue",
          eventsHead: "CAMPAIGN & EVENT",
          ev1Tag: "EVENT",
          ev1Title: "Trial fitting & mini session",
          ev1Body:
            "Limited weekend slots — try silhouettes and meet us before you book a full day.",
          ev2Tag: "CAMPAIGN",
          ev2Title: "Second look bonus window",
          ev2Body:
            "For shoots inside the posted dates — outfit blocks may stack differently; see the campaign page.",
          evCta: "Details",
          pagerNote: "Showing sample pieces — availability varies by season.",
        },
      },
      campaign: {
        hero: {
          eyebrow: "CAMPAIGN",
          h1: "Campaigns & events",
          lead:
            "Limited consults, trial sessions, and campaign perks — updated through the season.",
        },
        ctaDetails: "View details",
        item1Meta: "Limited weekend slots · advance booking required",
        item2Meta: "Applies to shoots booked within the posted campaign window",
        item3Meta: "Online session · reservations required",
        item4Meta: "Select routes & dates · availability varies",
        listHeading: "Campaign list",
        otherContentsTitle: "OTHER CONTENTS",
        other1Title: "PLAN",
        other1Sub: "Products & packages",
        other2Title: "GALLERY",
        other2Sub: "Selected work",
        other3Title: "COSTUME",
        other3Sub: "Outfits & styling",
        reserveBannerTitle: "Reservation",
        reserveBannerSub: "Consultation booking & inquiries",
        reserveWebHeading: "Web reservation & inquiries",
        reserveBtnReserve: "Book a consultation",
        reserveBtnWhatsapp: "Chat on WhatsApp",
        reserveBtnWechat: "WeChat",
        reserveBtnX: "X",
        reserveBtnContact: "Contact",
        reservePhoneHeading: "Phone inquiries",
        reservePhoneNumber: "—",
        reservePhoneHours: "10:00–18:00",
        ctaReserve: "Reserve",
        ctaContact: "Contact",
      },
      reserve: {
        hero: {
          eyebrow: "Checkout",
          h1: "Order your photo session",
          lead:
            "Choose your package and date, then enter your details, then pay securely online. A confirmation email is sent after payment.",
        },
        flowTitle: "How checkout works",
        step1: "Choose your session, add-ons, and a preferred date.",
        step2: "Enter your personal information for the order.",
        step3: "Complete online payment on the secure page; you will receive a confirmation email.",
        phoneLine: "Phone inquiries: 10:00–18:00",
        wizardNavAria: "Checkout steps",
        wizardStepBuild: "Build your order",
        wizardStepDetails: "Your details",
        wizardStepPay: "Pay online",
        modelSectionTitle: "Choose your session",
        modelSectionSub:
          "Start with a location package first, then add options—wardrobe, behind-the-scenes film, kimono, and more.",
        optionsSectionTitle: "Configure your session",
        optionsSectionSub: "Dress add-ons, behind-the-scenes video, kimono, and more.",
        scheduleSectionTitle: "Preferred date",
        scheduleSectionSub: "Pick one day on the calendar, then continue to enter your details.",
        detailsSectionTitle: "Your details",
        detailsSectionSub: "Name and email for your order confirmation. Phone is optional.",
        paymentSectionTitle: "Online payment",
        paymentSectionSub: "Review the notes below, then open the secure payment step.",
        btnNextDetails: "Continue to your details",
        btnNextPayment: "Continue to payment",
        btnBackConfig: "Back to order",
        btnBackDetails: "Back to your details",
        dateRequired: "Please choose a date on the calendar before continuing.",
        phoneLabel: "Phone (optional)",
        changePackage: "Change session package",
        includesTitle: "What's included in this package",
        includesDisclaimer:
          "Listed items are covered by the package price (excl. tax). Optional add-ons—extra dresses, BTS film, kimono, etc.—are quoted separately.",
        includes: {
          tokyo: [
            "Private transfer vehicle for the session day",
            "Full-day hair & makeup artist on location",
            "Two wedding dress looks / two styling changes",
            "Service window 8:00–18:00",
            "Studio portraits + Tokyo metropolitan locations (per agreed route)",
            "400+ delivered files, 30 retouched selects",
          ],
          shonan: [
            "Same service scope as the Tokyo package",
            "Service window 8:00–18:00",
            "Coastal train line, Shonan shoreline, Enoshima, beach—lyrical seaside light",
            "400+ delivered files, 30 retouched selects",
          ],
          fuji: [
            "Private transfer vehicle for the session day",
            "Full-day hair & makeup; two dresses / two looks (advance fitting required)",
            "Service window 7:00–18:00",
            "Lakeside photography around Mt. Fuji—Yamanakako, Kawaguchiko, and selected private shoreline spots",
            "400+ delivered files, 30 retouched selects",
          ],
          kansai: [
            "Private transfer vehicle for the session day",
            "Full-day hair & makeup; two dresses / two looks",
            "Service window 8:00–18:00",
            "One Kansai city on the day—Kyoto, Nara, or Osaka (planned with your photographer)",
            "400+ delivered files, 30 retouched selects",
          ],
          hokkaido: [
            "Private transfer vehicle for the session day",
            "Full-day hair & makeup; two dresses / two looks",
            "Service window 8:00–18:00",
            "Routes centred on Sapporo & Otaru (as arranged)",
            "400+ delivered files, 30 retouched selects",
            "Behind-the-scenes film & kimono add-ons follow the Hokkaido rate sheet at checkout",
          ],
          traditional: [
            "Hair, makeup & professional kitsuke",
            "Either iro-uchikake or shiromuku (one formal look)",
            "Service window 10:00–15:00",
            "Studio portraits + nearby Kasai park exteriors",
            "200+ delivered files, 20 retouched selects",
          ],
          kanto_day: [
            "One-day travel photography in Greater Tokyo (route chosen at booking)",
            "Two route options: Tokyo + Kamakura, or Mt. Fuji + Hakone — prices differ (see Plan page)",
            "Scoped for a single shooting day; timing and logistics confirmed at consult",
            "Add-ons (dress, BTS, kimono) follow the same rules as other packages where applicable",
          ],
        },
        selectLabel: "Photo package",
        opt1: "In-person consultation · studio [90 min]",
        opt2: "Online briefing · screen share [40 min]",
        opt3: "Weekend trial & fitting special [90 min + 60 min try-on]",
        booking: {
          panelPlan: "Photo package",
          panelAddon: "Additional services",
          dressGroup: "Extra wedding dress sets (add-on)",
          dress0: "None — use plan-included dresses only",
          dress1: "+1 set — ¥20,000",
          dress2: "+2 sets — ¥40,000",
          dress3: "+3 sets — ¥60,000",
          dressCapNote:
            "Each plan already includes wedding dress looks (most plans: 2; traditional plan: 1). Add-on sets are extra looks for the same day. Included + add-on cannot exceed 4 dresses per day; unavailable options are disabled automatically.",
          btsGroup: "Behind-the-scenes video",
          btsNone: "None",
          btsStd: "Standard (+¥50,000)",
          btsReg: "Hokkaido / Izu / Mt. Fuji (+¥70,000)",
          kimonoGroup: "Couple kimono",
          kimonoNone: "None",
          kimonoStd: "Standard (+¥50,000)",
          kimonoHkd: "Hokkaido (+¥70,000)",
          shiroCheck: "Extra shiromuku & iro-uchikake package (+¥50,000)",
          summaryTitle: "Order summary",
          planLine: "Selected plan (excl. tax)",
          addonsLine: "Add-ons (excl. tax)",
          subtotalEx: "Subtotal (excl. tax)",
          taxLine: "Consumption tax (10%)",
          totalIn: "Total (incl. tax)",
          cardNote:
            "Payment: deposit or full balance per plan terms is collected on the secure payment page in this step. Card numbers are never entered on this page.",
          hintSelectPlan: "Select a photo package to see your order summary.",
          viewPlansLink: "Plan lineup & what's included →",
          kantoPkgMeta: "From ¥60,000 (excl. tax)",
          kantoRouteLegend: "Day-trip route",
          kantoRouteTk: "Tokyo + Kamakura (1 day) — ¥60,000 excl. tax",
          kantoRouteFh: "Mt. Fuji + Hakone (1 day) — ¥80,000 excl. tax",
        },
        calendarTitle: "Preferred date",
        legendOpen: "Available",
        legendFew: "Few left",
        legendClosed: "Closed",
        wdMon: "Mon",
        wdTue: "Tue",
        wdWed: "Wed",
        wdThu: "Thu",
        wdFri: "Fri",
        wdSat: "Sat",
        wdSun: "Sun",
        nameLabel: "Full name",
        emailLabel: "Email",
        submitPay: "Pay online",
        note:
          "Card numbers are entered only on the secure payment page. A confirmation email with your order summary is sent after payment.",
        successMsg:
          "Thank you — your order is placed. Check your inbox for the confirmation and receipt.",
        ariaCalendar: "Calendar",
      },
      contact: {
        hero: {
          eyebrow: "Contact",
          h1: "Tell me about your plan",
          lead:
            "I usually reply within 24-48 hours. Feel free to include your budget and destination.",
        },
        form: {
          name: "Name",
          email: "Email",
          date: "Preferred Date",
          datePh: "e.g. 2026-12",
          service: "Service Type",
          message: "Message",
          messagePh: "Your story, trip plan, and budget range",
          submit: "Submit Inquiry",
          opt1: "Elopement / Couples",
          opt2: "Outdoor Photography",
          opt3: "Not sure yet, I need guidance",
        },
        faq: {
          h2: "Frequently asked questions",
          q1: "How far ahead should we book?",
          a1:
            "Popular seasons fill early; share your month and region and we will suggest realistic windows.",
          q2: "What if the weather is bad on shoot day?",
          a2:
            "Outdoor days are planned with buffer where possible; your consult covers backup ideas and safety.",
          q3: "Do you help with outfits and routes?",
          a3:
            "Yes — see Costume for wardrobe samples and Plan for what each line includes; we align routes to light and pace.",
        },
        wechat: {
          heading: "WeChat",
          lead: "Prefer WeChat? Add us with the ID below and send your dates and ideas.",
          idLabel: "WeChat ID",
          idValue: "mashirovisuals",
          copyBtn: "Copy ID",
          copied: "Copied",
          note: "You can also reach us via WhatsApp or the form on this page.",
        },
      },
      footer: {
        address:
          "Japan-based photographer. Visits and consultations by appointment.",
        linkHome: "Home",
        linkCampaign: "Campaign & Event",
        linkPlan: "Plan",
        linkGallery: "Gallery",
        linkCostume: "Costume",
        linkReserve: "Reserve",
        linkAbout: "About",
        linkContact: "Contact",
        linkElopement: "Elopement",
        linkOutdoor: "Outdoor",
        privacy: "Privacy Policy",
        company: "Company",
        copyright: "© 2026 Mashiro Visuals. All rights reserved.",
      },
    },

    "zh-TW": {
      nav: {
        home: "首頁",
        elopement: "婚紗／私奔",
        outdoor: "戶外",
        portfolio: "作品",
        about: "關於",
        contact: "聯絡",
        plan: "方案",
        gallery: "作品",
        costume: "COSTUME",
        subPlan: "內容與產品",
        subGallery: "精選作品",
        subCostume: "禮服與造型",
        subAbout: "品牌故事",
        subContact: "諮詢／預約",
        menuTitle: "選單",
        menuOpenAria: "開啟選單",
        menuCloseAria: "關閉選單",
        instagramAria: "Instagram",
        whatsappAria: "WhatsApp",
        wechatAria: "微信",
        xAria: "X",
        campaignEvent: "CAMPAIGN & EVENT",
        subCampaignEvent: "季節活動與消息",
        ctaAiTitle: "智能諮詢",
        ctaAiSub: "線上問答",
        ctaReserveTitle: "預約",
        ctaReserveSub: "諮詢與預約",
      },
      common: {
        langAria: "語言",
        floatCtaAria: "智能助理與預約捷徑",
        floatAiTitle: "智能諮詢",
        floatAiSub: "線上問答",
        aiPanelTitle: "Mashiro 智能助理",
        aiPanelCloseAria: "關閉對話",
        aiWelcome:
          "您好，我是 Mashiro Visuals 的自動助理。可詢問方案、地點、預約或檔期相關問題；若要正式報價或合約，仍會由真人透過 WhatsApp 或預約表與您確認。",
        aiPlaceholder: "請輸入您的問題…",
        aiSend: "送出",
        aiThinking: "整理中…",
        aiDisclaimer: "回覆為自動生成，可能不完整；實際方案與價格以人工確認為準。",
        aiReplyDefault:
          "收到。可試著問：價格區間、常拍地點、如何預約、或交付內容；也可點選網站上的 WhatsApp 由真人回覆。",
        aiReplyPricing:
          "公開方案與價格區間請見 Plan 頁（含稅註記以頁面為準）。最終費用依季節、地點與加購而定，建議 Reserve 或 WhatsApp 取得專屬估價。",
        aiReplyLocations:
          "常拍區域包含東京、湘南、富士湖畔、京都、鎌倉、北海道、輕井澤、日光等，可至 Gallery 的 Location spots 查看；路線會依光線與節奏安排。",
        aiReplyBooking:
          "可從右下角 RESERVE、Reserve 頁面或 WhatsApp 開始諮詢；付款連結前會先確認日期與交付內容。",
        aiReplyDeliver:
          "張數、精修與交件週期依各方案在 Plan 頁說明；下單後摘要內亦會載明。",
        aiReplyWeather:
          "外景會依天候彈性調整，能排緩衝時段會先預留，並以安全為優先；諮詢時可討論備案。",
        aiReplyWhatsApp:
          "若要最快由真人回覆，請用頁首或預約區的 WhatsApp，並附上希望日期與地區。",
        aiWhatsAppCta: "開啟 WhatsApp",
        aiBack: "返回網站",
        aiBackAria: "返回首頁",
      },
      meta: {
        index: {
          title: "Mashiro Visuals｜日本婚紗、私奔與戶外攝影",
          description:
            "在日本荒野與自然中，記錄婚紗、私奔與戶外的真實情感。誠實、有電影感。",
        },
        elopement: {
          title: "婚紗／私奔｜Mashiro Visuals",
          description: "日本各地外景婚紗與私奔攝影——路線、方案與拍攝節奏說明。",
        },
        ski: {
          title: "戶外攝影｜Mashiro Visuals",
          description: "日本戶外與山岳環境中的情侶／冒險影像——兼顧天候與安全節奏。",
        },
        portfolio: {
          title: "作品集｜Mashiro Visuals",
          description: "東京、富士山、北海道、鎌倉與棚內等系列精選作品。",
        },
        about: {
          title: "關於｜Mashiro Visuals",
          description: "認識 Miller／Mashiro——駐點日本，專注婚紗、私奔與戶外自然光影像。",
        },
        contact: {
          title: "聯絡｜Mashiro Visuals",
          description: "諮詢檔期、地點與預算——表單、WhatsApp 或微信與我們聯繫。",
        },
        aiChat: {
          title: "智能助理｜Mashiro Visuals",
          description: "與 Mashiro Visuals 智能助理對話，了解方案、地點、預約與交付等資訊。",
        },
        plan: {
          title: "方案｜Mashiro Visuals",
          description: "日本婚紗與私奔攝影的方案與產品說明。",
        },
        costume: {
          title: "衣裳｜Mashiro Visuals",
          description:
            "日本婚紗、外景私奔的禮服、彩色禮服、和裝與西裝樣本參考；實際以諮詢確認為準。",
        },
        campaign: {
          title: "活動｜Mashiro Visuals",
          description: "季節檔期、體驗活動與工作室消息。",
        },
        reserve: {
          title: "結帳｜Mashiro Visuals",
          description:
            "線上選擇攝影方案與加購、希望日期並下單；於下一步安全完成付款。",
        },
      },
      index: {
        hero: {
          tagline: "婚紗影像 · 日本",
          eyebrow: "日本婚紗、私奔與戶外攝影",
          h1: "日本婚紗與私奔——自然光裡，安靜的電影感",
          lead:
            "為來日本的新人與伴侶，拍攝誠實、有電影感的婚紗與私奔影像。雪山、曠野與戶外——不擺拍，只記錄你們與風景。自然光與真實情緒。",
          ctaPortfolio: "瀏覽作品",
          ctaInquire: "預約諮詢",
          circleReserve: "RESERVE",
          circleReserveSub: "預約來訪",
          scrollAria: "向下捲動至內容",
          note: "駐點日本。歡迎以英文聯絡。",
        },
        featured: { cta: "查看方案" },
        plan: {
          eyebrow: "方案",
          h2: "我們的方案",
          lead: "預約前先比較東京、富士、關東一日路線、加購項目與包含內容。",
        },
        costume: {
          eyebrow: "造型",
          h2: "禮服與造型",
          body: "婚紗、彩色禮服、和裝與西裝樣本——先預覽拍攝日可選的衣著陣容。",
          btn: "瀏覽禮服頁",
        },
        combos: {
          h2: "人氣組合",
          lead: "新人常一起詢問的入門搭配。",
          c1Title: "東京都市＋第二套造型",
          c1Body: "都會天際與換裝節奏——適合全日拍攝。",
          c2Title: "富士五湖一日旅拍",
          c2Body: "湖畔光線與山景，單日完成。",
          c3Title: "關東一日路線",
          c3Body: "東京＋鎌倉，或富士＋箱根——同日兩種氛圍。",
          c1Cta: "東京方案",
          c2Cta: "富士方案",
          c3Cta: "關東一日方案",
        },
        galleryBand: {
          h2: "作品集",
          lead: "富士、東京、北海道、鎌倉與棚內等實景作品——開啟完整相簿瀏覽各系列。",
          btn: "開啟作品集",
        },
        endTiles: {
          flowTitle: "流程",
          flowSub: "從諮詢到拍攝當日的步驟說明。",
          faqTitle: "常見問題",
          faqSub: "檔期、天候彈性、衣著與預約重點。",
        },
        about: {
          eyebrow: "關於",
          h2: "我是 Miller，在日本也以 Mashiro 為名",
          body:
            "我長期在日本拍攝私奔與戶外題材，偏愛自然光與真實互動。風格偏電影感，但不過度修飾。",
          btn: "認識我",
        },
        why: {
          h2: "為什麼選擇我",
          i1: {
            title: "駐點日本",
            body: "熟悉四季、天氣與地點，讓規劃更順、更有效率。",
          },
          i2: {
            title: "戶外實戰經驗",
            body: "在山區與雪地環境中移動自如，兼顧安全與關鍵畫面。",
          },
          i3: {
            title: "自然電影感",
            body: "少指令、多引導，重視真實情緒，而不是過度表演。",
          },
        },
        cta: {
          eyebrow: "聯絡",
          h2: "把你在日本的旅程，拍成一段會呼吸的故事",
          p: "告訴我日期與想去的地方，我會回覆專屬拍攝建議。",
          btn: "送出諮詢",
        },
        campaign: {
          eyebrow: "CAMPAIGN & EVENT",
          ariaCarousel: "活動與促銷",
          c1: {
            tag1: "EVENT",
            title: "春季試穿・諮詢會",
            body: "限定檔期——衣著升等與加購優惠。預約了解方案內容。",
          },
          c2: {
            tag1: "CAMPAIGN",
            title: "第二套禮服贈送",
            body: "適用於活動期間內預約之檔期——預約時可詢問條件。",
          },
          c3: {
            tag1: "EVENT",
            tag2: "NEW",
            title: "線上作品導覽",
            body: "約 40 分鐘線上說明——路線、光線與交付流程一次了解。",
          },
          c4: {
            tag1: "EVENT",
            title: "早鳥預約檔期",
            body: "限定檔期開放——可先查空檔並在線上組合方案與加購項目。",
          },
        },
        float: {
          eyebrow: "地點",
          h2: "地點實景作品",
          lead: "可用箭頭切換或自動輪播；點圖前往作品集（Gallery）對應區塊，再連到方案內容。",
          ariaPrev: "上一張",
          ariaNext: "下一張",
          c1: { title: "富士山" },
          c2: { title: "東京" },
          c3: { title: "北海道" },
          c4: { title: "鎌倉" },
        },
        footer: { line2: "日本婚紗私奔與戶外攝影" },
      },
      elopement: {
        hero: {
          eyebrow: "日本的私奔婚禮",
          h1: "在自然裡，讓誓言被風景包圍",
          lead:
            "從東京近郊到富士山、北海道、輕井澤。依季節與光線量身規劃路線。",
        },
        products: {
          h2: "婚紗與私奔方案",
          lead:
            "各方案含拍攝範圍、交付內容與行程說明。皆含私人線上相簿與可印刷檔案。",
          fuji: {
            title: "富士山 — 婚紗與私奔",
            price: "¥180,000 起",
            b1: "五湖與五合目路線；日出與黃金時段規劃",
            b2: "500+ 張調色影像；依天候與人潮安排時段",
            b3: "經典山景與開闊環境人像",
          },
          kyoto: {
            title: "京都 — 婚紗與私奔",
            price: "¥200,000 起",
            b1: "祇園、嵐山、竹林與寺院庭園（依規申請）",
            b2: "和服或禮服；清晨時段可安排",
            b3: "石板路、季節楓櫻與古都街景",
          },
          hokkaido: {
            title: "北海道 — 婚紗與私奔",
            price: "¥280,000 起",
            b1: "雪原、滑雪場與海岸線；全日拍攝",
            b2: "700+ 張影像；防寒與路線彈性調整",
            b3: "可另聘副攝；冬季婚紗氛圍佳",
          },
          kamakura: {
            title: "鎌倉 — 婚紗與私奔",
            price: "¥160,000 起",
            b1: "神社、竹林與海岸；東京當日來回友善",
            b2: "半日或全日；適合輕鬆節奏與親友同行",
            b3: "海風、鳥居與林道，景點集中",
          },
        },
      },
      ski: {
        hero: {
          eyebrow: "戶外攝影",
          h1: "速度、天氣與情緒，都在同一個畫面裡",
          lead: "給熱愛戶外與冒險的伴侶。以動作與節奏為主，敘事偏電影感。",
        },
        price1: { title: "單人／雙人戶外拍攝", price: "約 ¥80,000 起" },
        price2: { title: "山系故事方案", price: "約 ¥120,000 起" },
        cta: {
          h2: "告訴我你想去哪裡",
          p: "我會提供路線、時段與拍攝建議，讓過程安心又順暢。",
          btn: "預約諮詢",
        },
      },
      portfolio: {
        hero: {
          eyebrow: "作品集",
          h1: "真實情緒，留在風景裡",
          lead: "精選私奔、情侶與戶外作品，以自然敘事為主，不過度擺拍。",
        },
        loc: {
          kicker: "LOCATION PHOTO",
          h1: "外景／地點式拍攝",
          h1sub: "Mashiro Visuals · 日本",
          lead: "日本各地外景——自然光、安靜的構圖，把情緒留給你們與風景。",
          intro:
            "走出棚內：依季節、光線與人潮節奏規劃路線，讓你們專注當下，把其餘交給環境與鏡頭。",
          memo: "回憶",
          featureTitle: "FEATURE",
          featureLead: "每一次外景，我們在意的事。",
          f1n: "01",
          f1t: "光線與禮服",
          f1b: "依路線搭配禮服與西裝，安排時間讓布料、膚色與風景在畫面裡乾淨呈現。",
          f2n: "02",
          f2t: "地點",
          f2b: "從都市線條到湖畔的風——先篩出符合故事的地點，再讓移動與停留都從容。",
          f3n: "03",
          f3t: "引導",
          f3b: "輕量姿態與清楚提示，不必猜下一步；這一天是你們的，而不是一場表演。",
          spotsTitle: "LOCATION SPOTS",
          spotsLead: "私奔與情侶拍攝常回到的區域參考。",
          spot1: "東京 · 都市核心",
          spot2: "湘南 · 海岸",
          spot3: "富士山 · 湖畔",
          spot4: "京都 · 老街與寺院巷弄",
          spot5: "鎌倉 · 神社與海",
          spot6: "北海道 · 雪原與開闊地",
          spot7: "輕井澤 · 林間光線",
          spot8: "日光 · 杉木林道",
          mosaicLabel: "PHOTO GALLERY",
          moreBtn: "VIEW MORE",
          spotPackagesLink: "方案",
        },
        gallery: {
          title: "GALLERY",
          subtitle: "婚紗／作品相簿",
          catAll: "ALL",
          catStudio: "STUDIO PHOTO",
          catTokyo: "東京",
          catFuji: "富士山",
          catKamakura: "鎌倉",
          catKyoto: "京都",
          catHokkaido: "北海道",
          catOther: "其他",
          sortPopular: "熱門",
          sortNewest: "最新",
          filterAria: "依分類篩選作品",
          sortAria: "排序方式",
          lightboxCloseAria: "關閉相簿",
          lightboxPrevAria: "上一張",
          lightboxNextAria: "下一張",
          lightboxFsEnterAria: "全螢幕",
          lightboxFsExitAria: "離開全螢幕",
          lightboxZoomInAria: "放大",
          lightboxZoomOutAria: "縮小",
          lightboxCounter: "{current} / {total}",
        },
      },
      about: {
        hero: {
          eyebrow: "關於 Mashiro",
          h1: "我是 Miller，在日本也以 Mashiro 為名",
          lead:
            "我長駐日本，拍攝私奔與戶外故事，偏愛自然光與真實互動。",
        },
        c1: {
          title: "我的方式",
          body:
            "少指令、多引導。讓你們專注在彼此與風景，情緒自然會出現。",
        },
        c2: {
          title: "我能提供的",
          body:
            "在地經驗、戶外移動力與天氣判斷，讓拍攝更安全、流程更穩定。",
        },
      },
      plan: {
        hero: {
          eyebrow: "方案",
          h1: "方案與產品",
          lead: "瀏覽內容、價格與包含項目，規劃你在日本的拍攝。",
          brandNote:
            "方案與標價均由 Mashiro Visuals 提供；最終報價依檔期、地點與加購項目而定。",
        },
        list: {
          kicker: "PHOTO WEDDING 方案",
          sub1: "每個方案已為你配好所需項目。",
          sub2: "日本全包式目的地婚紗／拍婚照。",
          viewDetails: "查看詳情",
          priceLabel: "料金",
          yenSuffix: "円",
          taxExcludedTag: "(稅別)",
          taxIncludedTag: "(稅込)",
          taxNote: "",
        },
        detail: {
          back: "返回方案總覽",
          inquire: "諮詢此方案",
          reserve: "預約諮詢",
        },
        pkg: {
          tokyo: {
            title: "東京都市",
            cardTag1: "STUDIO",
            cardTag2: "TOKYO",
            priceExNum: "148,000",
            priceInNum: "162,800",
            body:
              "私車、化妝師全天跟妝；婚紗兩套、造型兩組。服務 8:00–18:00，可提前到店選禮服或當日提前一小時。內容含攝影棚拍，外拍含東京鐵塔、東京車站、台場、葛西臨海公園等都市路線。400 張以上，精修 30 張。可加購婚紗一套 ¥2 萬、花絮影片 ¥5 萬、男女和服 ¥5 萬。",
          },
          shonan: {
            title: "湘南海岸",
            cardTag1: "海岸",
            cardTag2: "湘南",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "與東京套系同樣包含項目。服務 8:00–18:00。外拍元素含灌籃高手電車沿線、湘南海岸、江之島與海邊，走文藝日系風。400 張以上，精修 30 張；加購項目同東京套系。",
          },
          fuji: {
            title: "富士山湖區",
            cardTag1: "湖畔",
            cardTag2: "富士山",
            priceExNum: "288,000",
            priceInNum: "316,800",
            body:
              "私車、化妝師全天跟妝；婚紗兩套、造型兩組。服務 7:00–18:00，需提前到店選禮服。外拍含山中湖、河口湖與 Mashiro Visuals 私房湖畔景，自然大氣路線。400 張以上，精修 30 張。可加購婚紗一套 ¥2 萬、花絮影片 ¥5 萬。",
          },
          kansai: {
            title: "關西（單一城市）",
            cardTag1: "關西",
            cardTag2: "單城",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "私車、化妝師全天跟妝；婚紗兩套、造型兩組。服務 8:00–18:00。可與攝影師商議；京都、奈良、大阪擇一行文藝日系拍攝。400 張以上，精修 30 張。可加購婚紗一套、花絮、和服等。",
          },
          hokkaido: {
            title: "北海道",
            cardTag1: "北海道",
            cardTag2: "旅行",
            priceExNum: "308,000",
            priceInNum: "338,800",
            body:
              "私車、化妝師全天跟妝；婚紗兩套、造型兩組。服務 8:00–18:00。路線可與攝影師規劃；札幌、小樽為主，文藝日系走向。400 張以上，精修 30 張。花絮與和服加購價格依北海道套系為準。",
          },
          traditional: {
            title: "色打褂／白無垢（擇一）",
            cardTag1: "和装",
            cardTag2: "FORMAL",
            priceExNum: "138,000",
            priceInNum: "151,800",
            body:
              "化妝師與和服穿戴師；色打褂或白無垢擇一。服務 10:00–15:00。棚拍＋葛西周邊公園，文藝日系。200 張以上，精修 20 張。可加購婚紗一套 ¥5 萬、延長與加修、花絮影片 ¥5 萬。",
          },
          kanto_day: {
            title: "東京近郊一日旅拍",
            cardTag1: "旅拍",
            cardTag2: "1日",
            priceExNum: "60,000",
            priceInNum: "66,000",
            cardNote: "東京＋鎌倉（1 日）稅前 6 萬日元起 · 富士山＋箱根（1 日）稅前 8 萬日元",
            priceLead: "以下為單日、未稅價；結帳時另加 10% 消費稅。預約時請選擇路線。",
            routeA: "東京＋鎌倉（1 日）",
            routeB: "富士山＋箱根（1 日）",
            priceExNumA: "60,000",
            priceExNumB: "80,000",
            body:
              "以東京圈為主的一日旅拍方案。路線 A：東京與鎌倉同日拍攝，稅前 6 萬日元起。路線 B：富士山與箱根同日拍攝，稅前 8 萬日元。單日行程的服務範圍、移動與交付張數於諮詢時確認；加購禮服套數、花絮、和服等規則與其他方案相同（適用時）。",
          },
        },
      },
      costume: {
        hero: {
          eyebrow: "衣裳",
          h1: "禮服與造型",
          lead: "依拍攝地點與季節，選擇禮服、西裝與搭配。",
        },
        c1: {
          title: "婚紗／禮服",
          body: "適合旅行與戶外移動的輕盈剪裁與抗風輪廓。",
        },
        c2: {
          title: "西裝與層次",
          body: "正式剪裁或休閒風格，配合山區、雪地與城市步行。",
        },
        page: {
          kicker: "COSTUME",
          h1: "衣裳",
          h1Line2: "為外景與私奔日",
          h1Line3: "精選的禮服與造型",
          lead: "禮服、西裝與和裝——為日本的風、光與移動而挑。",
          intro:
            "我們偏好易於旅行、在雪地、林間與都市玻璃前都乾淨入鏡的輪廓。最終款式於諮詢時確認；以下為與合作工坊協調的風格範例。",
          fairBefore: "試穿活動與季節檔期請見",
          fairLink: "活動與檔期",
          fairAfter: "頁面。",
          tabAll: "ALL",
          tabWedding: "婚紗禮服",
          tabColor: "彩色禮服",
          tabKimono: "和裝",
          tabMens: "男裝",
          filtersAria: "篩選衣裳型錄",
          catalogHeading: "衣裳型錄",
          eventsHead: "CAMPAIGN & EVENT",
          ev1Tag: "EVENT",
          ev1Title: "試穿體驗與輕拍諮詢",
          ev1Body: "限定週末時段——先試輪廓、認識我們，再決定是否預約全日。",
          ev2Tag: "CAMPAIGN",
          ev2Title: "第二套造型加值檔期",
          ev2Body: "檔期內預約的拍攝，衣裝時段可能另有疊加方案；詳見活動頁。",
          evCta: "詳情",
          pagerNote: "為示意款項——實際庫存依季節而異。",
        },
      },
      campaign: {
        hero: {
          eyebrow: "CAMPAIGN",
          h1: "檔期與活動",
          lead: "限定諮詢、體驗檔與加值優惠——依季節更新。",
        },
        ctaDetails: "查看詳情",
        item1Meta: "週末限定時段 · 需事先預約",
        item2Meta: "適用於公告檔期內預約之拍攝",
        item3Meta: "線上諮詢 · 名額有限",
        item4Meta: "指定路線與日期 · 依線上空檔為準",
        listHeading: "活動列表",
        otherContentsTitle: "OTHER CONTENTS",
        other1Title: "PLAN",
        other1Sub: "內容與產品",
        other2Title: "GALLERY",
        other2Sub: "精選作品",
        other3Title: "COSTUME",
        other3Sub: "禮服與造型",
        reserveBannerTitle: "Reservation",
        reserveBannerSub: "諮詢預約與聯絡",
        reserveWebHeading: "網路預約與諮詢",
        reserveBtnReserve: "預約諮詢",
        reserveBtnWhatsapp: "WhatsApp 諮詢",
        reserveBtnWechat: "微信",
        reserveBtnX: "X",
        reserveBtnContact: "聯絡表單",
        reservePhoneHeading: "電話諮詢",
        reservePhoneNumber: "—",
        reservePhoneHours: "10:00–18:00",
        ctaReserve: "預約",
        ctaContact: "聯絡",
      },
      reserve: {
        hero: {
          eyebrow: "結帳",
          h1: "線上下單｜攝影方案",
          lead:
            "先選方案與加購並選好日期，接著填寫個人資料，最後於安全付款頁完成線上付款；付款成功後會寄出訂單確認信。",
        },
        flowTitle: "結帳流程",
        step1: "選擇攝影方案、加購與希望日期。",
        step2: "填寫訂單所需的個人資料（姓名、電子郵件等）。",
        step3: "於安全付款頁完成線上付款；完成後將收到訂單確認信。",
        phoneLine: "電話諮詢：10:00–18:00",
        wizardNavAria: "結帳步驟",
        wizardStepBuild: "配置訂單",
        wizardStepDetails: "個人資料",
        wizardStepPay: "線上付款",
        modelSectionTitle: "選擇攝影方案",
        modelSectionSub:
            "先選定地點與套系，再依序加上禮服、花絮影片、和服等選項。",
        optionsSectionTitle: "配置加購與選項",
        optionsSectionSub: "追加禮服套數、花絮影片、和服與白無垢套餐等。",
        scheduleSectionTitle: "希望日期",
        scheduleSectionSub: "在月曆上選擇一天，再點「下一步」填寫個人資料。",
        detailsSectionTitle: "個人資料",
        detailsSectionSub: "請填寫姓名與電子郵件以便寄送訂單確認；電話為選填。",
        paymentSectionTitle: "線上付款",
        paymentSectionSub: "請確認下方說明後，點擊按鈕前往安全付款頁完成結帳。",
        btnNextDetails: "下一步：填寫個人資料",
        btnNextPayment: "下一步：線上付款",
        btnBackConfig: "返回修改訂單",
        btnBackDetails: "返回修改個人資料",
        dateRequired: "請先在月曆上選擇希望日期，再繼續。",
        phoneLabel: "電話（選填）",
        changePackage: "更換方案",
        includesTitle: "此方案費用包含",
        includesDisclaimer:
            "以上為套系內含項目（標價未稅）。追加禮服、花絮影片、和服等加購另計，以結帳頁或報價為準。",
        includes: {
          tokyo: [
            "當日專車接送",
            "化妝師全天跟妝",
            "婚紗兩套／造型兩組",
            "服務時段 8:00–18:00",
            "棚內＋東京都市外拍（依行前路線）",
            "400 張以上檔案，精修 30 張",
          ],
          shonan: [
            "服務內容與東京套系同級",
            "服務時段 8:00–18:00",
            "沿線電車、湘南海岸、江之島、沙灘等海邊路線",
            "400 張以上檔案，精修 30 張",
          ],
          fuji: [
            "當日專車接送",
            "化妝師全天跟妝；婚紗兩套／造型兩組（需事先試穿）",
            "服務時段 7:00–18:00",
            "富士山湖區外拍（山中湖、河口湖及指定湖畔私點）",
            "400 張以上檔案，精修 30 張",
          ],
          kansai: [
            "當日專車接送",
            "化妝師全天跟妝；婚紗兩套／造型兩組",
            "服務時段 8:00–18:00",
            "關西單一城市當日拍攝（京都／奈良／大阪擇一，與攝影師行前規劃）",
            "400 張以上檔案，精修 30 張",
          ],
          hokkaido: [
            "當日專車接送",
            "化妝師全天跟妝；婚紗兩套／造型兩組",
            "服務時段 8:00–18:00",
            "以札幌、小樽為主之路線（行前協調）",
            "400 張以上檔案，精修 30 張",
            "花絮與和服加購依北海道套系報價表另計",
          ],
          traditional: [
            "化妝師與和服穿戴師",
            "色打褂或白無垢擇一（一套正式和裝）",
            "服務時段 10:00–15:00",
            "棚拍＋葛西周邊公園外拍",
            "200 張以上檔案，精修 20 張",
          ],
          kanto_day: [
            "東京近郊一日旅拍（預約時選擇路線）",
            "路線：東京＋鎌倉 或 富士山＋箱根 — 價格不同（見方案頁）",
            "單日行程；時間與動線於諮詢時確認",
            "加購禮服／花絮／和服等，適用時與其他方案相同規則",
          ],
        },
        selectLabel: "攝影方案",
        opt1: "來店諮詢 · 工作室［90 分鐘］",
        opt2: "線上說明 · 螢幕分享［40 分鐘］",
        opt3: "週末試穿體驗特典［90 分鐘＋試穿 60 分鐘］",
        booking: {
          panelPlan: "攝影方案",
          panelAddon: "追加服務",
          dressGroup: "追加婚紗套數（加購）",
          dress0: "不加購（僅使用方案內含婚紗）",
          dress1: "追加 1 套 — ¥20,000",
          dress2: "追加 2 套 — ¥40,000",
          dress3: "追加 3 套 — ¥60,000",
          dressCapNote:
            "各方案已含婚紗套數（多數方案 2 套；傳統和服方案 1 套）。下拉為同日「追加」套數。方案內含＋加購合計不可超過 4 套／天；超過上限的選項會自動無法選取。",
          btsGroup: "花絮影片",
          btsNone: "不需要",
          btsStd: "一般（+¥50,000）",
          btsReg: "北海道／伊豆／富士山（+¥70,000）",
          kimonoGroup: "男女和服",
          kimonoNone: "不需要",
          kimonoStd: "一般（+¥50,000）",
          kimonoHkd: "北海道（+¥70,000）",
          shiroCheck: "白無垢＆色打掛套餐（+¥50,000）",
          summaryTitle: "訂單明細",
          planLine: "方案金額（未稅）",
          addonsLine: "追加項目（未稅）",
          subtotalEx: "小計（未稅）",
          taxLine: "消費稅 10%",
          totalIn: "合計（含稅）",
          cardNote:
            "付款：依方案條款於本步驟之安全付款頁收取訂金或全額。信用卡號僅在付款頁輸入，不在此頁收集。",
          hintSelectPlan: "請先選擇攝影方案以顯示訂單金額。",
          viewPlansLink: "方案總覽與內容說明 →",
          kantoPkgMeta: "稅前 ¥60,000 起（未稅）",
          kantoRouteLegend: "一日路線",
          kantoRouteTk: "東京＋鎌倉（1 日）— ¥60,000（未稅）",
          kantoRouteFh: "富士山＋箱根（1 日）— ¥80,000（未稅）",
        },
        calendarTitle: "希望日期",
        legendOpen: "可預約",
        legendFew: "剩餘少",
        legendClosed: "額滿",
        wdMon: "一",
        wdTue: "二",
        wdWed: "三",
        wdThu: "四",
        wdFri: "五",
        wdSat: "六",
        wdSun: "日",
        nameLabel: "姓名",
        emailLabel: "電子郵件",
        submitPay: "前往線上付款",
        note: "信用卡號僅在安全付款頁輸入。付款完成後會寄送訂單確認信與明細。",
        successMsg: "感謝您的購買—訂單已成立，請至電子郵件查看確認信與明細。",
        ariaCalendar: "月曆",
      },
      contact: {
        hero: {
          eyebrow: "聯絡",
          h1: "告訴我你的計畫",
          lead: "我通常會在 24–48 小時內回覆。也歡迎寫上預算與目的地。",
        },
        form: {
          name: "姓名",
          email: "電子郵件",
          date: "希望拍攝時間",
          datePh: "例：2026-12",
          service: "服務類型",
          message: "留言",
          messagePh: "你們的故事、行程與預算範圍",
          submit: "送出諮詢",
          opt1: "婚紗／情侶私奔",
          opt2: "戶外攝影",
          opt3: "還不確定，想先聊聊",
        },
        faq: {
          h2: "常見問題集",
          q1: "建議多久前預約？",
          a1: "熱門季節檔期較滿；請告知月份與地區，我們會回覆可行窗口。",
          q2: "若拍攝日天候不佳怎麼辦？",
          a2: "戶外行程會盡量預留彈性；諮詢時也會討論備案與安全考量。",
          q3: "會協助服裝與路線嗎？",
          a3: "會——可先參考禮服頁樣本與各方案內容，並依光線與節奏規劃路線。",
        },
        wechat: {
          heading: "微信",
          lead: "習慣用微信聯繫的話，可用下方 ID 加我們，並傳送拍攝日期與想法。",
          idLabel: "微信號",
          idValue: "mashirovisuals",
          copyBtn: "複製號碼",
          copied: "已複製",
          note: "也可使用 WhatsApp 或本頁表單與我們聯繫。",
        },
      },
      footer: {
        address: "日本為據點。預約制諮詢與來訪。",
        linkHome: "首頁",
        linkCampaign: "CAMPAIGN & EVENT",
        linkPlan: "方案",
        linkGallery: "作品",
        linkCostume: "衣裳",
        linkReserve: "預約",
        linkAbout: "關於",
        linkContact: "聯絡",
        linkElopement: "私奔",
        linkOutdoor: "戶外",
        privacy: "隱私權政策",
        company: "公司資訊",
        copyright: "© 2026 Mashiro Visuals. 保留所有權利。",
      },
    },

    ja: {
      nav: {
        home: "ホーム",
        elopement: "エロープメント",
        outdoor: "アウトドア",
        portfolio: "作品",
        about: "について",
        contact: "お問い合わせ",
        plan: "プラン",
        gallery: "ギャラリー",
        costume: "COSTUME",
        subPlan: "商品・料金",
        subGallery: "作品一覧",
        subCostume: "ドレス・スタイリング",
        subAbout: "ブランドストーリー",
        subContact: "ご相談・予約",
        menuTitle: "メニュー",
        menuOpenAria: "メニューを開く",
        menuCloseAria: "メニューを閉じる",
        instagramAria: "Instagram",
        whatsappAria: "WhatsApp",
        wechatAria: "WeChat",
        xAria: "X",
        campaignEvent: "CAMPAIGN & EVENT",
        subCampaignEvent: "キャンペーン・イベント情報",
        ctaAiTitle: "AI相談",
        ctaAiSub: "質問へ回答",
        ctaReserveTitle: "予約",
        ctaReserveSub: "ご相談・予約",
      },
      common: {
        langAria: "言語",
        floatCtaAria: "AIアシスタントと予約ショートカット",
        floatAiTitle: "AI相談",
        floatAiSub: "質問へ回答",
        aiPanelTitle: "Mashiro AIアシスタント",
        aiPanelCloseAria: "チャットを閉じる",
        aiWelcome:
          "こんにちは。Mashiro Visuals の自動アシスタントです。プラン・ロケーション・予約・日程についてご質問ください。正式な見積や契約は、WhatsApp や予約フォームから担当者がご案内します。",
        aiPlaceholder: "ご質問を入力…",
        aiSend: "送信",
        aiThinking: "考え中…",
        aiDisclaimer: "回答は自動生成であり、不正確な場合があります。最終的な条件は担当者の確認をご確認ください。",
        aiReplyDefault:
          "ありがとうございます。料金の目安、撮影エリア、予約の流れ、納品について聞いてみてください。個別のご相談は WhatsApp でも受け付けています。",
        aiReplyPricing:
          "料金の目安は Plan ページに記載されています（税表記は各表記に準拠）。最終見積は季節・ロケーション・オプションにより変わります。Reserve や WhatsApp で個別にお問い合わせください。",
        aiReplyLocations:
          "東京・湘南・富士周辺の湖・京都・鎌倉・北海道・軽井沢・日光などでよく撮影します。Gallery の Location spots もご参照ください。",
        aiReplyBooking:
          "RESERVE ボタン、Reserve ページ、または WhatsApp からご相談いただけます。お支払い前に日程と納品内容を確認します。",
        aiReplyDeliver:
          "カット数・レタッチ・納期は各プランの Plan ページに記載され、ご予約後のサマリーにも反映されます。",
        aiReplyWeather:
          "屋外撮影は天候に合わせて時間を調整します。安全を優先し、余裕のあるスケジュールをご提案します。",
        aiReplyWhatsApp:
          "担当者への早い返信は、ヘッダーまたは予約欄の WhatsApp から希望日とエリアを送ってください。",
        aiWhatsAppCta: "WhatsAppを開く",
        aiBack: "サイトに戻る",
        aiBackAria: "ホームに戻る",
      },
      meta: {
        index: {
          title: "Mashiro Visuals | 日本・アウトドア前撮り・エロープメント",
          description:
            "雪山や自然の中で、ありのままの感情を記録。エロープメントとアウトドア撮影。",
        },
        elopement: {
          title: "エロープメント | Mashiro Visuals",
          description: "日本全国のロケーション・前撮り／エロープメントのルートとプラン概要。",
        },
        ski: {
          title: "アウトドア撮影 | Mashiro Visuals",
          description: "山や自然の中でのカップル／アウトドア撮影。天候と安全を踏まえた進行。",
        },
        portfolio: {
          title: "作品集 | Mashiro Visuals",
          description: "東京・富士・北海道・鎌倉・スタジオなどの厳選ロケーション作品。",
        },
        about: {
          title: "について | Mashiro Visuals",
          description: "Miller／Mashiroについて。日本を拠点に、自然光のウェディング／エロープメントを。",
        },
        contact: {
          title: "お問い合わせ | Mashiro Visuals",
          description: "日程・ロケーション・ご予算のご相談はフォーム、WhatsApp、WeChatから。",
        },
        aiChat: {
          title: "AIアシスタント | Mashiro Visuals",
          description:
            "Mashiro Visuals のアシスタントとチャットして、プラン・ロケーション・予約・納品などについて案内を受けられます。",
        },
        plan: {
          title: "プラン | Mashiro Visuals",
          description: "日本での前撮り・エロープメントのプランと商品案内。",
        },
        costume: {
          title: "衣裳 | Mashiro Visuals",
          description:
            "前撮り・エロープメント向けのドレス・カラー衣装・和装・メンズのラインナップ例。最終はご相談で確定します。",
        },
        campaign: {
          title: "キャンペーン | Mashiro Visuals",
          description: "季節のキャンペーン・イベント情報。",
        },
        reserve: {
          title: "チェックアウト | Mashiro Visuals",
          description:
            "撮影プラン・オプション・希望日を選び、オンラインで注文。安全な決済ページでお支払い。",
        },
      },
      index: {
        hero: {
          tagline: "フォトウェディング · 日本",
          eyebrow: "日本・ウェディング／前撮り & エロープメント",
          h1: "日本で、自然光のウェディングフォト",
          lead:
            "日本を旅するふたりへ。ウェディングとエロープメントの、誠実でシネマティックな写真。雪と山、開けた空の下で—無理なポーズではなく、ふたりと風景だけを。自然光と本当の感情。",
          ctaPortfolio: "作品を見る",
          ctaInquire: "相談する",
          circleReserve: "RESERVE",
          circleReserveSub: "今すぐご予約",
          scrollAria: "下にスクロール",
          note: "日本を拠点に。英語でのお問い合わせ歓迎。",
        },
        featured: { cta: "プランを見る" },
        plan: {
          eyebrow: "プラン",
          h2: "撮影プラン",
          lead: "ご予約前に、東京・富士・関東1日などのライン、オプション、含まれる内容を比較できます。",
        },
        costume: {
          eyebrow: "衣裳",
          h2: "衣裳・スタイリング",
          body: "ウェディングドレス・カラー衣装・和装・スーツのラインナップ例。撮影日の雰囲気を先にイメージできます。",
          btn: "衣裳ページへ",
        },
        combos: {
          h2: "人気の組み合わせ",
          lead: "よく一緒に相談される入門セットです。",
          c1Title: "東京都市＋お着替え",
          c1Body: "都市のラインと衣装チェンジを同日で。フルデイ向け。",
          c2Title: "富士五湖デイトリップ",
          c2Body: "湖畔の光と山の背景を、1日で。",
          c3Title: "関東1日ルート",
          c3Body: "東京＋鎌倉、または富士＋箱根——同日で二つのムード。",
          c1Cta: "東京プラン",
          c2Cta: "富士プラン",
          c3Cta: "関東1日プラン",
        },
        galleryBand: {
          h2: "ギャラリー",
          lead: "富士・東京・北海道・鎌倉・スタジオなどのロケーション作品。アルバムはフルグリッドでご覧ください。",
          btn: "ギャラリーを開く",
        },
        endTiles: {
          flowTitle: "FLOW",
          flowSub: "お問い合わせから撮影当日までの流れ。",
          faqTitle: "FAQ",
          faqSub: "日程の目安、天候、衣裳、予約の基本。",
        },
        about: {
          eyebrow: "について",
          h2: "Miller／日本名は Mashiro（マシロ）です",
          body:
            "エロープメントとアウトドアを中心に活動。自然光とリアルなやりとりを大切にし、過剰にならないシネマ調を目指します。",
          btn: "プロフィール",
        },
        why: {
          h2: "選ばれる理由",
          i1: {
            title: "日本在住",
            body: "季節・天候・ロケーションに精通し、スムーズに計画できます。",
          },
          i2: {
            title: "アウトドア対応",
            body: "高山や雪場でも安全を意識しながら、決定的な瞬間を切り取ります。",
          },
          i3: {
            title: "ナチュラル・シネマ",
            body: "指示より導く。演技ではなく、本当の感情を。",
          },
        },
        cta: {
          eyebrow: "お問い合わせ",
          h2: "日本での旅を、息づく一本のストーリーに",
          p: "日程と行きたい場所を教えてください。撮影のご提案をお送りします。",
          btn: "相談を送る",
        },
        campaign: {
          eyebrow: "CAMPAIGN & EVENT",
          ariaCarousel: "キャンペーンとイベント",
          c1: {
            tag1: "EVENT",
            title: "ご試着・ご相談フェア",
            body: "期間限定——衣裳アップグレードやオプション特典。詳しくはご予約時に。",
          },
          c2: {
            tag1: "CAMPAIGN",
            title: "ドレス2着目プレゼント",
            body: "キャンペーン期間内の撮影予約が対象——お問い合わせ時にご確認ください。",
          },
          c3: {
            tag1: "EVENT",
            tag2: "NEW",
            title: "オンライン見学・ご相談",
            body: "短時間のオンラインで——ルート、光、納品の流れをご案内します。",
          },
          c4: {
            tag1: "EVENT",
            title: "アーリーバード予約枠",
            body: "限定日程のご案内——空き状況の確認とオンラインでのお申し込みが可能です。",
          },
        },
        float: {
          eyebrow: "ロケーション",
          h2: "ロケーション写真",
          lead:
            "矢印で切り替え、または自動再生。各スライドからギャラリー同地点へ。プランはそこから辿れます。",
          ariaPrev: "前のスライド",
          ariaNext: "次のスライド",
          c1: { title: "富士山" },
          c2: { title: "東京" },
          c3: { title: "北海道" },
          c4: { title: "鎌倉" },
        },
        footer: { line2: "日本エロープメント & アウトドア撮影" },
      },
      elopement: {
        hero: {
          eyebrow: "日本のエロープメント",
          h1: "自然に抱かれて、誓いを残す",
          lead:
            "東京近郊から富士、北海道、軽井沢まで。季節と光に合わせてルートを設計します。",
        },
        products: {
          h2: "ウェディング & エロープメント プラン",
          lead:
            "撮影範囲・納品・移動の目安を各プランに記載。オンラインギャラリーと印刷用データを含みます。",
          fuji: {
            title: "富士山 — ウェディング & エロープメント",
            price: "¥180,000〜",
            b1: "五湖・五合目ルート、朝焼けとゴールデンアワー",
            b2: "500枚以上、天候と混雑を見ながらタイムライン設計",
            b3: "象徴的な山容とワイドな風景ポートレート",
          },
          kyoto: {
            title: "京都 — ウェディング & エロープメント",
            price: "¥200,000〜",
            b1: "祇園、嵐山、竹林、寺院庭園（許可が必要な場所は申請）",
            b2: "和装・ドレス、朝の静かな時間帯も可",
            b3: "石畳、季節の紅葉・桜、古都の街並み",
          },
          hokkaido: {
            title: "北海道 — ウェディング & エロープメント",
            price: "¥280,000〜",
            b1: "雪原、ゲレンデ、海岸 — フルデイ",
            b2: "700枚以上、防寒とルートの柔軟な調整",
            b3: "セカンドシューター可、冬のブライダルに強い",
          },
          kamakura: {
            title: "鎌倉 — ウェディング & エロープメント",
            price: "¥160,000〜",
            b1: "神社、竹林、海岸 — 東京から日帰りしやすい",
            b2: "ハーフ〜フルデイ、ゆったりした進行",
            b3: "海風、鳥居、林道がコンパクトにまとまる",
          },
        },
      },
      ski: {
        hero: {
          eyebrow: "アウトドア撮影",
          h1: "スピード、天候、感情を、一枚に",
          lead:
            "アウトドアが好きな方・冒険するふたりへ。動きを軸にしたシネマティックな撮影。",
        },
        price1: { title: "ソロ / カップル・アウトドア", price: "¥80,000〜" },
        price2: { title: "マウンテン・ストーリー", price: "¥120,000〜" },
        cta: {
          h2: "行きたい場所を教えてください",
          p: "ルート・時間帯・撮影のコツを共有し、安心して進められるようにします。",
          btn: "相談する",
        },
      },
      portfolio: {
        hero: {
          eyebrow: "作品集",
          h1: "感情を、風景にとどめる",
          lead:
            "エロープメント、カップル、アウトドアの厳選。自然な語り口で。",
        },
        loc: {
          kicker: "LOCATION PHOTO",
          h1: "ロケーション撮影",
          h1sub: "Mashiro Visuals · Japan",
          lead: "日本各地のロケーション撮影——自然光、静かなフレーミング、ふたりの感情に余白を。",
          intro:
            "スタジオの外へ：季節・光・人の波を踏まえたルートで、景色に身を任せられる時間をつくります。",
          memo: "Memories",
          featureTitle: "FEATURE",
          featureLead: "ロケーション当日に大切にしていること。",
          f1n: "01",
          f1t: "光と衣裳",
          f1b: "ルートに合わせたドレス・タキシード選び。質感と肌色、風景がきれいに乗る時間帯を設計します。",
          f2n: "02",
          f2t: "ロケーション",
          f2b: "都市のラインから湖畔の風まで——ストーリーに合う候補を絞り、移動もゆったりと。",
          f3n: "03",
          f3t: "ディレクション",
          f3b: "軽いポージングと明確な合図で迷わせない。一日はふたりのもので、演技ではありません。",
          spotsTitle: "LOCATION SPOTS",
          spotsLead: "エロープメント・カップルでよく戻るエリア。",
          spot1: "東京 · アーバン",
          spot2: "湘南 · 海岸",
          spot3: "富士 · 湖畔",
          spot4: "京都 · 石畳と寺社",
          spot5: "鎌倉 · 鳥居と海",
          spot6: "北海道 · 雪と大地",
          spot7: "軽井沢 · 森の光",
          spot8: "日光 · 杉並木",
          mosaicLabel: "PHOTO GALLERY",
          moreBtn: "VIEW MORE",
          spotPackagesLink: "プラン",
        },
        gallery: {
          title: "GALLERY",
          subtitle: "フォトギャラリー",
          catAll: "ALL",
          catStudio: "STUDIO PHOTO",
          catTokyo: "東京",
          catFuji: "富士山",
          catKamakura: "鎌倉",
          catKyoto: "京都",
          catHokkaido: "北海道",
          catOther: "その他",
          sortPopular: "人気順",
          sortNewest: "新着順",
          filterAria: "カテゴリで絞り込み",
          sortAria: "並び順",
          lightboxCloseAria: "ギャラリーを閉じる",
          lightboxPrevAria: "前の写真",
          lightboxNextAria: "次の写真",
          lightboxFsEnterAria: "全画面表示",
          lightboxFsExitAria: "全画面を終了",
          lightboxZoomInAria: "拡大",
          lightboxZoomOutAria: "縮小",
          lightboxCounter: "{current} / {total}",
        },
      },
      about: {
        hero: {
          eyebrow: "Mashiro について",
          h1: "Miller／日本名は Mashiro です",
          lead:
            "日本を拠点に、エロープメントとアウトドアを撮影。自然光と誠実な交流を大切にしています。",
        },
        c1: {
          title: "撮影の考え方",
          body:
            "細かい指示より、ふたりと景色に集中してもらう。感情は自然についてきます。",
        },
        c2: {
          title: "強み",
          body:
            "ローカルな知識、屋外での機動力、天候の読み。安全とクオリティの両立。",
        },
      },
      plan: {
        hero: {
          eyebrow: "プラン",
          h1: "プラン・商品",
          lead: "内容・料金・含まれるものをご覧いただき、日本での撮影をご計画ください。",
          brandNote:
            "プラン・表示料金は Mashiro Visuals のご案内です。確定見積りは時期・ロケーション・オプションにより異なります。",
        },
        list: {
          kicker: "PHOTO WEDDING PLAN",
          sub1: "プラン内ですべてが揃う。",
          sub2: "オールインクルーシブ · 日本のフォトウェディングプラン",
          viewDetails: "詳細を見る",
          priceLabel: "料金",
          yenSuffix: "円",
          taxExcludedTag: "(税別)",
          taxIncludedTag: "(税込)",
          taxNote: "",
        },
        detail: {
          back: "プラン一覧へ",
          inquire: "このプランを相談する",
          reserve: "来館・オンライン予約",
        },
        pkg: {
          tokyo: {
            title: "東京・都市",
            cardTag1: "STUDIO",
            cardTag2: "TOKYO",
            priceExNum: "148,000",
            priceInNum: "162,800",
            body:
              "送迎車、ヘアメイク終日付き同行、ウェディングドレス2着／スタイリング2種。8:00–18:00。事前または当日早めにご来店してドレスを選択。スタジオに加え、東京タワー、東京駅、お台場、葛西臨海公園など都市ロケ。400カット以上・レタッチ30枚。オプション：ドレス追加 ¥2万・メイキング映像 ¥5万・ペア着物 ¥5万。",
          },
          shonan: {
            title: "湘南・海岸",
            cardTag1: "COAST",
            cardTag2: "湘南",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "東京プランと同内容。8:00–18:00。ロケーションは沿線電車・湘南海岸、江の島、砂浜など、抒情的な海沿いの光。400カット以上・レタッチ30枚。オプション料金は東京プランと同様。",
          },
          fuji: {
            title: "富士・湖畔",
            cardTag1: "LAKES",
            cardTag2: "FUJI",
            priceExNum: "288,000",
            priceInNum: "316,800",
            body:
              "送迎車、ヘアメイク終日、ドレス2着／スタイリング2種。7:00–18:00、事前試着必須。山中湖・河口湖、Mashiro Visuals 選定のプライベート湖畔スポットで自然なスケール感。400カット以上・レタッチ30枚。オプション：ドレス追加・メイキング映像など。",
          },
          kansai: {
            title: "関西・都市一か所",
            cardTag1: "KANSAI",
            cardTag2: "1 CITY",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "送迎車、ヘアメイク終日、ドレス2着／スタイリング2種。8:00–18:00。京都・奈良・大阪のいずれか一都市で、フォトグラファーと相談の上文芸的なトーン。400カット以上・レタッチ30枚。着物などオプション可。",
          },
          hokkaido: {
            title: "北海道",
            cardTag1: "HOKKAIDO",
            cardTag2: "TRAVEL",
            priceExNum: "308,000",
            priceInNum: "338,800",
            body:
              "送迎車、ヘアメイク終日、ドレス2着／スタイリング2種。8:00–18:00。札幌・小樽を中心にルート相談。400カット以上・レタッチ30枚。メイキング・着物オプションは北海道用レート表に準拠。",
          },
          traditional: {
            title: "色打掛／白無垢（いずれか）",
            cardTag1: "WASOU",
            cardTag2: "FORMAL",
            priceExNum: "138,000",
            priceInNum: "151,800",
            body:
              "ヘアメイク＆着付け師付き。色打掛または白無垢を一着選択。10:00–15:00。スタジオと葛西周辺の公園で端正な和装。200カット以上・レタッチ20枚。時間延長や加修、メイキングなどオプション可。",
          },
          kanto_day: {
            title: "東京周辺・1日ロケ撮影",
            cardTag1: "TRAVEL",
            cardTag2: "1DAY",
            priceExNum: "60,000",
            priceInNum: "66,000",
            cardNote: "東京＋鎌倉（1日）税抜6万円〜 · 富士山＋箱根（1日）税抜8万円",
            priceLead: "税抜・1日あたりの料金です。ルートは予約時に選択してください。",
            routeA: "東京＋鎌倉（1日）",
            routeB: "富士山＋箱根（1日）",
            priceExNumA: "60,000",
            priceExNumB: "80,000",
            body:
              "首都圏エリアを対象とした1日ロケ撮影プラン。A：東京と鎌倉を同日に回るコース（税抜¥60,000〜）。B：富士山周辺と箱根を同日に回るコース（税抜¥80,000）。撮影時間・移動・納品枚数はご相談で確定します。ドレス追加・メイキング・着物などのオプションは他プランと同様のルールが適用されます（該当時）。",
          },
        },
      },
      costume: {
        hero: {
          eyebrow: "衣裳",
          h1: "ドレス・スタイリング",
          lead: "ロケーションと季節に合わせたドレス・スーツ・コーディネイト。",
        },
        c1: {
          title: "ブライダル・ドレス",
          body: "移動しやすい軽さと、風になびくシルエット。",
        },
        c2: {
          title: "スーツ・レイヤー",
          body: "山や雪、街歩きに合わせたクラシックからリラックスフィットまで。",
        },
        page: {
          kicker: "COSTUME",
          h1: "コスチューム",
          h1Line2: "ロケーション＆エロープメントの日のために",
          h1Line3: "セレクトした衣裳ライン",
          lead: "ドレス・スーツ・和装——日本の風と光、動きやすさを見据えて。",
          intro:
            "旅に耐える軽さと、雪・森・都市のガラス前でも写真に馴染むシルエットを大切にしています。最終のお衣装はご相談で確定します。下記は提携アトリエと調整するスタイルの一例です。",
          fairBefore: "試着会やシーズン情報は",
          fairLink: "キャンペーン＆イベント",
          fairAfter: "をご覧ください。",
          tabAll: "ALL",
          tabWedding: "ウェディングドレス",
          tabColor: "カラードレス",
          tabKimono: "KIMONO",
          tabMens: "MEN'S",
          filtersAria: "衣裳一覧を絞り込む",
          catalogHeading: "衣裳一覧",
          eventsHead: "CAMPAIGN & EVENT",
          ev1Tag: "EVENT",
          ev1Title: "ご試着フォト体験",
          ev1Body: "週末限定枠——シルエットを試しながら、本番前にお会いできます。",
          ev2Tag: "CAMPAIGN",
          ev2Title: "セカンドルック特典ウィンドウ",
          ev2Body: "掲載期間内の撮影では衣裳ブロックの組み合わせが変わる場合があります。詳細はキャンペーンページへ。",
          evCta: "詳細",
          pagerNote: "掲載はサンプルです——在庫はシーズンにより異なります。",
        },
      },
      campaign: {
        hero: {
          eyebrow: "CAMPAIGN",
          h1: "キャンペーン＆イベント",
          lead: "限定ご相談、体験枠、特典情報を随時更新しています。",
        },
        ctaDetails: "詳細を見る",
        item1Meta: "土日祝限定枠あり · 事前予約制",
        item2Meta: "掲載キャンペーン期間内のご予約が対象です",
        item3Meta: "オンライン実施 · 予約枠に限りがあります",
        item4Meta: "ルート・日程はオンライン空き状況により異なります",
        listHeading: "キャンペーン一覧",
        otherContentsTitle: "OTHER CONTENTS",
        other1Title: "PLAN",
        other1Sub: "商品・料金",
        other2Title: "GALLERY",
        other2Sub: "作品一覧",
        other3Title: "COSTUME",
        other3Sub: "ドレス・スタイリング",
        reserveBannerTitle: "Reservation",
        reserveBannerSub: "ご相談予約・お問い合わせ",
        reserveWebHeading: "Webからの予約・お問い合わせ",
        reserveBtnReserve: "ご相談予約をする",
        reserveBtnWhatsapp: "WhatsAppで相談する",
        reserveBtnWechat: "WeChat",
        reserveBtnX: "X",
        reserveBtnContact: "お問い合わせ",
        reservePhoneHeading: "お電話でのお問い合わせ",
        reservePhoneNumber: "—",
        reservePhoneHours: "10:00–18:00",
        ctaReserve: "予約する",
        ctaContact: "お問い合わせ",
      },
      reserve: {
        hero: {
          eyebrow: "チェックアウト",
          h1: "フォトプランを注文",
          lead:
            "プラン・オプション・ご希望日を選び、お客様情報を入力し、最後に安全な決済ページでお支払いください。決済後に確認メールをお送りします。",
        },
        flowTitle: "◆ご注文の流れ◆",
        step1: "撮影プラン、オプション、ご希望日を選びます。",
        step2: "ご注文用のお客様情報（お名前・メールなど）を入力します。",
        step3: "安全な決済ページでオンライン決済を完了します。完了後、確認メールが届きます。",
        phoneLine: "お電話：10:00–18:00",
        wizardNavAria: "チェックアウトの手順",
        wizardStepBuild: "内容を選ぶ",
        wizardStepDetails: "お客様情報",
        wizardStepPay: "オンライン決済",
        modelSectionTitle: "撮影プランを選ぶ",
        modelSectionSub:
            "ロケーションとパッケージを先に決めてから、追加オプションへ進みます（製品を選んでから構成するイメージです）。",
        optionsSectionTitle: "オプションを構成する",
        optionsSectionSub: "追加ドレス、メイキング動画、カップル着物、白無垢セットなど。",
        scheduleSectionTitle: "ご希望日",
        scheduleSectionSub: "カレンダーで日付を選び、「次へ」でお客様情報へ進みます。",
        detailsSectionTitle: "お客様情報",
        detailsSectionSub: "確認メール送付用にお名前・メールをご入力ください。電話は任意です。",
        paymentSectionTitle: "オンライン決済",
        paymentSectionSub: "下記をご確認のうえ、安全な決済ページへお進みください。",
        btnNextDetails: "次へ：お客様情報の入力",
        btnNextPayment: "次へ：オンライン決済",
        btnBackConfig: "内容を修正する",
        btnBackDetails: "お客様情報を修正する",
        dateRequired: "先にカレンダーでご希望日をお選びください。",
        phoneLabel: "電話（任意）",
        changePackage: "プランを変更",
        includesTitle: "このプランに含まれるもの",
        includesDisclaimer:
            "記載はパッケージ料金（税別）に含まれる内容です。追加ドレス・メイキング・着物などのオプションは別途お見積り／決済時にご案内します。",
        includes: {
          tokyo: [
            "当日の専用送迎車",
            "ヘアメイク終日同行",
            "ウェディングドレス2着／スタイリング2種",
            "サービス 8:00–18:00",
            "スタジオ＋東京都市ロケ（事前ルートに準拠）",
            "400カット以上納品、レタッチ30枚",
          ],
          shonan: [
            "東京プランと同内容のサービス範囲",
            "サービス 8:00–18:00",
            "沿線・湘南海岸・江の島・砂浜など海辺のロケーション",
            "400カット以上納品、レタッチ30枚",
          ],
          fuji: [
            "当日の専用送迎車",
            "ヘアメイク終日・ドレス2着／スタイリング2種（事前試着必須）",
            "サービス 7:00–18:00",
            "富士五湖エリア（山中湖・河口湖ほか選定の湖畔スポット）",
            "400カット以上納品、レタッチ30枚",
          ],
          kansai: [
            "当日の専用送迎車",
            "ヘアメイク終日・ドレス2着／スタイリング2種",
            "サービス 8:00–18:00",
            "関西・都市一か所（京都・奈良・大阪のいずれか、事前打合せ）",
            "400カット以上納品、レタッチ30枚",
          ],
          hokkaido: [
            "当日の専用送迎車",
            "ヘアメイク終日・ドレス2着／スタイリング2種",
            "サービス 8:00–18:00",
            "札幌・小樽中心のルート（事前調整）",
            "400カット以上納品、レタッチ30枚",
            "メイキング・着物オプションは北海道用レート表に準拠",
          ],
          traditional: [
            "ヘアメイク＆着付け師",
            "色打掛または白無垢（いずれか一着）",
            "サービス 10:00–15:00",
            "スタジオ＋葛西周辺の公園ロケ",
            "200カット以上納品、レタッチ20枚",
          ],
          kanto_day: [
            "首都圏エリアの1日ロケ撮影（予約時にルートを選択）",
            "東京＋鎌倉、または富士山＋箱根 — 料金が異なります（プラン参照）",
            "単日スケジュール；時間・移動はご相談で確定",
            "ドレス・メイキング・着物などの追加は、該当時は他プランと同様のルール",
          ],
        },
        selectLabel: "撮影プラン",
        opt1: "来店ご相談 · スタジオ［90分］",
        opt2: "オンライン見学・ご相談［40分］",
        opt3: "土日祝限定スペシャルフェア［90分＋試着60分］",
        booking: {
          panelPlan: "フォトプラン",
          panelAddon: "オプション",
          dressGroup: "追加ドレス着数（オプション）",
          dress0: "追加なし（プランに含まれるドレスのみ）",
          dress1: "+1着 — ¥20,000",
          dress2: "+2着 — ¥40,000",
          dress3: "+3着 — ¥60,000",
          dressCapNote:
            "各プランには既にウェディングドレスの着数が含まれています（多くのプランは2着、伝統衣裳プランは1着）。ここでの追加は同日の上乗せです。含まれる着数＋追加は1日あたり最大4着まで。上限を超える選択肢は自動的に選べません。",
          btsGroup: "メイキング動画",
          btsNone: "なし",
          btsStd: "標準（+¥50,000）",
          btsReg: "北海道・伊豆・富士山（+¥70,000）",
          kimonoGroup: "カップル着物",
          kimonoNone: "なし",
          kimonoStd: "標準（+¥50,000）",
          kimonoHkd: "北海道（+¥70,000）",
          shiroCheck: "白無垢＆色打掛セット（+¥50,000）",
          summaryTitle: "ご注文内容",
          planLine: "プラン（税別）",
          addonsLine: "オプション（税別）",
          subtotalEx: "小計（税別）",
          taxLine: "消費税（10%）",
          totalIn: "合計（税込）",
          cardNote:
            "お支払い：プラン条件に応じ、このステップの安全な決済ページでお預かり金または全額をお支払いいただきます。カード番号はこのページでは入力いただきません。",
          hintSelectPlan: "撮影プランを選ぶとご注文金額が表示されます。",
          viewPlansLink: "プラン一覧・含まれる内容 →",
          kantoPkgMeta: "税抜 ¥60,000 〜",
          kantoRouteLegend: "1日のルート",
          kantoRouteTk: "東京＋鎌倉（1日）— ¥60,000（税抜）",
          kantoRouteFh: "富士山＋箱根（1日）— ¥80,000（税抜）",
        },
        calendarTitle: "ご希望日",
        legendOpen: "受付中",
        legendFew: "残りわずか",
        legendClosed: "締め切り",
        wdMon: "月",
        wdTue: "火",
        wdWed: "水",
        wdThu: "木",
        wdFri: "金",
        wdSat: "土",
        wdSun: "日",
        nameLabel: "お名前",
        emailLabel: "メールアドレス",
        submitPay: "オンラインで支払う",
        note:
            "カード番号は安全な決済ページでのみ入力ください。決済完了後、確認メールをお送りします。",
        successMsg:
            "ご注文ありがとうございます。確認メールにてご注文内容をご確認ください。",
        ariaCalendar: "カレンダー",
      },
      contact: {
        hero: {
          eyebrow: "お問い合わせ",
          h1: "ご希望を聞かせてください",
          lead:
            "通常 24〜48 時間以内に返信します。予算や行き先もご記入ください。",
        },
        form: {
          name: "お名前",
          email: "メール",
          date: "希望時期",
          datePh: "例：2026-12",
          service: "サービス種別",
          message: "メッセージ",
          messagePh: "ふたりのストーリー、旅程、予算の目安",
          submit: "送信する",
          opt1: "エロープメント / カップル",
          opt2: "アウトドア撮影",
          opt3: "まだ決まっていない / 相談したい",
        },
        faq: {
          h2: "よくあるご質問",
          q1: "どのくらい前から予約すべきですか？",
          a1: "人気シーズンは早めに埋まります。ご希望の月とエリアをお知らせください。",
          q2: "撮影日に悪天候の場合は？",
          a2: "屋外は余裕を持った進行をご提案します。ご相談時に代替案もお話しします。",
          q3: "衣裳やルートの相談はできますか？",
          a3: "はい——衣裳ページと各プランの内容をご参照のうえ、光とペースに合わせてルートを整えます。",
        },
        wechat: {
          heading: "WeChat（微信）",
          lead: "WeChat をご利用の場合は、下記の ID から追加し、撮影希望日やイメージをお送りください。",
          idLabel: "WeChat ID",
          idValue: "mashirovisuals",
          copyBtn: "IDをコピー",
          copied: "コピーしました",
          note: "WhatsApp やこのページのフォームからもご連絡いただけます。",
        },
      },
      footer: {
        address: "日本を拠点に活動。ご来店・ご相談は予約制です。",
        linkHome: "ホーム",
        linkCampaign: "キャンペーン＆イベント",
        linkPlan: "プラン",
        linkGallery: "ギャラリー",
        linkCostume: "衣裳",
        linkReserve: "予約",
        linkAbout: "について",
        linkContact: "お問い合わせ",
        linkElopement: "エロープメント",
        linkOutdoor: "アウトドア",
        privacy: "プライバシーポリシー",
        company: "会社情報",
        copyright: "© 2026 Mashiro Visuals",
      },
    },

    ko: {
      nav: {
        home: "홈",
        elopement: "엘로프먼트",
        outdoor: "아웃도어",
        portfolio: "포트폴리오",
        about: "소개",
        contact: "문의",
        plan: "플랜",
        gallery: "갤러리",
        costume: "COSTUME",
        subPlan: "상품·패키지",
        subGallery: "선정 작품",
        subCostume: "드레스·스타일링",
        subAbout: "브랜드 스토리",
        subContact: "상담·예약",
        menuTitle: "메뉴",
        menuOpenAria: "메뉴 열기",
        menuCloseAria: "메뉴 닫기",
        instagramAria: "Instagram",
        whatsappAria: "WhatsApp",
        wechatAria: "WeChat",
        xAria: "X",
        campaignEvent: "CAMPAIGN & EVENT",
        subCampaignEvent: "캠페인·이벤트",
        ctaAiTitle: "AI 상담",
        ctaAiSub: "질문 답변",
        ctaReserveTitle: "예약",
        ctaReserveSub: "상담·예약",
      },
      common: {
        langAria: "언어",
        floatCtaAria: "AI 도우미 및 예약 바로가기",
        floatAiTitle: "AI 상담",
        floatAiSub: "질문 답변",
        aiPanelTitle: "Mashiro AI 도우미",
        aiPanelCloseAria: "채팅 닫기",
        aiWelcome:
          "안녕하세요. Mashiro Visuals 자동 도우미입니다. 패키지, 촬영지, 예약, 일정에 대해 물어보세요. 정식 견적·계약은 WhatsApp 또는 예약 양식으로 담당자가 안내합니다.",
        aiPlaceholder: "질문을 입력하세요…",
        aiSend: "보내기",
        aiThinking: "생각 중…",
        aiDisclaimer: "답변은 자동 생성이며 부정확할 수 있습니다. 최종 조건은 담당자 확인을 기준으로 합니다.",
        aiReplyDefault:
          "감사합니다. 가격대, 촬영 지역, 예약 방법, 납품에 대해 다시 질문해 보시거나 WhatsApp으로 연락해 주세요.",
        aiReplyPricing:
          "공개 요금은 Plan 페이지에 안내됩니다(세금 표기는 페이지 기준). 최종 견적은 시즌·지역·옵션에 따라 달라지며 Reserve 또는 WhatsApp으로 개별 문의하세요.",
        aiReplyLocations:
          "도쿄·쇼난·후지 호숫가·교토·가마쿠라·홋카이도·가루이자와·닛코 등에서 자주 촬영합니다. Gallery의 Location spots를 참고하세요.",
        aiReplyBooking:
          "RESERVE 버튼, Reserve 페이지 또는 WhatsApp으로 상담을 시작할 수 있습니다. 결제 링크 전에 일정과 납품을 확인합니다.",
        aiReplyDeliver:
          "컷 수·리터치·납기는 각 Plan 카드와 예약 후 요약에 안내됩니다.",
        aiReplyWeather:
          "야외 촬영은 날씨에 맞춰 일정을 조정하며 안전을 우선합니다.",
        aiReplyWhatsApp:
          "빠른 답변은 헤더 또는 예약 영역의 WhatsApp으로 희망일과 지역을 보내 주세요.",
        aiWhatsAppCta: "WhatsApp 열기",
        aiBack: "사이트로 돌아가기",
        aiBackAria: "홈으로 돌아가기",
      },
      meta: {
        index: {
          title: "Mashiro Visuals | 일본 야외 웨딩 & 엘로프먼트",
          description:
            "일본의 산과 자연에서 진짜 감정을 담습니다. 엘로프먼트와 아웃도어 촬영.",
        },
        elopement: {
          title: "엘로프먼트 | Mashiro Visuals",
          description: "일본 전역 로케이션 웨딩·엘로프먼트 촬영 루트와 패키지 안내.",
        },
        ski: {
          title: "아웃도어 촬영 | Mashiro Visuals",
          description: "산과 자연 속 커플·어드벤처 스토리 촬영. 날씨와 안전을 고려한 일정.",
        },
        portfolio: {
          title: "포트폴리오 | Mashiro Visuals",
          description: "도쿄, 후지산, 홋카이도, 가마쿠라, 스튜디오 등 대표 작품.",
        },
        about: {
          title: "소개 | Mashiro Visuals",
          description: "Miller / Mashiro 소개 — 일본 기반 엘로프먼트·야외 웨딩 포토그래퍼.",
        },
        contact: {
          title: "문의 | Mashiro Visuals",
          description: "일정·지역·예산 상담 — 폼, WhatsApp, WeChat으로 연락 주세요.",
        },
        aiChat: {
          title: "AI 도우미 | Mashiro Visuals",
          description: "Mashiro Visuals 도우미와 채팅으로 패키지, 촬영지, 예약, 납품 등을 안내받을 수 있습니다.",
        },
        plan: {
          title: "플랜 | Mashiro Visuals",
          description: "일본 웨딩·엘로프먼트 촬영 플랜과 상품 안내.",
        },
        costume: {
          title: "코스튬 | Mashiro Visuals",
          description:
            "일본 에로프먼트·로케이션 촬영용 드레스·컬러·기모노·수트 샘플 안내. 최종 선택은 상담 후 확정됩니다.",
        },
        campaign: {
          title: "캠페인 | Mashiro Visuals",
          description: "시즌 캠페인과 이벤트 안내.",
        },
        reserve: {
          title: "결제 | Mashiro Visuals",
          description:
            "촬영 패키지·옵션·희망일을 선택해 온라인으로 주문하고, 다음 단계에서 안전하게 결제합니다.",
        },
      },
      index: {
        hero: {
          tagline: "포토 웨딩 · 일본",
          eyebrow: "일본 웨딩 · 야외 & 엘로프먼트",
          h1: "일본에서, 자연광 웨딩 포토",
          lead:
            "일본을 여행하는 커플을 위한 웨딩·엘로프먼트 촬영. 솔직하고 시네마틱하게. 눈과 산, 열린 하늘 아래—억지 포즈 없이 둘과 풍경만. 자연광과 진짜 감정.",
          ctaPortfolio: "작품 보기",
          ctaInquire: "문의하기",
          circleReserve: "RESERVE",
          circleReserveSub: "방문 예약",
          scrollAria: "아래로 스크롤",
          note: "일본 기반. 영어 문의 환영.",
        },
        featured: { cta: "플랜 보기" },
        plan: {
          eyebrow: "플랜",
          h2: "촬영 플랜",
          lead: "예약 전에 도쿄·후지·간토 당일 루트와 옵션, 포함 내용을 비교해 보세요.",
        },
        costume: {
          eyebrow: "스타일링",
          h2: "코스튬",
          body: "웨딩드레스·컬러 드레스·기모노·정장 라인업 예시를 미리 확인할 수 있습니다.",
          btn: "코스튬 페이지",
        },
        combos: {
          h2: "인기 조합",
          lead: "함께 문의가 많은 스타터 세트입니다.",
          c1Title: "도쿄 시티 + 룩 체인지",
          c1Body: "도심 라인과 의상 교체를 하루에 — 풀데이 페이싱.",
          c2Title: "후지 오호 당일 촬영",
          c2Body: "호숫가 빛과 산 배경을 하루에.",
          c3Title: "간토 당일 루트",
          c3Body: "도쿄+가마쿠라 또는 후지+하코네 — 하루에 두 가지 무드.",
          c1Cta: "도쿄 플랜",
          c2Cta: "후지 플랜",
          c3Cta: "간토 당일 플랜",
        },
        galleryBand: {
          h2: "갤러리",
          lead: "후지·도쿄·홋카이도·가마쿠라·스튜디오 등 로케이션 작품 — 전체 그리드에서 앨범을 열어보세요.",
          btn: "갤러리 열기",
        },
        endTiles: {
          flowTitle: "FLOW",
          flowSub: "문의부터 촬영일까지의 단계.",
          faqTitle: "FAQ",
          faqSub: "일정·날씨·의상·예약 기본.",
        },
        about: {
          eyebrow: "소개",
          h2: "Miller이며, 일본에서는 Mashiro로 불립니다",
          body:
            "엘로프먼트와 아웃도어에 집중합니다. 자연광과 진짜 상호작용. 과하지 않은 시네마 톤.",
          btn: "소개 읽기",
        },
        why: {
          h2: "함께하는 이유",
          i1: {
            title: "일본 거주",
            body: "계절·날씨·장소를 잘 알아 계획이 매끄럽습니다.",
          },
          i2: {
            title: "아웃도어 대응",
            body: "고산·설원에서도 안전을 염두에 결정적인 순간을 담습니다.",
          },
          i3: {
            title: "자연스러운 시네마",
            body: "지시보다 안내. 연기가 아닌 진짜 감정.",
          },
        },
        cta: {
          eyebrow: "문의",
          h2: "일본 여행을 살아 숨 쉬는 이야기로",
          p: "일정과 가고 싶은 곳을 알려주세요. 맞춤 촬영안을 보내 드립니다.",
          btn: "문의 보내기",
        },
        campaign: {
          eyebrow: "CAMPAIGN & EVENT",
          ariaCarousel: "캠페인 및 이벤트",
          c1: {
            tag1: "EVENT",
            title: "봄 피팅·상담 페어",
            body: "한정 기간 — 의상 업그레이드·옵션 혜택. 예약 시 패키지 안내.",
          },
          c2: {
            tag1: "CAMPAIGN",
            title: "드레스 2벌 증정",
            body: "캠페인 기간 내 촬영 예약 대상 — 문의 시 조건 확인.",
          },
          c3: {
            tag1: "EVENT",
            tag2: "NEW",
            title: "온라인 작품 안내",
            body: "짧은 온라인 세션 — 루트, 조명, 납품 흐름을 한 번에.",
          },
          c4: {
            tag1: "EVENT",
            title: "얼리버드 예약 기간",
            body: "선택 일정 한정 안내 — 잔여 일정 확인 후 온라인에서 구성·신청이 가능합니다.",
          },
        },
        float: {
          eyebrow: "로케이션",
          h2: "로케이션 사진",
          lead:
            "화살표로 넘기거나 자동 재생을 기다리세요. 각 슬라이드는 갤러리(Gallery)의 같은 지점으로 연결됩니다.",
          ariaPrev: "이전 슬라이드",
          ariaNext: "다음 슬라이드",
          c1: { title: "후지산" },
          c2: { title: "도쿄" },
          c3: { title: "홋카이도" },
          c4: { title: "가마쿠라" },
        },
        footer: { line2: "일본 엘로프먼트 & 아웃도어" },
      },
      elopement: {
        hero: {
          eyebrow: "일본 엘로프먼트",
          h1: "자연이 감싸 안은 약속",
          lead:
            "도쿄 근교부터 후지, 홋카이도, 가루이자와까지. 계절과 빛에 맞춰 루트를 짭니다.",
        },
        products: {
          h2: "웨딩 & 엘로프먼트 패키지",
          lead:
            "각 패키지별 촬영 범위·납품·이동 안내. 비공개 온라인 갤러리와 인쇄용 파일 포함.",
          fuji: {
            title: "후지산 — 웨딩 & 엘로프먼트",
            price: "¥180,000부터",
            b1: "오호·5합목 루트, 일출·골든아워",
            b2: "500장 이상, 날씨·혼잡도에 맞춘 일정",
            b3: "상징적인 산과 넓은 풍경 인물",
          },
          kyoto: {
            title: "교토 — 웨딩 & 엘로프먼트",
            price: "¥200,000부터",
            b1: "기온, 아라시야마, 대나무 숲, 사찰 정원(허가 필요 시 신청)",
            b2: "기모노·드레스, 이른 아침 슬롯 가능",
            b3: "돌길, 계절 단풍·벚꽃, 고도 거리",
          },
          hokkaido: {
            title: "홋카이도 — 웨딩 & 엘로프먼트",
            price: "¥280,000부터",
            b1: "설원·스키장·해안 — 종일 촬영",
            b2: "700장 이상, 방한·루트 유연 조정",
            b3: "세컨드 슈터 가능, 겨울 웨딩에 강함",
          },
          kamakura: {
            title: "가마쿠라 — 웨딩 & 엘로프먼트",
            price: "¥160,000부터",
            b1: "신사·대나무·해안 — 도쿄 당일치기에 좋음",
            b2: "반나절~종일, 여유로운 진행",
            b3: "바닷바람, 도리이, 숲길이 한데 모여 있음",
          },
        },
      },
      ski: {
        hero: {
          eyebrow: "아웃도어 촬영",
          h1: "속도, 날씨, 감정을 한 프레임에",
          lead:
            "야외와 모험을 좋아하는 커플을 위해. 움직임 중심의 시네마틱 촬영.",
        },
        price1: { title: "솔로 / 커플 아웃도어", price: "¥80,000부터" },
        price2: { title: "마운틴 스토리", price: "¥120,000부터" },
        cta: {
          h2: "가고 싶은 곳을 알려주세요",
          p: "루트·시간대·촬영 팁을 공유해 안전하고 편안하게 진행합니다.",
          btn: "문의하기",
        },
      },
      portfolio: {
        hero: {
          eyebrow: "포트폴리오",
          h1: "감정을 풍경에 남기다",
          lead:
            "엘로프먼트, 커플, 아웃도어 엄선. 자연스러운 내러티브.",
        },
        loc: {
          kicker: "LOCATION PHOTO",
          h1: "로케이션 촬영",
          h1sub: "Mashiro Visuals · Japan",
          lead: "일본 로케이션 촬영 — 자연광, 여유 있는 구도, 진짜 감정을 담습니다.",
          intro:
            "스튜디오 밖으로: 계절·빛·사람의 흐름을 고려한 루트로, 풍경에 몰입할 시간을 만듭니다.",
          memo: "Memories",
          featureTitle: "FEATURE",
          featureLead: "로케이션 당일 중요하게 여기는 것.",
          f1n: "01",
          f1t: "빛 & 의상",
          f1b: "루트에 맞춘 드레스·턱시도. 질감·피부톤·풍경이 조화롭게 담기도록 시간을 설계합니다.",
          f2n: "02",
          f2t: "로케이션",
          f2b: "도시의 라인부터 호숫가의 바람까지 — 이야기에 맞는 후보를 고르고 이동은 여유 있게.",
          f3n: "03",
          f3t: "디렉션",
          f3b: "가벼운 포즈와 명확한 신호로 망설임을 줄입니다. 하루는 연기가 아닙니다.",
          spotsTitle: "LOCATION SPOTS",
          spotsLead: "엘로프먼트·커플 촬영에 자주 다시 가는 지역.",
          spot1: "도쿄 · 도심",
          spot2: "쇼난 · 해안",
          spot3: "후지 · 호수",
          spot4: "교토 · 골목과 사찰",
          spot5: "가마쿠라 · 도리이와 바다",
          spot6: "홋카이도 · 눈과 들판",
          spot7: "가루이자와 · 숲의 빛",
          spot8: "닛코 · 삼나무 길",
          mosaicLabel: "PHOTO GALLERY",
          moreBtn: "VIEW MORE",
          spotPackagesLink: "상품",
        },
        gallery: {
          title: "GALLERY",
          subtitle: "포토 갤러리",
          catAll: "ALL",
          catStudio: "STUDIO PHOTO",
          catTokyo: "도쿄",
          catFuji: "후지산",
          catKamakura: "가마쿠라",
          catKyoto: "교토",
          catHokkaido: "홋카이도",
          catOther: "기타",
          sortPopular: "인기순",
          sortNewest: "최신순",
          filterAria: "카테고리로 필터",
          sortAria: "정렬",
          lightboxCloseAria: "갤러리 닫기",
          lightboxPrevAria: "이전 사진",
          lightboxNextAria: "다음 사진",
          lightboxFsEnterAria: "전체 화면",
          lightboxFsExitAria: "전체 화면 종료",
          lightboxZoomInAria: "확대",
          lightboxZoomOutAria: "축소",
          lightboxCounter: "{current} / {total}",
        },
      },
      about: {
        hero: {
          eyebrow: "Mashiro 소개",
          h1: "Miller, 일본에서는 Mashiro",
          lead:
            "일본 기반으로 엘로프먼트와 아웃도어를 촬영합니다. 자연광과 진솔한 교류.",
        },
        c1: {
          title: "촬영 방식",
          body:
            "세세한 지시보다 둘과 풍경에 집중하게. 감정은 따라옵니다.",
        },
        c2: {
          title: "제가 드리는 것",
          body:
            "로컬 지식, 야외 기동력, 날씨 판단. 안전과 완성도.",
        },
      },
      plan: {
        hero: {
          eyebrow: "플랜",
          h1: "패키지·상품",
          lead: "옵션·가격·포함 사항을 확인하고 일본 촬영을 계획하세요.",
          brandNote:
            "모든 패키지와 표시 가격은 Mashiro Visuals의 안내입니다. 최종 견적은 시즌·장소·추가 옵션에 따라 달라질 수 있습니다.",
        },
        list: {
          kicker: "PHOTO WEDDING PLAN",
          sub1: "플랜에 필요한 구성이 모두 포함됩니다.",
          sub2: "일본 올인클루시브 포토 웨딩.",
          viewDetails: "자세히 보기",
          priceLabel: "요금",
          yenSuffix: "円",
          taxExcludedTag: "(세금 별도)",
          taxIncludedTag: "(세금 포함)",
          taxNote: "",
        },
        detail: {
          back: "전체 플랜",
          inquire: "이 플랜 문의하기",
          reserve: "상담 예약",
        },
        pkg: {
          tokyo: {
            title: "도쿄·도시",
            cardTag1: "STUDIO",
            cardTag2: "TOKYO",
            priceExNum: "148,000",
            priceInNum: "162,800",
            body:
              "전용 차량, 종일 헤어·메이크업, 웨딩드레스 2벌·스타일링 2회. 8:00–18:00. 스튜디오와 도쿄 타워·도쿄역·오다이바·가사이 린카이 공원 등 도시 로케. 400컷 이상·리터칭 30장. 옵션: 드레스 추가 ¥2만·메이킹 영상 ¥5만·커플 기모노 ¥5만.",
          },
          shonan: {
            title: "쇼난·해안",
            cardTag1: "COAST",
            cardTag2: "SHONAN",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "도쿄 패키지와 동일 구성. 8:00–18:00. 전차 코스·쇼난 해안·에노시마·해변 등 서정적인 빛. 400컷 이상·리터칭 30장. 옵션은 도쿄와 동일.",
          },
          fuji: {
            title: "후지·호수",
            cardTag1: "LAKES",
            cardTag2: "MT. FUJI",
            priceExNum: "288,000",
            priceInNum: "316,800",
            body:
              "전용 차량, 종일 HMU, 드레스 2벌·스타일링 2회. 7:00–18:00, 사전 피팅 필수. 야마나코·가와구치코와 Mashiro Visuals 선정 프라이빗 호숫가. 400컷 이상·리터칭 30장.",
          },
          kansai: {
            title: "간사이·도시 하나",
            cardTag1: "KANSAI",
            cardTag2: "ONE CITY",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "전용 차량·종일 HMU·드레스 2벌·스타일링 2회. 8:00–18:00. 교토·나라·오사카 중 한 도시—작가와 협의. 400컷 이상·리터칭 30장. 기모노 옵션 가능.",
          },
          hokkaido: {
            title: "홋카이도",
            cardTag1: "HOKKAIDO",
            cardTag2: "TRAVEL",
            priceExNum: "308,000",
            priceInNum: "338,800",
            body:
              "전용 차량·종일 HMU·드레스 2벌·스타일링 2회. 8:00–18:00. 삿포로·오타루 중심 루트. 400컷 이상·리터칭 30장. 메이킹·기모노 옵션은 홋카이도 요금표 적용.",
          },
          traditional: {
            title: "이로우치카케 / 시로무쿠",
            cardTag1: "WASOU",
            cardTag2: "FORMAL",
            priceExNum: "138,000",
            priceInNum: "151,800",
            body:
              "헤어·메이크업·입는 법 전문가 동행. 이로우치카케 또는 시로무쿠 택1. 10:00–15:00. 스튜디오+가사이 인근 공원. 200컷 이상·리터칭 20장.",
          },
          kanto_day: {
            title: "도쿄 근교 1일 로케",
            cardTag1: "TRAVEL",
            cardTag2: "1DAY",
            priceExNum: "60,000",
            priceInNum: "66,000",
            cardNote: "도쿄+가마쿠라(1일) 세전 6만엔~ · 후지+하코네(1일) 세전 8만엔",
            priceLead: "세금 별도·1일 기준 요금입니다. 예약 시 루트를 선택하세요.",
            routeA: "도쿄 + 가마쿠라 (1일)",
            routeB: "후지산 + 하코네 (1일)",
            priceExNumA: "60,000",
            priceExNumB: "80,000",
            body:
              "수도권을 중심으로 한 1일 로케 촬영. A: 도쿄와 가마쿠라를 같은 날(세전 ¥60,000~). B: 후지와 하코네를 같은 날(세전 ¥80,000). 촬영 시간·이동·납품은 상담 시 확정합니다. 드레스·메이킹·기모노 등 추가 옵션은 다른 패키지와 동일 규칙이 적용될 수 있습니다.",
          },
        },
      },
      costume: {
        hero: {
          eyebrow: "코스튬",
          h1: "의상·스타일링",
          lead: "촬영지와 계절에 맞는 드레스·수트·코디.",
        },
        c1: {
          title: "브라이덜·드레스",
          body: "여행과 야외 이동에 맞는 가벼운 실루엣.",
        },
        c2: {
          title: "수트·레이어",
          body: "산·눈·도시 산책에 맞는 클래식부터 캐주얼까지.",
        },
        page: {
          kicker: "COSTUME",
          h1: "코스튬",
          h1Line2: "로케이션·에로프먼트 데이를 위한",
          h1Line3: "큐레이션 워드로브",
          lead: "드레스·수트·와소——일본의 바람, 빛, 움직임을 고려해 고릅니다.",
          intro:
            "여행에 무리 없는 실루엣과 눈·숲·도시 유리 앞에서도 사진이 깔끔하게 읽히는 라인을 중시합니다. 최종 의상은 상담에서 확정하며, 아래는 파트너 아뜰리에와 조율하는 스타일 예시입니다.",
          fairBefore: "시착 이벤트와 시즌 정보는",
          fairLink: "캠페인 & 이벤트",
          fairAfter: " 페이지에서 확인하세요.",
          tabAll: "ALL",
          tabWedding: "웨딩 드레스",
          tabColor: "컬러 드레스",
          tabKimono: "기모노",
          tabMens: "맨즈",
          filtersAria: "코스튬 카탈로그 필터",
          catalogHeading: "코스튬 카탈로그",
          eventsHead: "CAMPAIGN & EVENT",
          ev1Tag: "EVENT",
          ev1Title: "시착·미니 세션",
          ev1Body: "주말 한정 슬롯——실루엣을 먼저 보고, 종일 촬영 예약 전에 만나보세요.",
          ev2Tag: "CAMPAIGN",
          ev2Title: "세컨드 룩 보너스 기간",
          ev2Body: "게시된 기간 안 촬영은 의상 블록 구성이 달라질 수 있습니다. 캠페인 페이지를 참고하세요.",
          evCta: "자세히",
          pagerNote: "샘플 안내입니다——재고는 시즌에 따라 달라집니다.",
        },
      },
      campaign: {
        hero: {
          eyebrow: "CAMPAIGN",
          h1: "캠페인 & 이벤트",
          lead: "한정 상담, 체험 슬롯, 혜택 정보를 수시로 업데이트합니다.",
        },
        ctaDetails: "자세히 보기",
        item1Meta: "주말·공휴일 한정 슬롯 · 사전 예약",
        item2Meta: "게시된 캠페인 기간 내 예약 건에 적용",
        item3Meta: "온라인 진행 · 예약 필수",
        item4Meta: "루트·일정 · 온라인 재고에 따라 상이",
        listHeading: "캠페인 목록",
        otherContentsTitle: "OTHER CONTENTS",
        other1Title: "PLAN",
        other1Sub: "상품·패키지",
        other2Title: "GALLERY",
        other2Sub: "선정 작품",
        other3Title: "COSTUME",
        other3Sub: "드레스·스타일링",
        reserveBannerTitle: "Reservation",
        reserveBannerSub: "상담 예약·문의",
        reserveWebHeading: "웹 예약·문의",
        reserveBtnReserve: "상담 예약하기",
        reserveBtnWhatsapp: "WhatsApp 상담",
        reserveBtnWechat: "WeChat",
        reserveBtnX: "X",
        reserveBtnContact: "문의하기",
        reservePhoneHeading: "전화 문의",
        reservePhoneNumber: "—",
        reservePhoneHours: "10:00–18:00",
        ctaReserve: "예약하기",
        ctaContact: "문의하기",
      },
      reserve: {
        hero: {
          eyebrow: "결제",
          h1: "포토 패키지 주문",
          lead:
            "패키지·옵션·희망일을 고른 뒤 개인 정보를 입력하고, 마지막에 안전한 결제 페이지에서 온라인 결제를 완료하세요. 결제 후 확인 메일이 발송됩니다.",
        },
        flowTitle: "◆주문·결제 흐름◆",
        step1: "촬영 패키지, 옵션, 희망 날짜를 선택합니다.",
        step2: "주문에 필요한 개인 정보(이름·이메일 등)를 입력합니다.",
        step3: "안전한 결제 페이지에서 온라인 결제를 완료합니다. 완료 후 확인 메일을 받습니다.",
        phoneLine: "전화: 10:00–18:00",
        wizardNavAria: "결제 단계",
        wizardStepBuild: "주문 구성",
        wizardStepDetails: "개인 정보",
        wizardStepPay: "온라인 결제",
        modelSectionTitle: "촬영 패키지 선택",
        modelSectionSub:
            "지역과 패키지를 먼저 정한 뒤 추가 옵션으로 진행합니다(본체를 고른 뒤 사양을 고르는 흐름과 같습니다).",
        optionsSectionTitle: "옵션 구성",
        optionsSectionSub: "추가 드레스, 메이킹 영상, 커플 기모노, 시로무쿠 패키지 등.",
        scheduleSectionTitle: "희망 날짜",
        scheduleSectionSub: "달력에서 날짜를 고른 뒤 「다음」으로 개인 정보를 입력하세요.",
        detailsSectionTitle: "개인 정보",
        detailsSectionSub: "확인 메일 발송을 위해 이름과 이메일을 입력하세요. 전화는 선택입니다.",
        paymentSectionTitle: "온라인 결제",
        paymentSectionSub: "아래 안내를 확인한 뒤 안전한 결제 페이지로 진행하세요.",
        btnNextDetails: "다음: 개인 정보 입력",
        btnNextPayment: "다음: 온라인 결제",
        btnBackConfig: "주문 내용 수정",
        btnBackDetails: "개인 정보 수정",
        dateRequired: "달력에서 희망 날짜를 먼저 선택하세요.",
        phoneLabel: "전화 (선택)",
        changePackage: "패키지 변경",
        includesTitle: "패키지 포함 내용",
        includesDisclaimer:
            "위 항목은 패키지 가격(세금 별도)에 포함됩니다. 추가 드레스·메이킹·기모노 등은 별도 견적/결제 단계에서 안내됩니다.",
        includes: {
          tokyo: [
            "당일 전용 차량 이동",
            "종일 헤어·메이크업 동행",
            "웨딩드레스 2벌 / 스타일링 2회",
            "촬영 8:00–18:00",
            "스튜디오 + 도쿄 시내 로케이션(사전 루트 기준)",
            "400컷 이상 전달, 리터칭 30장",
          ],
          shonan: [
            "도쿄 패키지와 동일 수준의 포함 범위",
            "촬영 8:00–18:00",
            "해안 전철·쇼난 해안·에노시마·해변 루트",
            "400컷 이상 전달, 리터칭 30장",
          ],
          fuji: [
            "당일 전용 차량 이동",
            "종일 HMU·드레스 2벌·스타일링 2회(사전 피팅 필수)",
            "촬영 7:00–18:00",
            "후지 호수권(야마나코·가와구치코 및 선정 포인트)",
            "400컷 이상 전달, 리터칭 30장",
          ],
          kansai: [
            "당일 전용 차량 이동",
            "종일 HMU·드레스 2벌·스타일링 2회",
            "촬영 8:00–18:00",
            "간사이 도시 하나(교토·나라·오사카 중 택1, 사전 협의)",
            "400컷 이상 전달, 리터칭 30장",
          ],
          hokkaido: [
            "당일 전용 차량 이동",
            "종일 HMU·드레스 2벌·스타일링 2회",
            "촬영 8:00–18:00",
            "삿포로·오타루 중심 루트(사전 조율)",
            "400컷 이상 전달, 리터칭 30장",
            "메이킹·기모노 옵션은 홋카이도 요금표 별도",
          ],
          traditional: [
            "헤어·메이크업·기모노 착장 전문가",
            "이로우치카케 또는 시로무쿠 택1",
            "촬영 10:00–15:00",
            "스튜디오+가사이 인근 공원",
            "200컷 이상 전달, 리터칭 20장",
          ],
          kanto_day: [
            "수도권 1일 로케 촬영(예약 시 루트 선택)",
            "도쿄+가마쿠라 또는 후지+하코네 — 요금 상이(플랜 참고)",
            "1일 일정; 시간·이동은 상담 시 확정",
            "드레스·메이킹·기모노 추가는 해당 시 다른 패키지와 동일 규칙",
          ],
        },
        selectLabel: "촬영 패키지",
        opt1: "방문 상담 · 스튜디오 [90분]",
        opt2: "온라인 투어·상담 [40분]",
        opt3: "주말·공휴일 한정 스페셜 페어 [90분+피팅 60분]",
        booking: {
          panelPlan: "포토 패키지",
          panelAddon: "추가 옵션",
          dressGroup: "추가 드레스 수 (옵션)",
          dress0: "없음 (패키지에 포함된 드레스만)",
          dress1: "+1벌 — ¥20,000",
          dress2: "+2벌 — ¥40,000",
          dress3: "+3벌 — ¥60,000",
          dressCapNote:
            "각 패키지에는 이미 웨딩드레스 벌 수가 포함되어 있습니다(대부분 2벌, 전통 패키지 1벌). 여기서는 같은 날 추가 벌 수입니다. 포함 + 추가는 하루 최대 4벌까지이며, 초과하는 항목은 자동으로 선택할 수 없습니다.",
          btsGroup: "메이킹 영상",
          btsNone: "없음",
          btsStd: "일반 (+¥50,000)",
          btsReg: "홋카이도·이즈·후지산 (+¥70,000)",
          kimonoGroup: "커플 기모노",
          kimonoNone: "없음",
          kimonoStd: "일반 (+¥50,000)",
          kimonoHkd: "홋카이도 (+¥70,000)",
          shiroCheck: "시로무쿠·이로우치카케 (+¥50,000)",
          summaryTitle: "주문 요약",
          planLine: "패키지(세금 별도)",
          addonsLine: "옵션(세금 별도)",
          subtotalEx: "소계(세금 별도)",
          taxLine: "소비세 10%",
          totalIn: "합계(세금 포함)",
          cardNote:
            "결제: 플랜 조건에 따라 주문 후 안전한 결제 페이지에서 예약금 또는 전액을 결제합니다. 카드 번호는 이 페이지가 아닌 결제 페이지에서만 입력합니다.",
          hintSelectPlan: "포토 패키지를 선택하면 주문 금액이 표시됩니다.",
          viewPlansLink: "플랜 안내·포함 내용 →",
          kantoPkgMeta: "세전 ¥60,000~",
          kantoRouteLegend: "1일 루트",
          kantoRouteTk: "도쿄 + 가마쿠라 (1일) — ¥60,000 (세전)",
          kantoRouteFh: "후지산 + 하코네 (1일) — ¥80,000 (세전)",
        },
        calendarTitle: "희망 날짜",
        legendOpen: "접수 중",
        legendFew: "잔여 소수",
        legendClosed: "마감",
        wdMon: "월",
        wdTue: "화",
        wdWed: "수",
        wdThu: "목",
        wdFri: "금",
        wdSat: "토",
        wdSun: "일",
        nameLabel: "이름",
        emailLabel: "이메일",
        submitPay: "온라인 결제하기",
        note:
            "카드 번호는 안전한 결제 페이지에서만 입력합니다. 결제 완료 후 확인 메일을 보내드립니다.",
        successMsg:
            "주문이 완료되었습니다. 이메일로 보내드린 확인서를 확인해 주세요.",
        ariaCalendar: "캘린더",
      },
      contact: {
        hero: {
          eyebrow: "문의",
          h1: "계획을 알려주세요",
          lead:
            "보통 24~48시간 안에 답합니다. 예산과 목적지도 적어 주세요.",
        },
        form: {
          name: "이름",
          email: "이메일",
          date: "희망 일정",
          datePh: "예: 2026-12",
          service: "서비스 유형",
          message: "메시지",
          messagePh: "이야기, 일정, 예산 범위",
          submit: "보내기",
          opt1: "엘로프먼트 / 커플",
          opt2: "아웃도어 촬영",
          opt3: "아직 잘 모르겠어요",
        },
        faq: {
          h2: "자주 묻는 질문",
          q1: "얼마나 미리 예약해야 하나요?",
          a1: "인기 시즌은 빨리 찹니다. 희망 월과 지역을 알려주시면 가능한 일정을 안내합니다.",
          q2: "촬영일 날씨가 안 좋으면요?",
          a2: "야외 일정은 여유를 두고 조정합니다. 상담 시 대안과 안전도 함께 이야기합니다.",
          q3: "의상과 루트도 도와주나요?",
          a3: "네 — 코스튬 샘플과 각 플랜 내용을 참고해 빛과 템포에 맞춰 루트를 맞춥니다.",
        },
        wechat: {
          heading: "WeChat",
          lead: "WeChat을 선호하시면 아래 ID로 추가한 뒤 희망 일정과 아이디어를 보내 주세요.",
          idLabel: "WeChat ID",
          idValue: "mashirovisuals",
          copyBtn: "ID 복사",
          copied: "복사됨",
          note: "WhatsApp이나 이 페이지의 양식으로도 연락하실 수 있습니다.",
        },
      },
      footer: {
        address: "일본 기반. 방문·상담은 예약제입니다.",
        linkHome: "홈",
        linkCampaign: "CAMPAIGN & EVENT",
        linkPlan: "플랜",
        linkGallery: "갤러리",
        linkCostume: "코스튬",
        linkReserve: "예약",
        linkAbout: "소개",
        linkContact: "문의",
        linkElopement: "엘로프먼트",
        linkOutdoor: "아웃도어",
        privacy: "개인정보 처리방침",
        company: "회사 정보",
        copyright: "© 2026 Mashiro Visuals. All rights reserved.",
      },
    },

    ru: {
      nav: {
        home: "Главная",
        elopement: "Элопмент",
        outdoor: "Аутдор",
        portfolio: "Портфолио",
        about: "Обо мне",
        contact: "Контакты",
        plan: "План",
        gallery: "Галерея",
        costume: "COSTUME",
        subPlan: "Продукты и пакеты",
        subGallery: "Избранные работы",
        subCostume: "Образы и стиль",
        subAbout: "История бренда",
        subContact: "Запрос и бронирование",
        menuTitle: "Меню",
        menuOpenAria: "Открыть меню",
        menuCloseAria: "Закрыть меню",
        instagramAria: "Instagram",
        whatsappAria: "WhatsApp",
        wechatAria: "WeChat",
        xAria: "X",
        campaignEvent: "CAMPAIGN & EVENT",
        subCampaignEvent: "Акции и события",
        ctaAiTitle: "ИИ-ЧАТ",
        ctaAiSub: "Спросить",
        ctaReserveTitle: "ЗАПИСЬ",
        ctaReserveSub: "Консультация и бронь",
      },
      common: {
        langAria: "Язык",
        floatCtaAria: "ИИ-помощник и быстрые ссылки на запись",
        floatAiTitle: "ИИ-ЧАТ",
        floatAiSub: "Спросить",
        aiPanelTitle: "Помощник Mashiro",
        aiPanelCloseAria: "Закрыть чат",
        aiWelcome:
          "Здравствуйте. Я автоматический помощник Mashiro Visuals. Спрашивайте о пакетах, локациях, бронировании и сроках. Для точной сметы или договора с вами свяжется человек через WhatsApp или форму записи.",
        aiPlaceholder: "Введите вопрос…",
        aiSend: "Отправить",
        aiThinking: "Думаю…",
        aiDisclaimer:
          "Ответы создаются автоматически и могут быть неполными. Итоговые условия — после проверки человеком.",
        aiReplyDefault:
          "Спасибо. Попробуйте спросить про цены, регионы, как записаться или про сдачу материалов. Либо напишите в WhatsApp в шапке сайта.",
        aiReplyPricing:
          "Ориентиры цен — на странице Plan (налогообложение — как указано). Финальная сумма зависит от сезона, локаций и опций; для оценки — Reserve или WhatsApp.",
        aiReplyLocations:
          "Часто снимаем: Токио, Сёнан, Фудзи и озёра, Киото, Камакура, Хоккайдо, Каруидзава, Никко — см. список Location spots в Gallery.",
        aiReplyBooking:
          "Начать можно с кнопки RESERVE, страницы Reserve или WhatsApp. Перед ссылкой на оплату подтверждаем даты и состав работ.",
        aiReplyDeliver:
          "Количество кадров, ретушь и сроки — в карточках планов и в сводке после бронирования.",
        aiReplyWeather:
          "На улице график гибкий по погоде; безопасность важнее — запас по времени обсуждаем на консультации.",
        aiReplyWhatsApp:
          "Быстрее всего ответ человека — через WhatsApp в шапке или в блоке бронирования: укажите даты и регион.",
        aiWhatsAppCta: "Открыть WhatsApp",
        aiBack: "На сайт",
        aiBackAria: "На главную",
      },
      meta: {
        index: {
          title: "Mashiro Visuals | Элопмент и аутдор в Японии",
          description:
            "Настоящие эмоции в горах и природе Японии. Элопмент и аутдор-съёмка.",
        },
        elopement: {
          title: "Элопмент | Mashiro Visuals",
          description: "Свадьба и элопмент на натуре по Японии — маршруты, пакеты и ожидания.",
        },
        ski: {
          title: "Аутдор-съёмка | Mashiro Visuals",
          description: "Истории пар и приключений на природе Японии — движение, погода, кинематографичный кадр.",
        },
        portfolio: {
          title: "Портфолио | Mashiro Visuals",
          description: "Отборочные серии: Токио, Фудзи, Хоккайдо, Камакура, студия и другое.",
        },
        about: {
          title: "Обо мне | Mashiro Visuals",
          description: "Miller / Mashiro — фотограф в Японии: элопменты, свадьбы на локациях, естественный свет.",
        },
        contact: {
          title: "Контакты | Mashiro Visuals",
          description: "Даты, локации, бюджет — форма, WhatsApp или WeChat в шапке сайта.",
        },
        aiChat: {
          title: "Помощник | Mashiro Visuals",
          description:
            "Чат с помощником Mashiro Visuals: пакеты, локации, бронирование и сдача материалов в Японии.",
        },
        plan: {
          title: "План | Mashiro Visuals",
          description: "Пакеты и продукты для свадебной и элопмент-съёмки в Японии.",
        },
        costume: {
          title: "Костюмы | Mashiro Visuals",
          description:
            "Примеры платьев, цветных нарядов, кимоно и костюмов для съёмок в Японии; финальный набор — на консультации.",
        },
        campaign: {
          title: "Кампании | Mashiro Visuals",
          description: "Сезонные акции и события студии.",
        },
        reserve: {
          title: "Оформление заказа | Mashiro Visuals",
          description:
            "Соберите фотопакет и опции, выберите дату и оформите заказ онлайн. Оплата на защищённой странице.",
        },
      },
      index: {
        hero: {
          tagline: "Фото-свадьба · Япония",
          eyebrow: "Свадьба, элопмент и аутдор в Японии",
          h1: "Свадьба и элопмент в Японии — естественный свет, спокойное кино",
          lead:
            "Честная кинематографичная съёмка свадеб и элопментов для пар, путешествующих по Японии. Снег, горы и открытое небо — без жёстких поз, только вы и пейзаж. Естественный свет и настоящие эмоции.",
          ctaPortfolio: "Портфолио",
          ctaInquire: "Связаться",
          circleReserve: "RESERVE",
          circleReserveSub: "Записаться на визит",
          scrollAria: "Прокрутить к содержимому",
          note: "Базируюсь в Японии. Пишите на английском — добро пожаловать.",
        },
        featured: { cta: "Смотреть планы" },
        plan: {
          eyebrow: "Пакеты",
          h2: "Наши планы",
          lead:
            "Сравните Токио, Фудзи, маршруты «день в Канто», опции и состав работ до бронирования.",
        },
        costume: {
          eyebrow: "Стилистика",
          h2: "Костюмы",
          body:
            "Платья, цветные наряды, кимоно и костюмы — посмотрите примеры гардероба на день съёмки.",
          btn: "К странице костюмов",
        },
        combos: {
          h2: "Популярные связки",
          lead: "Часто выбирают вместе на старте.",
          c1Title: "Токио + второй образ",
          c1Body: "Городские маршруты и смена наряда — темп полного дня.",
          c2Title: "День у озёр Фудзи",
          c2Body: "Свет у воды и горы в одной сессии.",
          c3Title: "Маршрут дня по Канто",
          c3Body: "Токио + Камакура или Фудзи + Хаконэ — два настроения за день.",
          c1Cta: "План Токио",
          c2Cta: "План Фудзи",
          c3Cta: "План «день в Канто»",
        },
        galleryBand: {
          h2: "Галерея",
          lead:
            "Локации: Фудзи, Токио, Хоккайдо, Камакура, студия — откройте полную сетку альбомов.",
          btn: "Открыть галерею",
        },
        endTiles: {
          flowTitle: "FLOW",
          flowSub: "От запроса до дня съёмки.",
          faqTitle: "FAQ",
          faqSub: "Сроки, погода, образы, основы брони.",
        },
        about: {
          eyebrow: "Обо мне",
          h2: "Я Miller, в Японии меня зовут Mashiro",
          body:
            "Снимаю элопмент и аутдор по всей Японии. Естественный свет и живые взаимодействия. Кино, но без перегруза.",
          btn: "Обо мне",
        },
        why: {
          h2: "Почему я",
          i1: {
            title: "Живу в Японии",
            body: "Знаю сезоны, погоду и локации — планирование проще.",
          },
          i2: {
            title: "Аутдор-опыт",
            body: "Уверенно в горах и на снегу, с безопасностью в кадре.",
          },
          i3: {
            title: "Естественное кино",
            body: "Меньше указаний — больше направления. Эмоции, не игра.",
          },
        },
        cta: {
          eyebrow: "Контакты",
          h2: "Превратим поездку по Японии в живую историю",
          p: "Напишите даты и идеи по локациям — пришлю предложение по съёмке.",
          btn: "Отправить запрос",
        },
        campaign: {
          eyebrow: "CAMPAIGN & EVENT",
          ariaCarousel: "Кампании и события",
          c1: {
            tag1: "EVENT",
            title: "Примерка и консультация — весенний день",
            body: "Ограниченные даты — апгрейд образов и опции. Узнайте пакеты при записи.",
          },
          c2: {
            tag1: "CAMPAIGN",
            title: "Второе платье в подарок",
            body: "Для съёмок в рамках кампании — уточните условия при запросе.",
          },
          c3: {
            tag1: "EVENT",
            tag2: "NEW",
            title: "Онлайн-просмотр и консультация",
            body: "Короткая онлайн-встреча — маршрут, свет и этапы сдачи материалов.",
          },
          c4: {
            tag1: "EVENT",
            title: "Раннее бронирование",
            body: "Ограниченное окно по датам — проверьте доступность и соберите съёмку онлайн.",
          },
        },
        float: {
          eyebrow: "Локации",
          h2: "Фото локаций",
          lead:
            "Стрелки или автопрокрутка; каждый слайд ведёт в ту же точку галереи, дальше — к планам.",
          ariaPrev: "Предыдущий слайд",
          ariaNext: "Следующий слайд",
          c1: { title: "Фудзи" },
          c2: { title: "Токио" },
          c3: { title: "Хоккайдо" },
          c4: { title: "Камакура" },
        },
        footer: { line2: "Элопмент и аутдор в Японии" },
      },
      elopement: {
        hero: {
          eyebrow: "Элопмент в Японии",
          h1: "Обеты, обрамлённые природой",
          lead:
            "От окрестностей Токио до Фудзи, Хоккайдо и Каруидзавы. Маршрут под сезон и свет.",
        },
        products: {
          h2: "Пакеты свадьбы и элопмента",
          lead:
            "Охват, материалы и логистика по каждому пакету. Включены частная онлайн-галерея и файлы для печати.",
          fuji: {
            title: "Фудзи — свадьба и элопмент",
            price: "от ¥180 000",
            b1: "Озёра у подножия и 5-я станция; рассвет и золотой час",
            b2: "500+ кадров; график с учётом погоды и потоков людей",
            b3: "Пик на фоне и широкие портреты в пейзаже",
          },
          kyoto: {
            title: "Киото — свадьба и элопмент",
            price: "от ¥200 000",
            b1: "Гион, Арасияма, бамбук, храмовые сады (разрешения по правилам)",
            b2: "Кимоно или платье; тихие утренние слоты",
            b3: "Улочки, камни, клёны и сакура по сезону",
          },
          hokkaido: {
            title: "Хоккайдо — свадьба и элопмент",
            price: "от ¥280 000",
            b1: "Снег, горнолыжные склоны, побережье — полный день",
            b2: "700+ кадров; холод и маршрут — гибко",
            b3: "Второй оператор по запросу; сильные зимние кадры",
          },
          kamakura: {
            title: "Камакура — свадьба и элопмент",
            price: "от ¥160 000",
            b1: "Святилища, бамбук, море — удобно из Токио за день",
            b2: "Полдня или день, спокойный темп",
            b3: "Морской ветер, тории и тропы рядом",
          },
        },
      },
      ski: {
        hero: {
          eyebrow: "Аутдор",
          h1: "Скорость, погода и эмоции в одном кадре",
          lead:
            "Для любителей природы и пар-авантюристов. Движение и кинематографичный рассказ.",
        },
        price1: { title: "Соло / пара, аутдор", price: "от ¥80 000" },
        price2: { title: "История в горах", price: "от ¥120 000" },
        cta: {
          h2: "Куда хотите поехать",
          p: "Подскажу маршрут, время и как снимать спокойно и безопасно.",
          btn: "Связаться",
        },
      },
      portfolio: {
        hero: {
          eyebrow: "Портфолио",
          h1: "Эмоции, удержанные пейзажем",
          lead:
            "Отбор элопмента, пар и аутдора. Естественный рассказ.",
        },
        loc: {
          kicker: "LOCATION PHOTO",
          h1: "Локационная съёмка",
          h1sub: "Mashiro Visuals · Japan",
          lead:
            "Съёмки на натуре по Японии — естественный свет, спокойный кадр, место для настоящих эмоций.",
          intro:
            "Вне студии: маршруты с учётом сезона, света и людей — чтобы вы были в моменте, а пейзаж работал за вас.",
          memo: "Memories",
          featureTitle: "FEATURE",
          featureLead: "Что важно в каждый день на локации.",
          f1n: "01",
          f1t: "Свет и наряды",
          f1b:
            "Платье и костюм под маршрут; время съёмки, чтобы ткань, тон кожи и пейзаж читались чисто.",
          f2n: "02",
          f2t: "Локации",
          f2b:
            "От городских линий до ветра у озера — короткий список мест под вашу историю и неспешные переходы.",
          f3n: "03",
          f3t: "Постановка",
          f3b:
            "Лёгкие позы и ясные подсказки — без догадок; день ваш, а не спектакль.",
          spotsTitle: "LOCATION SPOTS",
          spotsLead: "Регионы, куда мы часто возвращаемся для пар и элопмента.",
          spot1: "Токио · центр",
          spot2: "Сёнан · побережье",
          spot3: "Фудзи · озёра",
          spot4: "Киото · улочки и храмы",
          spot5: "Камакура · тории и море",
          spot6: "Хоккайдо · снег и простор",
          spot7: "Каруидзава · свет в лесу",
          spot8: "Никко · кедровая аллея",
          mosaicLabel: "PHOTO GALLERY",
          moreBtn: "VIEW MORE",
          spotPackagesLink: "Тарифы",
        },
        gallery: {
          title: "GALLERY",
          subtitle: "Фотогалерея",
          catAll: "ALL",
          catStudio: "STUDIO PHOTO",
          catTokyo: "Токио",
          catFuji: "Фудзи",
          catKamakura: "Камакура",
          catKyoto: "Киото",
          catHokkaido: "Хоккайдо",
          catOther: "Прочее",
          sortPopular: "По популярности",
          sortNewest: "Сначала новые",
          filterAria: "Фильтр по категории",
          sortAria: "Сортировка",
          lightboxCloseAria: "Закрыть галерею",
          lightboxPrevAria: "Предыдущее фото",
          lightboxNextAria: "Следующее фото",
          lightboxFsEnterAria: "Полный экран",
          lightboxFsExitAria: "Выйти из полного экрана",
          lightboxZoomInAria: "Увеличить",
          lightboxZoomOutAria: "Уменьшить",
          lightboxCounter: "{current} / {total}",
        },
      },
      about: {
        hero: {
          eyebrow: "О Mashiro",
          h1: "Я Miller, в Японии — Mashiro",
          lead:
            "Снимаю в Японии элопмент и аутдор. Естественный свет и честное взаимодействие.",
        },
        c1: {
          title: "Как снимаю",
          body:
            "Меньше команд — больше мягкого ведения. Вы в паре и в пейзаже — эмоции приходят сами.",
        },
        c2: {
          title: "Что даю",
          body:
            "Локальные знания, мобильность на улице, чтение погоды — безопаснее и сильнее кадр.",
        },
      },
      plan: {
        hero: {
          eyebrow: "План",
          h1: "Пакеты и продукты",
          lead:
            "Опции, цены и что входит в съёмку в Японии.",
          brandNote:
            "Пакеты и цены указаны как предложения Mashiro Visuals. Итоговая стоимость зависит от сезона, локаций и опций.",
        },
        list: {
          kicker: "PHOTO WEDDING PLAN",
          sub1: "В каждом пакете — полный набор услуг.",
          sub2: "Фотосъёмка свадьбы в Японии, формат «всё включено».",
          viewDetails: "Подробнее",
          priceLabel: "Цена",
          yenSuffix: "円",
          taxExcludedTag: "(без НДС)",
          taxIncludedTag: "(с НДС)",
          taxNote: "",
        },
        detail: {
          back: "Все планы",
          inquire: "Запросить этот план",
          reserve: "Запись на консультацию",
        },
        pkg: {
          tokyo: {
            title: "Токио, город",
            cardTag1: "STUDIO",
            cardTag2: "TOKYO",
            priceExNum: "148,000",
            priceInNum: "162,800",
            body:
              "Трансфер, визажист на весь день, два платья и два образа. 8:00–18:00. Студия и городские локации — Tokyo Tower, станция Токио, Одайба, парк Касай Ринкай. 400+ кадров, 30 ретуши. Опции: доп. платье ¥20 000 · backstage-ролик ¥50 000 · кимоно пары ¥50 000.",
          },
          shonan: {
            title: "Сёнан, побережье",
            cardTag1: "COAST",
            cardTag2: "SHONAN",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "То же включение, что и в токийском пакете. 8:00–18:00. Поезд, берег Сёнана, остров Эносима, пляж. 400+ кадров, 30 ретуши. Опции по прайсу Токио.",
          },
          fuji: {
            title: "Фудзи и озёра",
            cardTag1: "LAKES",
            cardTag2: "MT. FUJI",
            priceExNum: "288,000",
            priceInNum: "316,800",
            body:
              "Трансфер, визаж на день, два платья и два образа. 7:00–18:00, примерка заранее. Озёра Яманако и Кавагутико частные береговые точки Mashiro Visuals. 400+ кадров, 30 ретуши.",
          },
          kansai: {
            title: "Кансай, один город",
            cardTag1: "KANSAI",
            cardTag2: "ONE CITY",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "Трансфер, визаж, два платья. 8:00–18:00. Киото, Нара или Осака — один город, по согласованию с фотографом. 400+ кадров, 30 ретуши.",
          },
          hokkaido: {
            title: "Хоккайдо",
            cardTag1: "HOKKAIDO",
            cardTag2: "TRAVEL",
            priceExNum: "308,000",
            priceInNum: "338,800",
            body:
              "Трансфер, визаж, два платья. 8:00–18:00. Саппоро и Отару — маршрут по договорённости. 400+ кадров, 30 ретуши. Опции по хоккайдо-прайсу.",
          },
          traditional: {
            title: "Ироутикакэ или сиромуку",
            cardTag1: "WASOU",
            cardTag2: "FORMAL",
            priceExNum: "138,000",
            priceInNum: "151,800",
            body:
              "Визаж и дрессер кимоно; выбрать один наряд. 10:00–15:00. Студия и парки у Касая. 200+ кадров, 20 ретуши.",
          },
          kanto_day: {
            title: "Однодневная съёмка вокруг Токио",
            cardTag1: "TRAVEL",
            cardTag2: "1 DAY",
            priceExNum: "60,000",
            priceInNum: "66,000",
            cardNote: "Токио + Камакура (1 день) от ¥60 000 без НДС · Фудзи + Хаконе (1 день) ¥80 000 без НДС",
            priceLead: "Цены за день, без НДС. Маршрут выбирается при бронировании.",
            routeA: "Токио + Камакура (1 день)",
            routeB: "Фудзи + Хаконе (1 день)",
            priceExNumA: "60,000",
            priceExNumB: "80,000",
            body:
              "Компактная однодневная поездная съёмка в столичном регионе. Маршрут A: Токио и Камакура за день (¥60 000 без НДС). Маршрут B: Фудзи и Хаконе за день (¥80 000 без НДС). Детали по времени, переездам и объёму съёмки — на консультации. НДС 10% добавляется при оплате.",
          },
        },
      },
      costume: {
        hero: {
          eyebrow: "Костюмы",
          h1: "Образы и стиль",
          lead: "Платья, костюмы и аксессуары под локацию и сезон.",
        },
        c1: {
          title: "Платье",
          body: "Лёгкие силуэты для поездок и движения на природе.",
        },
        c2: {
          title: "Костюм и слои",
          body: "Классика или расслабленный стиль для гор, снега и города.",
        },
        page: {
          kicker: "COSTUME",
          h1: "Костюмы",
          h1Line2: "Подбор гардероба",
          h1Line3: "для элопмента и съёмок на локации",
          lead: "Платья, костюмы и васо — с учётом ветра, света и свободы движения по Японии.",
          intro:
            "Мы ориентируемся на удобство в поездке и на то, как силуэт читается в кадре — в снегу, лесу и у городского стекла. Финальный комплект фиксируется на консультации; ниже — примеры стилей, которые мы согласуем с партнёрскими ателье.",
          fairBefore: "Дни примерок и сезонные акции — в разделе",
          fairLink: "Кампании и события",
          fairAfter: ".",
          tabAll: "ALL",
          tabWedding: "СВАДЕБНОЕ ПЛАТЬЕ",
          tabColor: "ЦВЕТНОЕ ПЛАТЬЕ",
          tabKimono: "КИМОНО",
          tabMens: "МУЖСКОЕ",
          filtersAria: "Фильтр каталога костюмов",
          catalogHeading: "Каталог костюмов",
          eventsHead: "CAMPAIGN & EVENT",
          ev1Tag: "EVENT",
          ev1Title: "Примерка и мини-сессия",
          ev1Body:
            "Ограниченные слоты в выходные — примерьте силуэты и познакомьтесь с нами до полного дня съёмки.",
          ev2Tag: "CAMPAIGN",
          ev2Title: "Окно бонуса для второго образа",
          ev2Body:
            "Для съёмок в указанные даты блоки образов могут складываться иначе — см. страницу кампании.",
          evCta: "Подробнее",
          pagerNote: "Показаны образцы — наличие зависит от сезона.",
        },
      },
      campaign: {
        hero: {
          eyebrow: "CAMPAIGN",
          h1: "Кампании и события",
          lead:
            "Лимитированные консультации, слоты и бонусы — обновляем по мере появления.",
        },
        ctaDetails: "Подробнее",
        item1Meta: "Слоты в выходные · запись заранее",
        item2Meta: "Для съёмок в рамках опубликованной кампании",
        item3Meta: "Онлайн-встреча · по записи",
        item4Meta: "Маршруты и даты · по онлайн-доступности",
        listHeading: "Список кампаний",
        otherContentsTitle: "OTHER CONTENTS",
        other1Title: "PLAN",
        other1Sub: "Продукты и пакеты",
        other2Title: "GALLERY",
        other2Sub: "Избранные работы",
        other3Title: "COSTUME",
        other3Sub: "Образы и стиль",
        reserveBannerTitle: "Reservation",
        reserveBannerSub: "Запись на консультацию и вопросы",
        reserveWebHeading: "Онлайн-запись и запросы",
        reserveBtnReserve: "Записаться на консультацию",
        reserveBtnWhatsapp: "Написать в WhatsApp",
        reserveBtnWechat: "WeChat",
        reserveBtnX: "X",
        reserveBtnContact: "Связаться",
        reservePhoneHeading: "Телефон",
        reservePhoneNumber: "—",
        reservePhoneHours: "10:00–18:00",
        ctaReserve: "Записаться",
        ctaContact: "Связаться",
      },
      reserve: {
        hero: {
          eyebrow: "Оформление",
          h1: "Заказать фотопакет онлайн",
          lead:
            "Выберите пакет, опции и дату, затем введите личные данные и оплатите онлайн на защищённой странице. После оплаты придёт письмо с подтверждением.",
        },
        flowTitle: "◆Как оформить заказ◆",
        step1: "Выберите пакет, опции и желаемую дату.",
        step2: "Введите личные данные для заказа (имя, email).",
        step3: "Оплатите онлайн на защищённой странице; затем получите подтверждение по email.",
        phoneLine: "Тел.: 10:00–18:00",
        wizardNavAria: "Шаги оформления",
        wizardStepBuild: "Состав заказа",
        wizardStepDetails: "Ваши данные",
        wizardStepPay: "Онлайн-оплата",
        modelSectionTitle: "Выберите пакет",
        modelSectionSub:
            "Сначала локация и пакет, затем дополнения — как при выборе модели, а потом комплектации.",
        optionsSectionTitle: "Настройте опции",
        optionsSectionSub: "Дополнительные платья, видео закулисья, кимоно и др.",
        scheduleSectionTitle: "Дата съёмки",
        scheduleSectionSub: "Выберите день в календаре, затем нажмите «Далее» для ввода данных.",
        detailsSectionTitle: "Личные данные",
        detailsSectionSub: "Имя и email для подтверждения заказа. Телефон — по желанию.",
        paymentSectionTitle: "Онлайн-оплата",
        paymentSectionSub: "Ознакомьтесь с примечаниями и перейдите к защищённой оплате.",
        btnNextDetails: "Далее: ваши данные",
        btnNextPayment: "Далее: оплата",
        btnBackConfig: "Назад к заказу",
        btnBackDetails: "Назад к данным",
        dateRequired: "Сначала выберите дату в календаре.",
        phoneLabel: "Телефон (необязательно)",
        changePackage: "Сменить пакет",
        includesTitle: "Что входит в пакет",
        includesDisclaimer:
            "Перечислено в цене пакета (без налога). Доп. платья, видео BTS, кимоно и др. — отдельно по прайсу при оформлении.",
        includes: {
          tokyo: [
            "Трансфер на день съёмки",
            "Визаж и причёска на весь день",
            "Два образа / два платья",
            "Съёмка 8:00–18:00",
            "Студия + городские локации Токио (по согласованному маршруту)",
            "400+ файлов, 30 ретуши",
          ],
          shonan: [
            "Тот же объём услуг, что в токийском пакете",
            "Съёмка 8:00–18:00",
            "Поезд, берег Сёнана, Эносима, пляж",
            "400+ файлов, 30 ретуши",
          ],
          fuji: [
            "Трансфер на день съёмки",
            "Визаж на день; два платья / два образа (примерка заранее)",
            "Съёмка 7:00–18:00",
            "Озёра у Фудзи: Яманако, Кавагутико и выбранные береговые точки",
            "400+ файлов, 30 ретуши",
          ],
          kansai: [
            "Трансфер на день съёмки",
            "Визаж на день; два платья / два образа",
            "Съёмка 8:00–18:00",
            "Один город Кансая в день — Киото, Нара или Осака (по плану с фотографом)",
            "400+ файлов, 30 ретуши",
          ],
          hokkaido: [
            "Трансфер на день съёмки",
            "Визаж на день; два платья / два образа",
            "Съёмка 8:00–18:00",
            "Маршруты вокруг Саппоро и Отару (по договорённости)",
            "400+ файлов, 30 ретуши",
            "Видео BTS и кимоно — по хоккайдо-прайсу отдельно",
          ],
          traditional: [
            "Визаж и дрессер кимоно",
            "Ироутикакэ или сиромуку — один наряд на выбор",
            "Съёмка 10:00–15:00",
            "Студия и парки у Касая",
            "200+ файлов, 20 ретуши",
          ],
          kanto_day: [
            "Однодневная поездная съёмка в регионе Токио (маршрут при бронировании)",
            "Токио + Камакура или Фудзи + Хаконе — разные цены (см. план)",
            "Один съёмочный день; время и логистика — на консультации",
            "Доп. платья, BTS, кимоно — по общим правилам, если применимо",
          ],
        },
        selectLabel: "Фотопакет",
        opt1: "Визит в студию — консультация [90 мин]",
        opt2: "Онлайн-тур и консультация [40 мин]",
        opt3:
          "Спец-ярмарка в выходные и праздники [90 мин + примерка 60 мин]",
        booking: {
          panelPlan: "Фотопакет",
          panelAddon: "Дополнительные услуги",
          dressGroup: "Доп. комплекты платья (добавка)",
          dress0: "Без доп. (только включённые в пакет образы)",
          dress1: "+1 комплект — ¥20,000",
          dress2: "+2 комплекта — ¥40,000",
          dress3: "+3 комплекта — ¥60,000",
          dressCapNote:
            "В каждый пакет уже включены свадебные образы (в большинстве пакетов — 2, в традиционном — 1). Здесь — дополнительные образы в тот же день. Включённые + дополнительные не более 4 в день; недоступные варианты отключаются автоматически.",
          btsGroup: "Видео закулисья",
          btsNone: "Нет",
          btsStd: "Стандарт (+¥50,000)",
          btsReg: "Хоккайдо / Идзу / Фудзи (+¥70,000)",
          kimonoGroup: "Пара в кимоно",
          kimonoNone: "Нет",
          kimonoStd: "Стандарт (+¥50,000)",
          kimonoHkd: "Хоккайдо (+¥70,000)",
          shiroCheck: "Сиромуку и иро-утикакэ (+¥50,000)",
          summaryTitle: "Сводка заказа",
          planLine: "Пакет (без налога)",
          addonsLine: "Опции (без налога)",
          subtotalEx: "Итого без налога",
          taxLine: "НДС (10%)",
          totalIn: "С налогом",
          cardNote:
            "Оплата: по условиям пакета на защищённой странице после заказа (депозит или полная сумма). Номер карты вводится только там, не на этой странице.",
          hintSelectPlan: "Выберите фотопакет, чтобы увидеть сумму заказа.",
          viewPlansLink: "Все планы и состав →",
          kantoPkgMeta: "От ¥60 000 (без НДС)",
          kantoRouteLegend: "Маршрут на день",
          kantoRouteTk: "Токио + Камакура (1 день) — ¥60 000 без НДС",
          kantoRouteFh: "Фудзи + Хаконе (1 день) — ¥80 000 без НДС",
        },
        calendarTitle: "Желаемая дата",
        legendOpen: "Есть места",
        legendFew: "Мало мест",
        legendClosed: "Закрыто",
        wdMon: "Пн",
        wdTue: "Вт",
        wdWed: "Ср",
        wdThu: "Чт",
        wdFri: "Пт",
        wdSat: "Сб",
        wdSun: "Вс",
        nameLabel: "Имя",
        emailLabel: "Email",
        submitPay: "Оплатить онлайн",
        note:
            "Номер карты вводится только на защищённой странице оплаты. После оплаты придёт письмо с подтверждением.",
        successMsg:
            "Спасибо — заказ оформлен. Проверьте почту: там подтверждение и сводка.",
        ariaCalendar: "Календарь",
      },
      contact: {
        hero: {
          eyebrow: "Контакты",
          h1: "Расскажите о планах",
          lead:
            "Обычно отвечаю за 24–48 часов. Можно указать бюджет и направление.",
        },
        form: {
          name: "Имя",
          email: "Email",
          date: "Желаемые даты",
          datePh: "напр. 2026-12",
          service: "Тип съёмки",
          message: "Сообщение",
          messagePh: "История, маршрут, бюджет",
          submit: "Отправить",
          opt1: "Элопмент / пара",
          opt2: "Аутдор",
          opt3: "Пока не уверен(а)",
        },
        faq: {
          h2: "Частые вопросы",
          q1: "За какое время лучше бронировать?",
          a1: "В пик сезонов даты заканчиваются раньше — напишите месяц и регион, подскажем окна.",
          q2: "Что если в день съёмки плохая погода?",
          a2: "На улице закладываем гибкость; на консультации обсуждаем запасные варианты и безопасность.",
          q3: "Помогаете с образами и маршрутом?",
          a3: "Да — смотрите образцы костюмов и состав планов; маршрут подстраиваем под свет и темп.",
        },
        wechat: {
          heading: "WeChat",
          lead: "Если удобнее WeChat — добавьте нас по ID ниже и напишите даты и идеи съёмки.",
          idLabel: "WeChat ID",
          idValue: "mashirovisuals",
          copyBtn: "Скопировать ID",
          copied: "Скопировано",
          note: "Также можно написать в WhatsApp или через форму на этой странице.",
        },
      },
      footer: {
        address:
          "База в Японии. Визиты и консультации — по предварительной записи.",
        linkHome: "Главная",
        linkCampaign: "CAMPAIGN & EVENT",
        linkPlan: "План",
        linkGallery: "Галерея",
        linkCostume: "Костюмы",
        linkReserve: "Бронирование",
        linkAbout: "Обо мне",
        linkContact: "Контакты",
        linkElopement: "Элопмент",
        linkOutdoor: "Аутдор",
        privacy: "Политика конфиденциальности",
        company: "Компания",
        copyright: "© 2026 Mashiro Visuals. Все права защищены.",
      },
    },

    es: {
      nav: {
        home: "Inicio",
        elopement: "Elopement",
        outdoor: "Exterior",
        portfolio: "Portafolio",
        about: "Sobre mí",
        contact: "Contacto",
        plan: "Plan",
        gallery: "Galería",
        costume: "COSTUME",
        subPlan: "Productos y paquetes",
        subGallery: "Trabajos",
        subCostume: "Vestuario y estilo",
        subAbout: "Historia de marca",
        subContact: "Consulta y reserva",
        menuTitle: "Menú",
        menuOpenAria: "Abrir menú",
        menuCloseAria: "Cerrar menú",
        instagramAria: "Instagram",
        whatsappAria: "WhatsApp",
        wechatAria: "WeChat",
        xAria: "X",
        campaignEvent: "CAMPAIGN & EVENT",
        subCampaignEvent: "Campañas y eventos",
        ctaAiTitle: "CHAT IA",
        ctaAiSub: "Pregunta aquí",
        ctaReserveTitle: "RESERVAR",
        ctaReserveSub: "Consulta y reserva",
      },
      common: {
        langAria: "Idioma",
        floatCtaAria: "Asistente IA y accesos de reserva",
        floatAiTitle: "IA AYUDA",
        floatAiSub: "Pregunta aquí",
        aiPanelTitle: "Asistente IA Mashiro",
        aiPanelCloseAria: "Cerrar chat",
        aiWelcome:
          "Hola — soy un asistente automático de Mashiro Visuals. Pregunta por planes, ubicaciones, reservas o plazos. Para un presupuesto firme o contrato, un humano te atenderá por WhatsApp o el formulario de reserva.",
        aiPlaceholder: "Escribe tu pregunta…",
        aiSend: "Enviar",
        aiThinking: "Pensando…",
        aiDisclaimer:
          "Las respuestas son automáticas y pueden ser incompletas. Los planes definitivos se confirman con revisión humana.",
        aiReplyDefault:
          "Gracias. Prueba a preguntar por precios orientativos, zonas donde trabajamos, cómo reservar o la entrega. También puedes usar WhatsApp en la cabecera.",
        aiReplyPricing:
          "Los planes y rangos públicos están en Plan (impuestos según indique cada tarjeta). El total final depende de temporada, locaciones y extras — Reserve o WhatsApp para un presupuesto a medida.",
        aiReplyLocations:
          "Solemos trabajar en Tokio, Shonan, Fuji y lagos, Kioto, Kamakura, Hokkaido, Karuizawa y Nikko — ver la lista Location spots en Gallery.",
        aiReplyBooking:
          "Puedes empezar con el botón RESERVE, la página Reserve o WhatsApp. Confirmamos fechas y entregables antes del enlace de pago.",
        aiReplyDeliver:
          "Archivos, retoques y plazos figuran en cada plan y en el resumen tras reservar.",
        aiReplyWeather:
          "Las sesiones exteriores se adaptan al clima; priorizamos seguridad y margen de tiempo cuando es posible.",
        aiReplyWhatsApp:
          "Para respuesta humana rápida, abre WhatsApp desde los iconos del encabezado o la franja de reserva y envía fechas y región.",
        aiWhatsAppCta: "Abrir WhatsApp",
        aiBack: "Volver al sitio",
        aiBackAria: "Volver al inicio",
      },
      meta: {
        index: {
          title: "Mashiro Visuals | Elopement y fotografía outdoor en Japón",
          description:
            "Emoción auténtica en montañas y naturaleza de Japón. Elopement y sesiones outdoor.",
        },
        elopement: {
          title: "Elopement | Mashiro Visuals",
          description: "Elopement y boda en locación por Japón — rutas, paquetes y qué esperar.",
        },
        ski: {
          title: "Fotografía outdoor | Mashiro Visuals",
          description: "Historias de pareja y aventura al aire libre en Japón — ritmo consciente del clima.",
        },
        portfolio: {
          title: "Portafolio | Mashiro Visuals",
          description: "Trabajos en Tokio, Fuji, Hokkaido, Kamakura, estudio y más.",
        },
        about: {
          title: "Sobre mí | Mashiro Visuals",
          description: "Miller / Mashiro — fotógrafo en Japón para elopements y bodas en exteriores.",
        },
        contact: {
          title: "Contacto | Mashiro Visuals",
          description: "Fechas, destinos y presupuesto — formulario, WhatsApp o WeChat.",
        },
        aiChat: {
          title: "Asistente IA | Mashiro Visuals",
          description:
            "Chatea con el asistente de Mashiro Visuals sobre planes, ubicaciones, reservas y entregas en Japón.",
        },
        plan: {
          title: "Plan | Mashiro Visuals",
          description: "Paquetes y productos para boda y elopement en Japón.",
        },
        costume: {
          title: "Vestuario | Mashiro Visuals",
          description:
            "Muestras de vestido, color, kimono y traje para sesiones en Japón; la selección final se confirma en consulta.",
        },
        campaign: {
          title: "Campañas | Mashiro Visuals",
          description: "Campañas de temporada y eventos del estudio.",
        },
        reserve: {
          title: "Pago | Mashiro Visuals",
          description:
            "Configura tu paquete y opciones, elige fecha y compra en línea. Pago seguro en el siguiente paso.",
        },
      },
      index: {
        hero: {
          tagline: "Foto wedding · Japón",
          eyebrow: "Boda, elopement y fotografía outdoor en Japón",
          h1: "Boda y elopement en Japón — luz natural, calma cinematográfica",
          lead:
            "Fotografía honesta y cinematográfica de bodas y elopements para parejas que viajan a Japón. Nieve, montañas y aire libre—sin poses forzadas, solo vosotros y el paisaje. Luz natural y emoción real.",
          ctaPortfolio: "Ver portafolio",
          ctaInquire: "Consultar",
          circleReserve: "RESERVE",
          circleReserveSub: "Reservar visita",
          scrollAria: "Desplazar al contenido",
          note: "Basado en Japón. Consultas en inglés bienvenidas.",
        },
        featured: { cta: "Ver nuestros planes" },
        plan: {
          eyebrow: "Paquetes",
          h2: "Nuestros planes",
          lead:
            "Compara Tokio, Fuji, rutas de un día en Kanto, extras y qué incluye cada línea antes de reservar.",
        },
        costume: {
          eyebrow: "Estilismo",
          h2: "Vestuario",
          body:
            "Vestido, color, kimono y traje — adelanta el armario que puedes usar el día del rodaje.",
          btn: "Ver vestuario",
        },
        combos: {
          h2: "Combinaciones populares",
          lead: "Parejas de entrada que suelen pedirse juntas.",
          c1Title: "Tokio urbano y segundo look",
          c1Body: "Rutas de ciudad más cambio de outfit — ritmo de día completo.",
          c2Title: "Día en los lagos del Fuji",
          c2Body: "Luz lacustre y montaña en una sola sesión.",
          c3Title: "Ruta de un día en Kanto",
          c3Body: "Tokio + Kamakura o Fuji + Hakone — dos ambientes el mismo día.",
          c1Cta: "Plan Tokio",
          c2Cta: "Plan Fuji",
          c3Cta: "Plan día Kanto",
        },
        galleryBand: {
          h2: "Galería",
          lead:
            "Trabajos en Fuji, Tokio, Hokkaido, Kamakura y estudio — abre la parrilla completa de álbumes.",
          btn: "Abrir galería",
        },
        endTiles: {
          flowTitle: "FLOW",
          flowSub: "Pasos desde la consulta hasta el día del rodaje.",
          faqTitle: "FAQ",
          faqSub: "Plazos, clima, vestuario y lo básico de la reserva.",
        },
        about: {
          eyebrow: "Sobre mí",
          h2: "Soy Miller, también conocido como Mashiro en Japón",
          body:
            "Me especializo en elopement y relatos outdoor en Japón, con luz natural e interacción real. Estilo cinematográfico, sin exceso.",
          btn: "Conóceme",
        },
        why: {
          h2: "Por qué conmigo",
          i1: {
            title: "En Japón",
            body: "Conozco estaciones, clima y ubicaciones; la planificación fluye.",
          },
          i2: {
            title: "Listo para exterior",
            body: "Me muevo con seguridad en montaña y nieve y capturo el momento clave.",
          },
          i3: {
            title: "Estilo natural y cinematográfico",
            body: "Menos dirección, más guía. Emoción genuina frente a pose.",
          },
        },
        cta: {
          eyebrow: "Contacto",
          h2: "Convierte tu viaje a Japón en una historia viva y cinematográfica",
          p: "Comparte fechas e ideas de destino. Te enviaré una propuesta a medida.",
          btn: "Enviar consulta",
        },
        campaign: {
          eyebrow: "CAMPAIGN & EVENT",
          ariaCarousel: "Campañas y eventos",
          c1: {
            tag1: "EVENT",
            title: "Feria de prueba y consulta",
            body: "Fechas limitadas — ventajas en vestuario y extras. Reserva para ver paquetes.",
          },
          c2: {
            tag1: "CAMPAIGN",
            title: "Segundo vestido de regalo",
            body: "Para sesiones dentro del periodo de campaña — pregunta al reservar.",
          },
          c3: {
            tag1: "EVENT",
            tag2: "NEW",
            title: "Visita online a la galería",
            body: "Sesión breve en línea — rutas, luz y entrega del material.",
          },
          c4: {
            tag1: "EVENT",
            title: "Ventana de reserva anticipada",
            body: "Ventana limitada para fechas seleccionadas — consulta disponibilidad y monta tu sesión en línea.",
          },
        },
        float: {
          eyebrow: "Ubicaciones",
          h2: "Fotos por ubicación",
          lead:
            "Flechas o reproducción automática; cada diapositiva abre el mismo punto en la galería y enlaza con los planes.",
          ariaPrev: "Diapositiva anterior",
          ariaNext: "Diapositiva siguiente",
          c1: { title: "Monte Fuji" },
          c2: { title: "Tokio" },
          c3: { title: "Hokkaido" },
          c4: { title: "Kamakura" },
        },
        footer: { line2: "Elopement y fotografía outdoor en Japón" },
      },
      elopement: {
        hero: {
          eyebrow: "Elopement en Japón",
          h1: "Vuestros votos, enmarcados por la naturaleza",
          lead:
            "Desde los alrededores de Tokio hasta Fuji, Hokkaido y Karuizawa. Rutas según temporada y luz.",
        },
        products: {
          h2: "Paquetes de boda y elopement",
          lead:
            "Cobertura, entregables y notas de desplazamiento por línea. Incluyen galería privada en línea y archivos listos para impresión.",
          fuji: {
            title: "Monte Fuji — boda y elopement",
            price: "Desde ¥180.000",
            b1: "Rutas por lagos y 5.ª estación; amanecer y hora dorada",
            b2: "500+ imágenes; calendario según clima y afluencia",
            b3: "Cumbre icónica y retratos amplios en paisaje",
          },
          kyoto: {
            title: "Kioto — boda y elopement",
            price: "Desde ¥200.000",
            b1: "Gion, Arashiyama, bambú y jardines (permisos cuando aplique)",
            b2: "Kimono o vestido; franjas tranquilas al amanecer",
            b3: "Calles de piedra, arces y cerezos según temporada",
          },
          hokkaido: {
            title: "Hokkaido — boda y elopement",
            price: "Desde ¥280.000",
            b1: "Nieve, estación de esquí y costa — jornada completa",
            b2: "700+ imágenes; frío y ruta flexibles",
            b3: "Segundo fotógrafo opcional; fuerte en invierno",
          },
          kamakura: {
            title: "Kamakura — boda y elopement",
            price: "Desde ¥160.000",
            b1: "Santuarios, bambú y mar — excursión fácil desde Tokio",
            b2: "Media o jornada completa; ritmo relajado",
            b3: "Brisa marina, torii y senderos en un área compacta",
          },
        },
      },
      ski: {
        hero: {
          eyebrow: "Fotografía outdoor",
          h1: "Velocidad, clima y emoción en un solo encuadre",
          lead:
            "Para amantes del aire libre y parejas aventureras. Sesiones con movimiento y narrativa cinematográfica.",
        },
        price1: { title: "Sesión outdoor solo / pareja", price: "Desde ¥80.000" },
        price2: { title: "Historia en la montaña", price: "Desde ¥120.000" },
        cta: {
          h2: "Dime a dónde quieres ir",
          p: "Comparto ruta, horario y consejos para que todo sea seguro y fluido.",
          btn: "Consultar",
        },
      },
      portfolio: {
        hero: {
          eyebrow: "Portafolio",
          h1: "Emoción real, fijada en el paisaje",
          lead:
            "Selección de elopement, parejas y outdoor. Narrativa natural.",
        },
        loc: {
          kicker: "LOCATION PHOTO",
          h1: "Fotografía en locación",
          h1sub: "Mashiro Visuals · Japón",
          lead:
            "Sesiones en locación por Japón — luz natural, encuadre sobrio y espacio para la emoción real.",
          intro:
            "Fuera del estudio: rutas según estación, luz y ritmo de la gente — para que estén presentes y el paisaje haga el resto.",
          memo: "Memories",
          featureTitle: "FEATURE",
          featureLead: "Qué aportamos cada día en locación.",
          f1n: "01",
          f1t: "Luz y vestuario",
          f1b:
            "Vestido y traje alineados con la ruta; horarios para que tela, tono de piel y paisaje se lean limpios.",
          f2n: "02",
          f2t: "Locaciones",
          f2b:
            "De líneas urbanas al viento del lago — acotamos lugares que encajan con vuestra historia, sin prisas.",
          f3n: "03",
          f3t: "Dirección",
          f3b:
            "Posing ligero y señales claras — el día es vuestro, no un espectáculo.",
          spotsTitle: "LOCATION SPOTS",
          spotsLead: "Regiones a las que volvemos a menudo para parejas y elopement.",
          spot1: "Tokio · núcleo urbano",
          spot2: "Shonan · costa",
          spot3: "Monte Fuji · lagos",
          spot4: "Kioto · calles patrimonio",
          spot5: "Kamakura · santuario y mar",
          spot6: "Hokkaido · nieve y tierra abierta",
          spot7: "Karuizawa · luz en el bosque",
          spot8: "Nikko · camino de cedros",
          mosaicLabel: "PHOTO GALLERY",
          moreBtn: "VIEW MORE",
          spotPackagesLink: "Planes",
        },
        gallery: {
          title: "GALLERY",
          subtitle: "Galería de fotos",
          catAll: "ALL",
          catStudio: "STUDIO PHOTO",
          catTokyo: "Tokio",
          catFuji: "Fuji",
          catKamakura: "Kamakura",
          catKyoto: "Kioto",
          catHokkaido: "Hokkaido",
          catOther: "Otros",
          sortPopular: "Popular",
          sortNewest: "Más recientes",
          filterAria: "Filtrar por categoría",
          sortAria: "Ordenar",
          lightboxCloseAria: "Cerrar galería",
          lightboxPrevAria: "Foto anterior",
          lightboxNextAria: "Foto siguiente",
          lightboxFsEnterAria: "Pantalla completa",
          lightboxFsExitAria: "Salir de pantalla completa",
          lightboxZoomInAria: "Ampliar",
          lightboxZoomOutAria: "Reducir",
          lightboxCounter: "{current} / {total}",
        },
      },
      about: {
        hero: {
          eyebrow: "Sobre Mashiro",
          h1: "Soy Miller, también Mashiro en Japón",
          lead:
            "Fotógrafo en Japón centrado en elopement y outdoor, con luz natural e interacción genuina.",
        },
        c1: {
          title: "Mi enfoque",
          body:
            "Menos órdenes, más guía. Estén presentes entre ustedes y el paisaje.",
        },
        c2: {
          title: "Lo que aporto",
          body:
            "Conocimiento local, movilidad outdoor y lectura del clima: más seguridad y mejor imagen.",
        },
      },
      plan: {
        hero: {
          eyebrow: "Plan",
          h1: "Paquetes y productos",
          lead: "Opciones, precios e inclusión para vuestra sesión en Japón.",
          brandNote:
            "Los paquetes y precios son oferta de Mashiro Visuals. La cotización final depende de temporada, ubicaciones y extras.",
        },
        list: {
          kicker: "PHOTO WEDDING PLAN",
          sub1: "En cada plan encontraréis todo lo esencial.",
          sub2: "Foto boda «todo incluido» en Japón.",
          viewDetails: "Ver detalles",
          priceLabel: "Precio",
          yenSuffix: "円",
          taxExcludedTag: "(sin imp.)",
          taxIncludedTag: "(con imp.)",
          taxNote: "",
        },
        detail: {
          back: "Todos los planes",
          inquire: "Consultar este plan",
          reserve: "Reservar consulta",
        },
        pkg: {
          tokyo: {
            title: "Tokio urbano",
            cardTag1: "STUDIO",
            cardTag2: "TOKYO",
            priceExNum: "148,000",
            priceInNum: "162,800",
            body:
              "Coche privado; maquillaje todo el día; dos vestidos y dos looks. 8:00–18:00. Estudio más exteriores urbanos—Tokyo Tower, Estación de Tokio, Odaiba, Kasai Kaihin. Entrega: 400+ archivos, 30 retoques. Extras: vestido adicional ¥20.000 · vídeo making-of ¥50.000 · kimonos pareja ¥50.000.",
          },
          shonan: {
            title: "Costa de Shōnan",
            cardTag1: "COAST",
            cardTag2: "SHONAN",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "Mismo núcleo que Tokio. 8:00–18:00. Tren costero, costa de Shōnan, Enoshima y playa. 400+ archivos, 30 retoques; mismos extras que Tokio.",
          },
          fuji: {
            title: "Fuji y lagos",
            cardTag1: "LAKES",
            cardTag2: "MT. FUJI",
            priceExNum: "288,000",
            priceInNum: "316,800",
            body:
              "Coche privado; peluquería todo el día; dos vestidos y dos looks. 7:00–18:00; prueba previa. Lagos Yamanaka y Kawaguchi y puntos lacustres privados Mashiro Visuals. 400+ archivos, 30 retoques.",
          },
          kansai: {
            title: "Kansai (una ciudad)",
            cardTag1: "KANSAI",
            cardTag2: "UNA CIUDAD",
            priceExNum: "238,000",
            priceInNum: "261,800",
            body:
              "Coche privado; maquillaje; dos vestidos. 8:00–18:00. Kioto, Nara u Osaka—una ciudad, en coordinación con el fotógrafo. 400+ archivos, 30 retoques.",
          },
          hokkaido: {
            title: "Hokkaidō",
            cardTag1: "HOKKAIDO",
            cardTag2: "TRAVEL",
            priceExNum: "308,000",
            priceInNum: "338,800",
            body:
              "Misma base. 8:00–18:00. Rutas en Sapporo y Otaru. 400+ archivos, 30 retoques; extras según tarifa Hokkaidō.",
          },
          traditional: {
            title: "Iro-uchikake o shiromuku",
            cardTag1: "WASOU",
            cardTag2: "FORMAL",
            priceExNum: "138,000",
            priceInNum: "151,800",
            body:
              "Maquillaje y vestidor de kimono; elegir un conjunto. 10:00–15:00. Estudio y parques junto a Kasai. 200+ archivos, 20 retoques.",
          },
          kanto_day: {
            title: "Excursión de un día — Tokio y alrededores",
            cardTag1: "TRAVEL",
            cardTag2: "1 DÍA",
            priceExNum: "60,000",
            priceInNum: "66,000",
            cardNote: "Tokio + Kamakura (1 día) desde ¥60.000 sin imp. · Fuji + Hakone (1 día) ¥80.000 sin imp.",
            priceLead: "Precio por día, sin impuestos. Elige la ruta al reservar.",
            routeA: "Tokio + Kamakura (1 día)",
            routeB: "Monte Fuji + Hakone (1 día)",
            priceExNumA: "60,000",
            priceExNumB: "80,000",
            body:
              "Sesión de viaje de un día en el área metropolitana. Opción A: Tokio y Kamakura el mismo día (desde ¥60.000 sin imp.). Opción B: Fuji y Hakone el mismo día (¥80.000 sin imp.). Horarios, desplazamientos y entregables se confirman en consulta. El impuesto al consumo (10%) se añade al pagar.",
          },
        },
      },
      costume: {
        hero: {
          eyebrow: "Vestuario",
          h1: "Vestuario y estilo",
          lead: "Vestidos, trajes y estilismo según locación y estación.",
        },
        c1: {
          title: "Vestido nupcial",
          body: "Siluetas ligeras para viaje y movimiento al aire libre.",
        },
        c2: {
          title: "Traje y capas",
          body: "Del clásico al relajado para montaña, nieve y ciudad.",
        },
        page: {
          kicker: "COSTUME",
          h1: "Vestuario",
          h1Line2: "Una línea curada",
          h1Line3: "para elopements y días en locación",
          lead: "Vestidos, trajes y wasō — pensados para el movimiento, el viento y la luz en Japón.",
          intro:
            "Priorizamos siluetas fáciles de viajar y que se lean limpias en nieve, bosque y cristal urbano. La elección final se confirma en consulta; la cuadrícula es una muestra de estilos que coordinamos con ateliers socios.",
          fairBefore: "Las jornadas de prueba y ferias de temporada están en",
          fairLink: "Campaña y evento",
          fairAfter: ".",
          tabAll: "ALL",
          tabWedding: "VESTIDO DE NOVIA",
          tabColor: "VESTIDO DE COLOR",
          tabKimono: "KIMONO",
          tabMens: "CABALLERO",
          filtersAria: "Filtrar catálogo de vestuario",
          catalogHeading: "Catálogo de vestuario",
          eventsHead: "CAMPAIGN & EVENT",
          ev1Tag: "EVENT",
          ev1Title: "Prueba de vestuario y mini sesión",
          ev1Body:
            "Cupos de fin de semana — probad siluetas y conocednos antes de reservar un día completo.",
          ev2Tag: "CAMPAIGN",
          ev2Title: "Ventana bonus segundo look",
          ev2Body:
            "Para sesiones dentro de las fechas publicadas los bloques de vestuario pueden variar; ver la página de campaña.",
          evCta: "Ver más",
          pagerNote: "Piezas de muestra — disponibilidad según temporada.",
        },
      },
      campaign: {
        hero: {
          eyebrow: "CAMPAIGN",
          h1: "Campañas y eventos",
          lead:
            "Consultas limitadas, franjas de prueba e información de ventajas — actualizamos según temporada.",
        },
        ctaDetails: "Ver detalles",
        item1Meta: "Cupos de fin de semana · con reserva previa",
        item2Meta: "Para sesiones reservadas dentro del periodo publicado",
        item3Meta: "Sesión online · plazas limitadas",
        item4Meta: "Rutas y fechas · según disponibilidad online",
        listHeading: "Listado de campañas",
        otherContentsTitle: "OTHER CONTENTS",
        other1Title: "PLAN",
        other1Sub: "Productos y paquetes",
        other2Title: "GALLERY",
        other2Sub: "Trabajos",
        other3Title: "COSTUME",
        other3Sub: "Vestuario y estilo",
        reserveBannerTitle: "Reservation",
        reserveBannerSub: "Reserva de consulta y consultas",
        reserveWebHeading: "Reserva y consultas web",
        reserveBtnReserve: "Reservar consulta",
        reserveBtnWhatsapp: "Escribir por WhatsApp",
        reserveBtnWechat: "WeChat",
        reserveBtnX: "X",
        reserveBtnContact: "Contacto",
        reservePhoneHeading: "Teléfono",
        reservePhoneNumber: "—",
        reservePhoneHours: "10:00–18:00",
        ctaReserve: "Reservar",
        ctaContact: "Contacto",
      },
      reserve: {
        hero: {
          eyebrow: "Pago",
          h1: "Compra tu sesión fotográfica",
          lead:
            "Elige paquete, opciones y fecha; luego introduce tus datos y paga en línea en la página segura. Tras el pago recibirás un email de confirmación.",
        },
        flowTitle: "◆Cómo comprar◆",
        step1: "Elige tu paquete, opciones y una fecha preferida.",
        step2: "Introduce tus datos personales para el pedido.",
        step3: "Completa el pago en línea en la página segura; recibirás un email de confirmación.",
        phoneLine: "Tel.: 10:00–18:00",
        wizardNavAria: "Pasos de compra",
        wizardStepBuild: "Armar pedido",
        wizardStepDetails: "Tus datos",
        wizardStepPay: "Pagar en línea",
        modelSectionTitle: "Elige tu sesión",
        modelSectionSub:
            "Empieza por el paquete de ubicación; después añade opciones (vestuario, vídeo, kimono, etc.).",
        optionsSectionTitle: "Configura tu sesión",
        optionsSectionSub: "Vestidos extra, vídeo detrás de cámaras, kimono y más.",
        scheduleSectionTitle: "Fecha preferida",
        scheduleSectionSub: "Elige un día en el calendario y continúa a tus datos.",
        detailsSectionTitle: "Datos personales",
        detailsSectionSub: "Nombre y email para la confirmación. Teléfono opcional.",
        paymentSectionTitle: "Pago en línea",
        paymentSectionSub: "Revisa las notas y continúa al pago seguro.",
        btnNextDetails: "Siguiente: tus datos",
        btnNextPayment: "Siguiente: pago en línea",
        btnBackConfig: "Volver al pedido",
        btnBackDetails: "Volver a tus datos",
        dateRequired: "Elige primero una fecha en el calendario.",
        phoneLabel: "Teléfono (opcional)",
        changePackage: "Cambiar paquete",
        includesTitle: "Qué incluye este paquete",
        includesDisclaimer:
            "Lo listado está incluido en el precio del paquete (sin impuestos). Vestidos extra, vídeo BTS, kimono, etc. se cotizan aparte al pagar.",
        includes: {
          tokyo: [
            "Coche privado el día de la sesión",
            "Maquillaje y peinado todo el día en locación",
            "Dos vestidos / dos estilismos",
            "Horario de servicio 8:00–18:00",
            "Estudio + exteriores urbanos de Tokio (ruta acordada)",
            "400+ archivos entregados, 30 retoques",
          ],
          shonan: [
            "Mismo alcance de servicio que el paquete Tokio",
            "Horario 8:00–18:00",
            "Tren costero, costa de Shonan, Enoshima, playa",
            "400+ archivos, 30 retoques",
          ],
          fuji: [
            "Coche privado el día de la sesión",
            "Maquillaje todo el día; dos vestidos / dos looks (prueba previa obligatoria)",
            "Horario 7:00–18:00",
            "Lagos del Fuji: Yamanako, Kawaguchiko y puntos privados seleccionados",
            "400+ archivos, 30 retoques",
          ],
          kansai: [
            "Coche privado el día de la sesión",
            "Maquillaje todo el día; dos vestidos / dos looks",
            "Horario 8:00–18:00",
            "Una ciudad de Kansai en el día — Kioto, Nara u Osaka (según plan previo)",
            "400+ archivos, 30 retoques",
          ],
          hokkaido: [
            "Coche privado el día de la sesión",
            "Maquillaje todo el día; dos vestidos / dos looks",
            "Horario 8:00–18:00",
            "Rutas en Sapporo y Otaru (según acuerdo)",
            "400+ archivos, 30 retoques",
            "Vídeo BTS y kimono según tarifa Hokkaidō aparte",
          ],
          traditional: [
            "Maquillaje y vestidor de kimono",
            "Iro-uchikake o shiromuku (un look formal)",
            "Horario 10:00–15:00",
            "Estudio y parques junto a Kasai",
            "200+ archivos, 20 retoques",
          ],
          kanto_day: [
            "Sesión de un día en el área de Tokio (elige ruta al reservar)",
            "Tokio + Kamakura o Fuji + Hakone — precios distintos (ver plan)",
            "Un solo día de trabajo; horarios en consulta",
            "Extras de vestido, BTS y kimono según reglas generales si aplica",
          ],
        },
        selectLabel: "Paquete fotográfico",
        opt1: "Consulta en estudio [90 min]",
        opt2: "Tour y consulta online [40 min]",
        opt3:
          "Feria especial fines de semana y festivos [90 min + prueba 60 min]",
        booking: {
          panelPlan: "Paquete fotográfico",
          panelAddon: "Servicios adicionales",
          dressGroup: "Vestidos extra (complemento)",
          dress0: "Ninguno — solo lo incluido en el plan",
          dress1: "+1 juego — ¥20,000",
          dress2: "+2 juegos — ¥40,000",
          dress3: "+3 juegos — ¥60,000",
          dressCapNote:
            "Cada plan ya incluye looks de vestido (la mayoría: 2; plan tradicional: 1). Aquí sumas looks extra el mismo día. Incluidos + extra no pueden superar 4 al día; las opciones que lo superen quedan desactivadas.",
          btsGroup: "Vídeo BTS",
          btsNone: "Ninguno",
          btsStd: "Estándar (+¥50,000)",
          btsReg: "Hokkaido / Izu / Fuji (+¥70,000)",
          kimonoGroup: "Pareja en kimono",
          kimonoNone: "Ninguno",
          kimonoStd: "Estándar (+¥50,000)",
          kimonoHkd: "Hokkaido (+¥70,000)",
          shiroCheck: "Shiromuku e iro-uchikake (+¥50,000)",
          summaryTitle: "Resumen del pedido",
          planLine: "Plan (sin impuestos)",
          addonsLine: "Opciones (sin impuestos)",
          subtotalEx: "Subtotal (sin impuestos)",
          taxLine: "Impuesto al consumo (10%)",
          totalIn: "Total (impuestos incl.)",
          cardNote:
            "Pago: según el plan, el depósito o el total se cobra en la página de pago segura tras confirmar el pedido. Los datos de tarjeta no se introducen en esta página.",
          hintSelectPlan: "Elige un paquete para ver el total del pedido.",
          viewPlansLink: "Planes y qué incluyen →",
          kantoPkgMeta: "Desde ¥60.000 (sin imp.)",
          kantoRouteLegend: "Ruta del día",
          kantoRouteTk: "Tokio + Kamakura (1 día) — ¥60.000 sin imp.",
          kantoRouteFh: "Fuji + Hakone (1 día) — ¥80.000 sin imp.",
        },
        calendarTitle: "Fecha preferida",
        legendOpen: "Plazas disponibles",
        legendFew: "Pocas plazas",
        legendClosed: "Cerrado",
        wdMon: "Lun",
        wdTue: "Mar",
        wdWed: "Mié",
        wdThu: "Jue",
        wdFri: "Vie",
        wdSat: "Sáb",
        wdSun: "Dom",
        nameLabel: "Nombre",
        emailLabel: "Email",
        submitPay: "Pagar en línea",
        note:
            "Los datos de tarjeta solo en la página de pago seguro. Tras pagar, recibirás el email de confirmación.",
        successMsg:
            "Gracias — pedido confirmado. Revisa tu correo para la confirmación y el resumen.",
        ariaCalendar: "Calendario",
      },
      contact: {
        hero: {
          eyebrow: "Contacto",
          h1: "Cuéntame tu plan",
          lead:
            "Suelo responder en 24–48 horas. Incluye presupuesto y destino si quieres.",
        },
        form: {
          name: "Nombre",
          email: "Email",
          date: "Fecha preferida",
          datePh: "p. ej. 2026-12",
          service: "Tipo de servicio",
          message: "Mensaje",
          messagePh: "Vuestra historia, viaje y rango de presupuesto",
          submit: "Enviar",
          opt1: "Elopement / parejas",
          opt2: "Fotografía outdoor",
          opt3: "Aún no lo tengo claro",
        },
        faq: {
          h2: "Preguntas frecuentes",
          q1: "¿Con cuánta antelación reservar?",
          a1: "Las temporadas altas se llenan pronto; indica mes y región y te proponemos ventanas realistas.",
          q2: "¿Y si el día del rodaje hace mal tiempo?",
          a2: "En exteriores dejamos margen; en la consulta vemos alternativas y seguridad.",
          q3: "¿Ayudáis con vestuario y rutas?",
          a3: "Sí — revisa Vestuario y cada plan; ajustamos la ruta a la luz y al ritmo.",
        },
        wechat: {
          heading: "WeChat",
          lead: "Si prefieres WeChat, añádenos con el ID de abajo y envía fechas e ideas.",
          idLabel: "ID de WeChat",
          idValue: "mashirovisuals",
          copyBtn: "Copiar ID",
          copied: "Copiado",
          note: "También puedes contactar por WhatsApp o con el formulario de esta página.",
        },
      },
      footer: {
        address:
          "Con base en Japón. Visitas y consultas con cita previa.",
        linkHome: "Inicio",
        linkCampaign: "CAMPAIGN & EVENT",
        linkPlan: "Plan",
        linkGallery: "Galería",
        linkCostume: "Vestuario",
        linkReserve: "Reserva",
        linkAbout: "Sobre mí",
        linkContact: "Contacto",
        linkElopement: "Elopement",
        linkOutdoor: "Exterior",
        privacy: "Política de privacidad",
        company: "Empresa",
        copyright: "© 2026 Mashiro Visuals. Todos los derechos reservados.",
      },
    },

  };

  function getNested(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null || typeof cur !== "object") return null;
      cur = cur[parts[i]];
    }
    return cur == null ? null : cur;
  }

  function normalizeLang(code) {
    if (!code) return DEFAULT_LANG;
    var c = String(code).trim();
    if (c === "zh-CN") return "zh-TW";
    if (c === "ar") return "en";
    if (SUPPORTED.indexOf(c) !== -1) return c;
    var lower = c.toLowerCase();
    if (lower === "zh-tw" || lower === "zh-hk" || lower === "zh-hant")
      return "zh-TW";
    if (lower === "zh" || lower.indexOf("zh-") === 0) {
      if (lower.indexOf("tw") !== -1 || lower.indexOf("hk") !== -1)
        return "zh-TW";
      return "zh-TW";
    }
    return DEFAULT_LANG;
  }

  function detectLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return normalizeLang(saved);
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    nav = nav.toLowerCase();
    if (nav.indexOf("zh-tw") !== -1 || nav.indexOf("zh-hk") !== -1) return "zh-TW";
    if (nav.indexOf("zh-cn") !== -1 || nav.indexOf("zh-sg") !== -1) return "zh-TW";
    if (nav.indexOf("zh") === 0) return "zh-TW";
    if (nav.indexOf("ja") === 0) return "ja";
    if (nav.indexOf("ko") === 0) return "ko";
    if (nav.indexOf("ru") === 0) return "ru";
    if (nav.indexOf("es") === 0) return "es";
    if (nav.indexOf("ar") === 0) return "en";
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    lang = normalizeLang(lang);
    var pack = MESSAGES[lang] || MESSAGES[DEFAULT_LANG];
    var htmlLang = lang === "zh-TW" ? "zh-Hant" : lang;
    document.documentElement.setAttribute("lang", htmlLang);
    document.documentElement.setAttribute("dir", "ltr");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      var val = getNested(pack, key);
      if (val != null && typeof val === "string") el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      var val = getNested(pack, key);
      if (val != null && typeof val === "string")
        el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      var val = getNested(pack, key);
      if (val != null && typeof val === "string")
        el.setAttribute("aria-label", val);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (!key) return;
      var val = getNested(pack, key);
      if (val != null && typeof val === "string") el.innerHTML = val;
    });

    var page = document.body && document.body.getAttribute("data-page");
    if (page) {
      var meta = getNested(pack, "meta." + page);
      if (meta && meta.title) document.title = meta.title;
      var md = document.querySelector('meta[name="description"]');
      if (md && meta && meta.description)
        md.setAttribute("content", meta.description);
    }

    localStorage.setItem(STORAGE_KEY, lang);
    var sel = document.getElementById("lang-select");
    if (sel) sel.value = lang;

    var aria = getNested(pack, "common.langAria");
    if (sel && aria) sel.setAttribute("aria-label", aria);
  }

  window.MashiroI18n = {
    apply: applyLang,
    detect: detectLang,
    supported: SUPPORTED,
    get: function (key, lang) {
      lang = normalizeLang(lang || detectLang());
      var pack = MESSAGES[lang] || MESSAGES[DEFAULT_LANG];
      return getNested(pack, key);
    },
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(detectLang());
    var sel = document.getElementById("lang-select");
    if (sel) {
      sel.addEventListener("change", function () {
        applyLang(this.value);
      });
    }
  });
})();