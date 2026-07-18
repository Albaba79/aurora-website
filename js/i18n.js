// ---------- Aurora bilingual (EN/AR) engine ----------
const TRANSLATIONS = {
  // shared: nav
  "nav.home": {en:"Home", ar:"الرئيسية"},
  "nav.about": {en:"Our Story", ar:"قصتنا"},
  "nav.flavors": {en:"Flavors", ar:"النكهات"},
  "nav.order": {en:"Order", ar:"الطلب"},
  "nav.contact": {en:"Contact", ar:"تواصل معنا"},
  "nav.catering": {en:"Catering", ar:"المناسبات"},
  "nav.gallery": {en:"Gallery", ar:"معرض الصور"},
  "nav.cta.quote": {en:"🍦 Order Now", ar:"🍦 اطلب الآن"},
  "nav.cta.order": {en:"🍦 Order Now", ar:"🍦 اطلب الآن"},
  "announce.bar": {en:"✨ Handcrafted Daily · Premium Ice Cream · Catering Available", ar:"✨ يُحضّر يوميًا · آيس كريم فاخر · خدمات المناسبات متوفرة"},
  "brand.tagline": {en:"Premium Ice Cream", ar:"آيس كريم فاخر"},
  "contact.h1.v2": {en:"Let's create something sweet together.", ar:"لنصنع شيئًا حلوًا معًا."},
  "contact.p.v2": {en:"Have questions about our flavors, catering, or custom orders? We'd love to hear from you.", ar:"لديك أسئلة حول نكهاتنا أو خدمات المناسبات أو الطلبات المخصصة؟ يسعدنا التواصل معك."},
  "gallery.eyebrow": {en:"Gallery", ar:"معرض الصور"},
  "gallery.h1": {en:"A look inside Aurora.", ar:"لمحة من داخل أورورا."},
  "gallery.p": {en:"Handcrafted gelato, premium cones, desserts, catering setups, our shop, and the moments our customers share.", ar:"جيلاتو مصنوع يدويًا، مخاريط فاخرة، حلويات، إعدادات المناسبات، متجرنا، واللحظات التي يشاركها عملاؤنا."},
  "gallery.section.gelato": {en:"Signature Gelato", ar:"الجيلاتو المميز"},
  "gallery.section.cones": {en:"Premium Cones", ar:"المخاريط الفاخرة"},
  "gallery.section.desserts": {en:"Desserts", ar:"الحلويات"},
  "gallery.section.catering": {en:"Catering & Events", ar:"المناسبات والفعاليات"},
  "gallery.section.shop": {en:"Our Shop", ar:"متجرنا"},
  "gallery.section.lifestyle": {en:"Moments with Aurora", ar:"لحظات مع أورورا"},

  // shared: footer
  "footer.tagline": {en:"Bakery, Pastry & Ice Cream — handcrafted Italian-style gelato, wholesale to coffee shops, restaurants and gelato shops.", ar:"مخبوزات وحلويات وآيس كريم — جيلاتو إيطالي مصنوع يدويًا، بالجملة لمحلات القهوة والمطاعم ومحلات الجيلاتو."},
  "footer.explore": {en:"Explore", ar:"استكشف"},
  "footer.about": {en:"About Aurora", ar:"عن أورورا"},
  "footer.catalog": {en:"Flavor Catalog", ar:"قائمة النكهات"},
  "footer.order": {en:"Order", ar:"الطلب"},
  "footer.contact": {en:"Contact", ar:"تواصل معنا"},
  "footer.touch": {en:"Get in touch", ar:"تواصل معنا"},
  "footer.location": {en:"Al-Muqableen, Murshed Mhyrat St., Amman, Jordan", ar:"المقابلين، شارع مرشد مهيرات، عمّان، الأردن"},
  "footer.whatsapp": {en:"WhatsApp: 07958 88502", ar:"واتساب: 07958 88502"},
  "footer.rights": {en:"Aurora Bakery, Pastry & Ice Cream. All rights reserved.", ar:"أورورا للمخبوزات والحلويات والآيس كريم. جميع الحقوق محفوظة."},
  "footer.tagline2": {en:"Shop · Wholesale · Catering — Amman, Jordan", ar:"متجر · جملة · مناسبات — عمّان، الأردن"},

  // home
  "home.eyebrow": {en:"Wholesale · Amman, Jordan", ar:"جملة · عمّان، الأردن"},
  "home.h1a": {en:"Italian gelato, churned slow —", ar:"جيلاتو إيطالي، يُحضّر ببطء —"},
  "home.h1b": {en:"delivered on your schedule.", ar:"ويصل في الوقت الذي يناسبك."},
  "home.lede": {en:"Aurora is a wholesale kitchen for coffee shops, restaurants and gelato shops that want real Italian-style ice cream without running their own production. Any flavor you can imagine, three tiers, one dependable tub.", ar:"أورورا مطبخ جملة لمحلات القهوة والمطاعم ومحلات الجيلاتو التي تريد آيس كريم إيطالي حقيقي دون تشغيل خط إنتاج خاص بها. أي نكهة تتخيلها، ثلاث فئات، ووعاء واحد يمكن الاعتماد عليه."},
  "home.cta.quote": {en:"Request a Quote", ar:"اطلب عرض سعر"},
  "home.cta.whatsapp": {en:"Chat on WhatsApp", ar:"تواصل عبر واتساب"},
  "home.tiers.eyebrow": {en:"Three tiers, one standard", ar:"ثلاث فئات، معيار واحد"},
  "home.tiers.h2": {en:"A flavor lineup built for every menu.", ar:"تشكيلة نكهات مناسبة لكل قائمة طعام."},
  "home.tiers.sub": {en:"Whatever you're serving — an affogato, a plated dessert, a full gelato case — there's a tier built for it.", ar:"أيًا كان ما تقدمه — أفوغاتو، أو حلوى على طبق، أو عرض جيلاتو كامل — هناك فئة مناسبة لذلك."},
  "home.tier.classic.title": {en:"Classic", ar:"كلاسيك"},
  "home.tier.classic.desc": {en:"Vanilla, Chocolate and Lemon — the dependable everyday base every case needs.", ar:"فانيلا وشوكولاتة وليمون — الأساس اليومي الذي يحتاجه كل عرض."},
  "home.tier.special.title": {en:"Special", ar:"مميزة"},
  "home.tier.special.desc": {en:"Standout flavors, from Snickers and Twix to Pistachio and Arabic Mesteka — built to be noticed on a menu board.", ar:"نكهات مميزة، من سنيكرز وتويكس إلى الفستق والمستكة العربية — مصممة لتلفت الأنظار على قائمة الطعام."},
  "home.tier.request.title": {en:"Upon Request", ar:"حسب الطلب"},
  "home.tier.request.desc": {en:"Knafeh, Saffron, Turkish Delight, and anything else you can dream up — made to order for menus that want something unique.", ar:"كنافة وزعفران وراحة تركية وأي فكرة أخرى تخطر ببالك — تُصنع حسب الطلب لقوائم الطعام التي تريد شيئًا مميزًا."},
  "home.see_all": {en:"See all our flavors", ar:"شاهد جميع نكهاتنا"},
  "home.serve.eyebrow": {en:"Who we serve", ar:"من نخدم"},
  "home.serve.h2": {en:"Built for kitchens that scoop, plate and pour.", ar:"مصمم للمطابخ التي تُقدّم وتُقطّع وتَسكب."},
  "home.serve.coffee.title": {en:"Coffee Shops", ar:"محلات القهوة"},
  "home.serve.coffee.desc": {en:"Affogato, dessert specials and grab-and-go tubs that pair naturally with your existing menu.", ar:"أفوغاتو، أطباق حلوى مميزة، وعبوات جاهزة تتناسب بشكل طبيعي مع قائمة طعامك الحالية."},
  "home.serve.restaurants.title": {en:"Restaurants", ar:"المطاعم"},
  "home.serve.restaurants.desc": {en:"A dessert course that's ready to plate — consistent quality, batch after batch.", ar:"طبق حلوى جاهز للتقديم — بجودة ثابتة، دفعة بعد دفعة."},
  "home.serve.gelato.title": {en:"Gelato Shops", ar:"محلات الجيلاتو"},
  "home.serve.gelato.desc": {en:"A deep bench of flavors to rotate through your case without running your own production.", ar:"تشكيلة واسعة من النكهات لتدويرها في عرضك دون الحاجة لتشغيل إنتاج خاص بك."},
  "home.how.eyebrow": {en:"How wholesale works", ar:"كيف تعمل عملية الجملة"},
  "home.how.h2": {en:"From first message to first delivery.", ar:"من أول رسالة إلى أول توصيل."},
  "home.step1.title": {en:"Choose your flavors", ar:"اختر نكهاتك"},
  "home.step1.desc": {en:"Browse the full lineup and shortlist what fits your menu and your case.", ar:"تصفح التشكيلة الكاملة واختر ما يناسب قائمة طعامك وعرضك."},
  "home.step2.title": {en:"Request a quote", ar:"اطلب عرض سعر"},
  "home.step2.desc": {en:"Send us your flavor list and estimated quantities — by form or WhatsApp, whichever's faster for you.", ar:"أرسل لنا قائمة نكهاتك والكميات التقديرية — عبر النموذج أو واتساب، أيهما أسرع لك."},
  "home.step3.title": {en:"We deliver", ar:"نقوم بالتوصيل"},
  "home.step3.desc": {en:"We confirm pricing and delivery to your address in Amman and beyond.", ar:"نؤكد السعر والتوصيل إلى عنوانك في عمّان وخارجها."},
  "home.gallery.eyebrow": {en:"A taste of Aurora", ar:"لمحة من أورورا"},
  "home.gallery.h2": {en:"Real scoops, real gelato.", ar:"مغارف حقيقية، جيلاتو حقيقي."},
  "home.cta2.h2": {en:"Ready to stock Aurora in your case?", ar:"هل أنت مستعد لعرض منتجات أورورا؟"},  "home.cta2.p": {en:"Tell us what you need — we'll get back to you with pricing and availability.", ar:"أخبرنا بما تحتاجه — وسنعاود التواصل معك بالسعر والتوفر."},

  // about
  "about.eyebrow": {en:"Our story", ar:"قصتنا"},
  "about.h1": {en:"Made in small batches, built for busy kitchens.", ar:"تُصنع بدفعات صغيرة، مصممة للمطابخ المزدحمة."},
  "about.p": {en:"Aurora started with a simple idea: Amman's cafés, restaurants and gelaterias deserve Italian-style ice cream without needing their own production line. So we built one, and we run it for you — batch after batch, tub after tub.", ar:"بدأت أورورا بفكرة بسيطة: مقاهي عمّان ومطاعمها ومحلات الجيلاتو تستحق آيس كريم إيطالي دون الحاجة لخط إنتاج خاص بها. لذا أنشأنا واحدًا، ونديره من أجلك — دفعة بعد دفعة، ووعاء بعد وعاء."},
  "about.h2.technique": {en:"Italian technique, local ingredients.", ar:"تقنية إيطالية، مكونات محلية."},
  "about.p2": {en:"Every tub is churned in small batches using traditional Italian gelato methods — slow-churned for a dense, creamy texture rather than the airy, ice-heavy result of mass production. We keep our recipes consistent so the tub you scoop in December tastes exactly like the one from June.", ar:"يُخفق كل وعاء بدفعات صغيرة باستخدام أساليب الجيلاتو الإيطالية التقليدية — خفق بطيء لقوام كثيف وكريمي بدلاً من النتيجة الهوائية الثلجية للإنتاج الضخم. نحافظ على ثبات وصفاتنا بحيث يكون طعم الوعاء الذي تقدمه في ديسمبر مطابقًا تمامًا لذلك الذي في يونيو."},
  "about.p3": {en:"Aurora is a wholesale-only maker. We don't run a retail counter — our entire kitchen is set up to serve one kind of customer: businesses that need to serve great ice cream without making it themselves.", ar:"أورورا مُصنّعة بالجملة فقط. لا ندير منفذ بيع بالتجزئة — مطبخنا بأكمله مُجهّز لخدمة نوع واحد من العملاء: الشركات التي تحتاج لتقديم آيس كريم رائع دون صنعه بنفسها."},
  "about.why.eyebrow": {en:"Why kitchens choose Aurora", ar:"لماذا تختار المطابخ أورورا"},
  "about.why.h2": {en:"What you get with every order.", ar:"ماذا تحصل عليه مع كل طلب."},
  "about.consistency.title": {en:"Consistency", ar:"الثبات"},
  "about.consistency.desc": {en:"Fixed recipes and batch standards, so every tub matches the last — no surprises on your menu.", ar:"وصفات ثابتة ومعايير دفعات موحدة، بحيث يتطابق كل وعاء مع سابقه — دون مفاجآت في قائمة طعامك."},
  "about.ready.title": {en:"Ready-to-serve tubs", ar:"عبوات جاهزة للتقديم"},
  "about.ready.desc": {en:"5-liter tubs sized for real service volume — straight from our kitchen to your freezer.", ar:"عبوات سعة 5 لتر بحجم مناسب لحجم الخدمة الفعلي — مباشرة من مطبخنا إلى مجمدك."},
  "about.flex.title": {en:"Flexible flavor mix", ar:"مزيج نكهات مرن"},
  "about.flex.desc": {en:"Mix classic, premium and diet flavors in one order to match exactly what your menu needs.", ar:"امزج النكهات الكلاسيكية والمميزة والدايت في طلب واحد ليطابق تمامًا ما تحتاجه قائمة طعامك."},
  "about.cta.h2": {en:"Curious what Aurora could add to your menu?", ar:"هل تتساءل عمّا يمكن لأورورا إضافته لقائمة طعامك؟"},
  "about.cta.p": {en:"Get in touch and we'll walk you through flavors, quantities and delivery.", ar:"تواصل معنا وسنشرح لك النكهات والكميات والتوصيل."},

  // flavors
  "flavors.eyebrow": {en:"The full lineup", ar:"التشكيلة الكاملة"},
  "flavors.h1": {en:"Endless flavors. Three tiers. One tub size.", ar:"نكهات لا حدود لها. ثلاث فئات. حجم وعاء واحد."},
  "flavors.p": {en:"Every flavor is available in our standard 5-liter wholesale tub, or by the liter for smaller orders. Churned to the same standard whether it's your first order or your fiftieth. Pricing is quoted per business, based on flavor mix and volume — request a quote and we'll send current rates.", ar:"كل نكهة متوفرة في وعاء الجملة القياسي سعة 5 لتر، أو باللتر للطلبات الأصغر. تُحضّر بنفس المعيار سواء كان طلبك الأول أو الخمسين. يُحدد السعر لكل شركة بناءً على مزيج النكهات والكمية — اطلب عرض سعر وسنرسل لك الأسعار الحالية."},
  "flavors.tab.classic": {en:"Classic", ar:"كلاسيك"},
  "flavors.tab.special": {en:"Special", ar:"مميزة"},
  "flavors.tab.dietketo": {en:"Diet & Keto", ar:"دايت وكيتو"},
  "flavors.note.dietketo": {en:"Watching sugar or carbs? These are prepared diet-friendly and keto-friendly on request.", ar:"تراقب السكر أو الكربوهيدرات؟ نُحضّر هذه بطريقة مناسبة للدايت والكيتو حسب الطلب."},
  "flavors.tab.request": {en:"Upon Request", ar:"حسب الطلب"},
  "flavors.note.classic": {en:"Everyday flavors that belong on every menu — the dependable base of any gelato case.", ar:"نكهات يومية تناسب كل قائمة طعام — الأساس الموثوق لأي عرض جيلاتو."},
  "flavors.note.special": {en:"Signature and candy-inspired flavors for menus that want to stand out.", ar:"نكهات مميزة ومستوحاة من الحلويات لقوائم الطعام التي تريد التميّز."},
  "flavors.note.request": {en:"Not on the standard list? These (and more) can be made to order — including diet-friendly and keto options. Ask us when requesting your quote.", ar:"ليست ضمن القائمة القياسية؟ يمكن صنع هذه (وغيرها) حسب الطلب — بما في ذلك خيارات الدايت والكيتو. اسألنا عند طلب عرض السعر."},
  "flavors.cta.h2": {en:"Found your flavors?", ar:"وجدت نكهاتك؟"},
  "flavors.cta.p": {en:"Send us your shortlist and estimated quantities — we'll reply with pricing and delivery details.", ar:"أرسل لنا قائمتك المختصرة والكميات التقديرية — وسنرد عليك بتفاصيل السعر والتوصيل."},

  // order
  "order.eyebrow": {en:"Order", ar:"اطلب"},
  "order.h1": {en:"Pick your flavors, we'll take it from there.", ar:"اختر نكهاتك، والباقي علينا."},
  "order.p": {en:"Whether you're a business ordering wholesale tubs or placing a personal retail order, choose your flavors and quantities below. We'll confirm pricing and details over WhatsApp — usually the same day.", ar:"سواء كنت شركة تطلب عبوات بالجملة أو تضع طلبًا شخصيًا بالتجزئة، اختر نكهاتك وكمياتك أدناه. سنؤكد السعر والتفاصيل عبر واتساب — عادةً في نفس اليوم."},
  "order.type.wholesale": {en:"Wholesale", ar:"جملة"},
  "order.type.wholesale.sub": {en:"For businesses — tubs, ongoing supply", ar:"للشركات — عبوات، توريد مستمر"},
  "order.type.retail": {en:"Retail", ar:"تجزئة"},
  "order.type.retail.sub": {en:"For individuals — personal order", ar:"للأفراد — طلب شخصي"},
  "order.label.bizname": {en:"Business name", ar:"اسم النشاط التجاري"},
  "order.label.contact": {en:"Contact person", ar:"الشخص المسؤول"},
  "order.label.biztype": {en:"Business type", ar:"نوع النشاط"},
  "order.option.coffee": {en:"Coffee Shop", ar:"محل قهوة"},
  "order.option.restaurant": {en:"Restaurant", ar:"مطعم"},
  "order.option.gelato": {en:"Gelato Shop", ar:"محل جيلاتو"},
  "order.option.other": {en:"Other", ar:"أخرى"},
  "order.label.qty": {en:"Estimated quantity", ar:"الكمية التقديرية"},
  "order.qty.hint": {en:"Available in 5L tubs or by the liter — let us know what works for you.", ar:"متوفر بوعاء 5 لتر أو باللتر — أخبرنا بما يناسبك."},
  "order.label.rname": {en:"Your name", ar:"اسمك"},
  "order.label.fulfil": {en:"Pickup or delivery?", ar:"استلام أم توصيل؟"},
  "order.label.size": {en:"Size", ar:"الحجم"},
  "order.size.5l": {en:"5 Liter", ar:"5 لتر"},
  "order.size.3l": {en:"3 Liter", ar:"3 لتر"},
  "order.size.kilo": {en:"Kilo", ar:"كيلو"},
  "order.area.hint": {en:"Delivery is available across Amman, depending on your area — we'll confirm coverage and timing when we reply.", ar:"التوصيل متوفر داخل عمّان حسب المنطقة — سنؤكد التغطية والوقت عند ردنا عليك."},
  "order.option.pickup": {en:"Pickup", ar:"استلام"},
  "order.option.delivery": {en:"Delivery", ar:"توصيل"},
  "order.label.phone": {en:"Phone number", ar:"رقم الهاتف"},
  "order.label.email": {en:"Email", ar:"البريد الإلكتروني"},
  "order.label.optional": {en:"(optional)", ar:"(اختياري)"},
  "order.label.area": {en:"Delivery area / city", ar:"منطقة التوصيل / المدينة"},
  "order.label.flavors": {en:"Choose your flavors & quantities", ar:"اختر نكهاتك وكمياتك"},
  "order.picker.classic": {en:"Classic", ar:"كلاسيك"},
  "order.picker.special": {en:"Special", ar:"مميزة"},
  "order.picker.dietketo": {en:"Diet & Keto", ar:"دايت وكيتو"},
  "order.picker.request": {en:"Upon Request", ar:"حسب الطلب"},
  "order.summary.title": {en:"Your order", ar:"طلبك"},
  "order.summary.empty": {en:"No flavors selected yet — use the + buttons above.", ar:"لم تُحدد أي نكهة بعد — استخدم أزرار + أعلاه."},
  "order.label.notes": {en:"Anything else we should know?", ar:"أي شيء آخر يجب أن نعرفه؟"},
  "order.submit": {en:"Send via WhatsApp", ar:"إرسال عبر واتساب"},
  "order.prefer": {en:"Prefer email or a direct chat?", ar:"تفضل البريد الإلكتروني أو محادثة مباشرة؟"},
  "order.email_us": {en:"Email Us", ar:"راسلنا"},
  "order.chat_whatsapp": {en:"Chat on WhatsApp", ar:"تواصل عبر واتساب"},

  // contact
  "contact.eyebrow": {en:"Contact", ar:"تواصل معنا"},
  "contact.h1": {en:"Let's talk about your case.", ar:"لنتحدث عن احتياجاتك."},
  "contact.p": {en:"Questions about flavors, minimums or delivery? Reach out any way that's easiest for you.", ar:"أسئلة حول النكهات أو الحد الأدنى للطلب أو التوصيل؟ تواصل معنا بأي طريقة تناسبك."},
  "contact.location.title": {en:"Location", ar:"الموقع"},
  "contact.location.value": {en:"Al-Muqableen, Murshed Mhyrat St. / Amman, Jordan", ar:"المقابلين، شارع مرشد مهيرات / عمّان، الأردن"},
  "contact.whatsapp.title": {en:"WhatsApp", ar:"واتساب"},
  "contact.email.title": {en:"Email", ar:"البريد الإلكتروني"},
  "contact.hours.title": {en:"Order hours", ar:"ساعات الطلب"},
  "contact.hours.value": {en:"Sunday – Thursday, 9:00 AM – 5:00 PM", ar:"الأحد – الخميس، 9:00 صباحًا – 5:00 مساءً"},
  "contact.note": {en:"Aurora is a wholesale supplier — we don't have a retail storefront, but we're happy to arrange a tasting visit for businesses considering an order.", ar:"أورورا مورّد بالجملة — ليس لدينا منفذ بيع بالتجزئة، لكن يسعدنا ترتيب زيارة تذوق للشركات التي تفكر بتقديم طلب."},
  "contact.quickmsg.eyebrow": {en:"Quick message", ar:"رسالة سريعة"},
  "contact.quickmsg.h2": {en:"Or send us a note directly.", ar:"أو أرسل لنا رسالة مباشرة."},
  "contact.label.name": {en:"Your name", ar:"اسمك"},
  "contact.label.phone": {en:"Phone number", ar:"رقم الهاتف"},
  "contact.label.business": {en:"Business name", ar:"اسم النشاط التجاري"},
  "contact.label.message": {en:"Message", ar:"الرسالة"},
  "contact.submit": {en:"Send via WhatsApp", ar:"إرسال عبر واتساب"},

  // language toggle button itself
  "lang.toggle": {en:"العربية", ar:"English"},

  // ===== NEW: nav catering link =====
  "footer.catering": {en:"Catering & Events", ar:"المناسبات والفعاليات"},

  // ===== NEW: homepage repositioning =====
  "home.eyebrow.brand": {en:"Premium Ice Cream · Amman, Jordan", ar:"آيس كريم فاخر · عمّان، الأردن"},
  "home.tagline": {en:"Where every scoop is a story.", ar:"حيث كل مغرفة حكاية."},
  "home.ways.eyebrow": {en:"Three ways to enjoy Aurora", ar:"ثلاث طرق للاستمتاع بأورورا"},
  "home.ways.h2": {en:"However you'd like your gelato, we've got you covered.", ar:"مهما كانت الطريقة التي تفضلها، أورورا جاهزة لك."},
  "home.ways.shop.title": {en:"Visit Our Shop", ar:"زُر متجرنا"},
  "home.ways.shop.desc": {en:"Stop by for a single scoop, a family treat, or a moment to yourself.", ar:"مرّ علينا لمغرفة واحدة، أو متعة عائلية، أو لحظة خاصة بك."},
  "home.ways.wholesale.title": {en:"Wholesale Supply", ar:"التوريد بالجملة"},
  "home.ways.wholesale.desc": {en:"For coffee shops, restaurants and gelato shops that want real Italian-style ice cream without the production line.", ar:"لمحلات القهوة والمطاعم ومحلات الجيلاتو التي تريد آيس كريم إيطالي حقيقي دون خط إنتاج خاص بها."},
  "home.ways.catering.title": {en:"Catering & Events", ar:"المناسبات والفعاليات"},
  "home.ways.catering.desc": {en:"Elegant gelato stations and custom flavor selections for weddings, celebrations and corporate events.", ar:"محطات جيلاتو أنيقة واختيارات نكهات مخصصة لحفلات الزفاف والاحتفالات والفعاليات المؤسسية."},
  "home.ways.catering.cta": {en:"Explore Catering", ar:"اكتشف خدمات المناسبات"},

  // ===== NEW: about page (full rewrite) =====
  "about.hero.eyebrow": {en:"Welcome to Aurora", ar:"أهلاً بكم في أورورا"},
  "about.hero.h1": {en:"Where every scoop is a story.", ar:"حيث كل مغرفة حكاية."},
  "about.hero.p": {en:"Aurora Ice Cream is a premium ice cream brand established in 2016, inspired by the beauty of authentic Italian gelato and crafted with a modern vision. We believe every scoop should be an experience — bringing together exceptional ingredients, creative flavors, and unforgettable moments.", ar:"أورورا آيس كريم علامة آيس كريم فاخرة فاخرة تأسست عام 2016، مستوحاة من جمال الجيلاتو الإيطالي الأصيل ومصمَّمة برؤية عصرية. نؤمن بأن كل مغرفة يجب أن تكون تجربة — تجمع بين مكونات استثنائية ونكهات مبتكرة ولحظات لا تُنسى."},
  "about.hero.p2": {en:"From timeless classics to signature Middle Eastern creations, Aurora offers handcrafted gelato made with passion, precision, and premium quality. Whether you're enjoying a single scoop, celebrating a special occasion, or creating memories with family and friends, Aurora transforms every visit into something extraordinary.", ar:"من الكلاسيكيات الخالدة إلى الإبداعات الشرق أوسطية المميزة، تقدم أورورا جيلاتو مصنوعًا يدويًا بشغف ودقة وجودة عالية. سواء كنت تستمتع بمغرفة واحدة، أو تحتفل بمناسبة خاصة، أو تصنع ذكريات مع العائلة والأصدقاء، تحوّل أورورا كل زيارة إلى شيء استثنائي."},

  "about.story.eyebrow": {en:"Our Story", ar:"قصتنا"},
  "about.story.h2": {en:"Born from a simple dream.", ar:"وُلدت من حلم بسيط."},
  "about.story.p1": {en:"Aurora was born from a simple dream: to redefine the ice cream experience. Inspired by the craftsmanship of traditional Italian gelato and the rich flavors of the Middle East, Aurora was founded in 2016 with a vision to create more than just desserts — we create moments of happiness.", ar:"وُلدت أورورا من حلم بسيط: إعادة تعريف تجربة الآيس كريم. مستوحاة من حرفية الجيلاتو الإيطالي التقليدي ونكهات الشرق الأوسط الغنية، تأسست أورورا عام 2016 برؤية لصنع أكثر من مجرد حلويات — نحن نصنع لحظات سعادة."},
  "about.story.p2": {en:"Our journey began with a passion for combining authentic recipes, premium ingredients, and innovative flavor combinations. Every recipe is carefully developed to deliver a perfectly balanced texture, rich taste, and memorable experience. Today, Aurora continues to craft ice cream that celebrates creativity, quality, and the joy of sharing life's sweetest moments.", ar:"بدأت رحلتنا بشغف للجمع بين الوصفات الأصيلة والمكونات الفاخرة ومزيجات النكهات المبتكرة. تُطوَّر كل وصفة بعناية لتقديم قوام متوازن تمامًا، وطعم غني، وتجربة لا تُنسى. واليوم، تواصل أورورا صناعة آيس كريم فاخر يحتفي بالإبداع والجودة وفرحة مشاركة أحلى لحظات الحياة."},

  "about.philosophy.eyebrow": {en:"Our Philosophy", ar:"فلسفتنا"},
  "about.philosophy.h2": {en:"Exceptional gelato begins with exceptional ingredients.", ar:"الجيلاتو الاستثنائي يبدأ بمكونات استثنائية."},
  "about.philosophy.p": {en:"We carefully select premium dairy, fresh fruits, fine chocolates, roasted nuts, and authentic natural flavors to create products that are smooth, rich, and full of character. Every batch is crafted with care to ensure consistency, freshness, and excellence in every scoop.", ar:"نختار بعناية أجود منتجات الألبان والفواكه الطازجة والشوكولاتة الفاخرة والمكسرات المحمصة والنكهات الطبيعية الأصيلة لصنع منتجات ناعمة وغنية ومميزة الطابع. تُصنع كل دفعة بعناية لضمان الثبات والطزاجة والتميّز في كل مغرفة."},

  "about.mission.title": {en:"Our Mission", ar:"مهمتنا"},
  "about.mission.desc": {en:"To create premium ice cream that brings people together through exceptional quality, innovative flavors, and memorable experiences.", ar:"صنع آيس كريم فاخر فاخر يجمع الناس من خلال جودة استثنائية ونكهات مبتكرة وتجارب لا تُنسى."},
  "about.vision.title": {en:"Our Vision", ar:"رؤيتنا"},
  "about.vision.desc": {en:"To become the leading premium gelato brand in the Middle East, recognized for creativity, craftsmanship, and unforgettable customer experiences while expanding Aurora to destinations around the world.", ar:"أن نصبح العلامة الرائدة للجيلاتو الفاخر في الشرق الأوسط، معروفين بالإبداع والحرفية وتجارب العملاء التي لا تُنسى، مع التوسع بأورورا إلى وجهات حول العالم."},

  "about.values.eyebrow": {en:"Our Values", ar:"قيمنا"},
  "about.values.h2": {en:"What guides everything we make.", ar:"ما يوجّه كل ما نصنعه."},
  "about.value.quality.title": {en:"Quality First", ar:"الجودة أولاً"},
  "about.value.quality.desc": {en:"Every ingredient matters.", ar:"كل مكوّن مهم."},
  "about.value.craft.title": {en:"Artisan Craftsmanship", ar:"حرفية فنية"},
  "about.value.craft.desc": {en:"Handcrafted with precision and passion.", ar:"مصنوع يدويًا بدقة وشغف."},
  "about.value.innovation.title": {en:"Innovation", ar:"الابتكار"},
  "about.value.innovation.desc": {en:"Creating exciting flavors while respecting tradition.", ar:"ابتكار نكهات مثيرة مع احترام التقاليد."},
  "about.value.freshness.title": {en:"Freshness", ar:"الطزاجة"},
  "about.value.freshness.desc": {en:"Prepared with carefully selected premium ingredients.", ar:"تُحضَّر بمكونات فاخرة مُنتقاة بعناية."},
  "about.value.hospitality.title": {en:"Hospitality", ar:"كرم الضيافة"},
  "about.value.hospitality.desc": {en:"Making every guest feel welcome.", ar:"نجعل كل ضيف يشعر بالترحيب."},
  "about.value.excellence.title": {en:"Excellence", ar:"التميّز"},
  "about.value.excellence.desc": {en:"Delivering outstanding products and service every day.", ar:"تقديم منتجات وخدمة متميزة كل يوم."},

  "about.diff.eyebrow": {en:"What Makes Aurora Different", ar:"ما الذي يميّز أورورا"},
  "about.diff.h2": {en:"Ten reasons Aurora stands apart.", ar:"عشرة أسباب تجعل أورورا مختلفة."},
  "about.diff.1": {en:"Authentic premium ice cream", ar:"آيس كريم فاخر أصيل"},
  "about.diff.2": {en:"Premium quality ingredients", ar:"مكونات فاخرة عالية الجودة"},
  "about.diff.3": {en:"Inspired by Italian craftsmanship", ar:"مستوحى من الحرفية الإيطالية"},
  "about.diff.4": {en:"Signature Middle Eastern flavors", ar:"نكهات شرق أوسطية مميزة"},
  "about.diff.5": {en:"Freshly prepared recipes", ar:"وصفات مُحضَّرة طازجة"},
  "about.diff.6": {en:"Rich, creamy texture", ar:"قوام غني وكريمي"},
  "about.diff.7": {en:"Elegant presentation", ar:"تقديم أنيق"},
  "about.diff.8": {en:"Seasonal creations", ar:"إبداعات موسمية"},
  "about.diff.9": {en:"Family-friendly atmosphere", ar:"أجواء مناسبة للعائلات"},
  "about.diff.10": {en:"Catering and event services", ar:"خدمات المناسبات والفعاليات"},

  // ===== NEW: catering page =====
  "catering.eyebrow": {en:"Catering & Events", ar:"المناسبات والفعاليات"},
  "catering.h1": {en:"Unforgettable dessert experiences, wherever you celebrate.", ar:"تجارب حلوى لا تُنسى، أينما احتفلت."},
  "catering.p": {en:"Aurora creates unforgettable dessert experiences for weddings, corporate events, private parties, birthdays, festivals, luxury gatherings, and product launches. From elegant gelato stations to customized flavor selections, we make every celebration extraordinary.", ar:"تصنع أورورا تجارب حلوى لا تُنسى لحفلات الزفاف والفعاليات المؤسسية والحفلات الخاصة وأعياد الميلاد والمهرجانات والتجمعات الفاخرة وإطلاق المنتجات. من محطات الجيلاتو الأنيقة إلى اختيارات النكهات المخصصة، نجعل كل احتفال استثنائيًا."},
  "catering.events.eyebrow": {en:"Occasions we cater", ar:"المناسبات التي نخدمها"},
  "catering.events.h2": {en:"Every celebration deserves something extraordinary.", ar:"كل احتفال يستحق شيئًا استثنائيًا."},
  "catering.event.weddings": {en:"Weddings", ar:"حفلات الزفاف"},
  "catering.event.corporate": {en:"Corporate Events", ar:"الفعاليات المؤسسية"},
  "catering.event.private": {en:"Private Parties", ar:"الحفلات الخاصة"},
  "catering.event.birthdays": {en:"Birthdays", ar:"أعياد الميلاد"},
  "catering.event.festivals": {en:"Festivals", ar:"المهرجانات"},
  "catering.event.luxury": {en:"Luxury Gatherings", ar:"التجمعات الفاخرة"},
  "catering.event.launches": {en:"Product Launches", ar:"إطلاق المنتجات"},
  "catering.how.eyebrow": {en:"How it works", ar:"كيف تسير العملية"},
  "catering.how.h2": {en:"From first inquiry to the last scoop.", ar:"من أول استفسار إلى آخر مغرفة."},
  "catering.step1.title": {en:"Tell us about your event", ar:"أخبرنا عن مناسبتك"},
  "catering.step1.desc": {en:"Share your date, guest count and vision — we'll take it from there.", ar:"شاركنا التاريخ وعدد الضيوف والفكرة — وسنتولى الباقي."},
  "catering.step2.title": {en:"We design your gelato station", ar:"نصمم محطة الجيلاتو الخاصة بك"},
  "catering.step2.desc": {en:"A customized flavor selection and setup that matches your occasion.", ar:"اختيار نكهات وإعداد مخصص يناسب مناسبتك."},
  "catering.step3.title": {en:"We deliver the experience", ar:"نُقدّم التجربة"},
  "catering.step3.desc": {en:"Elegant service on the day, so you can focus on celebrating.", ar:"خدمة أنيقة في يوم الحدث، لتتفرغ أنت للاحتفال."},
  "catering.cta.h2": {en:"Planning an event?", ar:"هل تخطط لمناسبة؟"},
  "catering.cta.p": {en:"Tell us about your celebration and we'll help design an unforgettable gelato experience.", ar:"أخبرنا عن احتفالك وسنساعدك في تصميم تجربة جيلاتو لا تُنسى."},
  "catering.cta.whatsapp": {en:"Chat on WhatsApp", ar:"تواصل عبر واتساب"},
  "catering.cta.email": {en:"Email Us", ar:"راسلنا"},

  // ===== NEW: contact page repositioning =====
  "contact.note.v2": {en:"Aurora welcomes walk-in guests at our gelato shop, and also supplies wholesale partners and caters private events. Reach out any way that's easiest for you.", ar:"يرحب أورورا بالضيوف في متجر الجيلاتو الخاص بنا، كما نوفر التوريد بالجملة للشركاء ونقدم خدمات المناسبات الخاصة. تواصل معنا بأي طريقة تناسبك."},
};

function applyLanguage(lang) {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', dir);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const entry = TRANSLATIONS[key];
    if (entry) el.textContent = entry[lang] || entry.en;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const entry = TRANSLATIONS[key];
    if (entry) el.setAttribute('placeholder', entry[lang] || entry.en);
  });
  try { localStorage.setItem('aurora_lang', lang); } catch (e) {}
}

function currentLanguage() {
  try { return localStorage.getItem('aurora_lang') || 'en'; } catch (e) { return 'en'; }
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLanguage());
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = currentLanguage() === 'ar' ? 'en' : 'ar';
      applyLanguage(next);
    });
  });
});
