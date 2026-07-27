// ─────────────────────────────────────────────────────────────────────────────
// Bilingual content for the GlamLoop marketing site.
//
// Arabic copy is taken verbatim from the prototype (glamloop-proto/src/App.jsx).
// English is a natural translation of the same meaning.
//
// The token [SAR] marks where the riyal currency symbol should appear. It renders
// as the riyal glyph (SVG) in Arabic and as the text "SAR" in English.
// ─────────────────────────────────────────────────────────────────────────────

export const CONTENT = {
  ar: {
    dir: 'rtl',
    langLabel: 'العربية',
    otherLangShort: 'EN',
    brand: 'GlamLoop',

    header: {
      registerCta: 'سجّلي اهتمامك',
      demoCta: 'جرّبي النسخة التجريبية',
      langAria: 'تغيير اللغة إلى الإنجليزية',
    },

    register: {
      title: 'سجّلي اهتمامك',
      subtitle: 'كوني أول من يعرف عند إطلاق GlamLoop، ووصولك المبكر للمنصة',
      nameLabel: 'الاسم',
      namePlaceholder: 'اكتبي اسمك',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'name@example.com',
      submit: 'سجّلي اهتمامك',
      close: 'إغلاق',
      successTitle: 'تم تسجيل اهتمامك!',
      successBody: 'شكراً لك، بنراسلك على بريدك الإلكتروني عند إطلاق المنصة.',
      successCta: 'تمام',
    },

    hero: {
      promoTitle: 'GlamLoop — مكانك لبيع وشراء الفساتين بثقة وسهولة',
      cardHeading: 'ليه تستخدمين GlamLoop',
      tabBuy: 'اشتري',
      tabSell: 'بيعي',
      buyCards: [
        { title: 'فلوسك محفوظة', subtitle: 'ما نوصل المبلغ للبائعة إلا بعد ما تستلمين الفستان وتتأكدين منه' },
        { title: 'نوّعي إطلالتك', subtitle: 'اكتشفي ستايلات وماركات أكثر بدون سعر الجديد كل مرة' },
        { title: 'فحص يطمنك', subtitle: 'أي فستان فوق 2000 [SAR] يمر على فريقنا للفحص قبل ما يوصل لك' },
      ],
      sellCards: [
        { title: 'طلعي قيمة فساتينك', subtitle: 'حوّلي الفساتين اللي مركونة في خزانتك لفلوس بخطوات بسيطة' },
        { title: 'بدون وجع راس', subtitle: 'نرتّب لك الدفع والشحن، بس اعرضي فساتينك واتركي الباقي علينا' },
        { title: 'فرص بيع أعلى', subtitle: 'نراجع إعلانك ونساعدك يكون مرتب وواضح لجذب المشتريات' },
      ],
      buyStepsCta: 'خطوات الشراء',
      sellStepsCta: 'خطوات البيع',
    },

    buySteps: {
      title: 'خطوات الشراء',
      steps: [
        { title: 'اختاري وادفعي', desc: 'اختاري الفستان اللي يناسبك، وكمّلي الدفع بأمان من داخل التطبيق' },
        { title: 'فلوسك محفوظة', desc: 'نحفظ المبلغ عندنا لين تستلمين الفستان وتتأكدين إنه مطابق للوصف' },
        { title: 'أكّدي خلال 3 أيام', desc: 'عندك 3 أيام من وصول الطلب عشان تأكدين الاستلام أو ترفعين طلب اعتراض' },
        { title: 'حقك محفوظ', desc: 'إذا الفستان مختلف عن الوصف أو فيه عيوب واضحة غير مذكورة، نراجع البلاغ ونرجع لك المبلغ' },
        { title: 'ثقتك تهمنا', desc: 'نفحص كل فستان سعره فوق 2000 [SAR] ونتأكد من مطابقته للوصف قبل ما يوصل لك' },
      ],
    },

    sellSteps: {
      title: 'خطوات البيع',
      steps: [
        { title: 'اعرضي فستانك', desc: 'صوّري الفستان بوضوح وأضيفي التفاصيل بشفافية، بما في ذلك توثيق اي عيوب ممكن تكون موجودة لضمان ثقة المشترين' },
        { title: 'مراجعة سريعة', desc: 'فريقنا يراجع الإعلان قبل النشر عشان يظهر بشكل مرتب وواضح، وإذا احتاج تعديل نرسل لك ملاحظات واضحة' },
        { title: 'شراء الفستان', desc: 'تدفع المشترية مبلغ الشراء للمنصة ووقتها نبلغك عشان تجهزين الفستان للشحن' },
        { title: 'اشحني خلال يومين', desc: 'نرتّب لك الشحن مجانًا حسب مدينتك، إما بالاستلام من عنوانك عن طريق شركائنا أو بتسليمه لأحد فروع الشحن المتاحة' },
        { title: 'استلمي مبلغك', desc: 'بعد استلام المشترية للفستان والتحقق من تطابق المواصفات، نحول لك المبلغ خلال 24 ساعة' },
      ],
    },

    sell: {
      heroTitle: 'بيعي فساتينك معنا',
      heroSubtitle: 'بيعي فستانك، وخلي قيمته تصير إطلالتك الجاية',
      heroCta: 'ابدئي العرض',
      howTitle: 'كيف تعمل المنصة',
      ctaTitle: 'ابدئي العرض الآن',
      hesitantTitle: 'للحين مترددة بالبيع؟',
      hesitantBody: 'لا تشيلين هم، نساعدك خطوة بخطوة ونرد على أي استفسار عندك',
      hesitantCta: 'تواصلي معنا',
    },

    faq: {
      title: 'الأسئلة الشائعة',
      // Deduplicated union of the home-tail FAQ and the sell-screen FAQ.
      items: [
        {
          q: 'هل المنصة موثوقة ومعتمدة؟',
          a: 'نعم، المنصة مسجلة لدى وزارة التجارة وموثقة لدى منصة الأعمال برقم توثيق 0000289908',
        },
        {
          q: 'ماهي الوجهات التي يتم الشحن اليها؟',
          a: 'خدماتنا تغطي جميع مناطق المملكة العربية السعودية',
        },
        {
          q: 'كم نسبة العمولة؟',
          a: 'نخصم عمولة بنسبة 10٪ من سعر بيع الفستان، ويتم تحويل صافي مبلغ البيع لك خلال 24 ساعة بعد اكتمال الطلب',
        },
        {
          q: 'كيف طريقة الشحن؟',
          a: 'بعد بيع فستانك، نرتّب لك الشحن بدون تكلفة عليك حسب مدينتك، إما يتم استلام الفستان من عنوانك عن طريق شركاء الشحن، أو تقدرين تسلمينه لأحد فروع الشحن المتاحة',
        },
        {
          q: 'ماهي سياسة الاعتراض؟',
          a: 'نسعى لحماية البائعة والمشترية. بعد استلام الفستان، تقدر المشترية ترفع اعتراض إذا كان الفستان غير مطابق للوصف أو فيه عيب غير مذكور. فريقنا يراجع الاعتراض، وإذا ثبتت المشكلة يتم إرجاع الفستان للبائعة وإعادة المبلغ للمشترية. أو يتم إكمال عملية البيع وتحويل المبلغ للبائعة في حال عدم ثبوت المشكلة',
        },
      ],
    },

    footer: {
      registeredLine: 'GlamLoop مسجّلة لدى وزارة التجارة',
      crLine: 'سجل تجاري رقم: 1010734892',
      paymentLabel: 'طرق الدفع المتاحة',
      socialLabel: 'تابعينا',
      sbcAlt: 'مركز الأعمال السعودي - وزارة التجارة',
      rights: '© 2026 GlamLoop. جميع الحقوق محفوظة.',
    },
  },

  en: {
    dir: 'ltr',
    langLabel: 'English',
    otherLangShort: 'AR',
    brand: 'GlamLoop',

    header: {
      registerCta: 'Register your interest',
      demoCta: 'Try the live demo',
      langAria: 'Switch language to Arabic',
    },

    register: {
      title: 'Register your interest',
      subtitle: 'Be the first to know when GlamLoop launches, with early access to the platform.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'name@example.com',
      submit: 'Register your interest',
      close: 'Close',
      successTitle: "You're on the list!",
      successBody: "Thank you — we'll email you the moment the platform launches.",
      successCta: 'Done',
    },

    hero: {
      promoTitle: 'GlamLoop — your place to buy and sell dresses with confidence and ease',
      cardHeading: 'Why use GlamLoop',
      tabBuy: 'Buy',
      tabSell: 'Sell',
      buyCards: [
        { title: 'Your money is protected', subtitle: "We don't release payment to the seller until you receive the dress and confirm it's as described" },
        { title: 'Refresh your look', subtitle: 'Discover more styles and brands without paying full retail every time' },
        { title: 'Inspection you can trust', subtitle: 'Any dress over 2,000 [SAR] is checked by our team before it reaches you' },
      ],
      sellCards: [
        { title: "Unlock your dresses' value", subtitle: 'Turn the dresses sitting in your closet into cash in a few simple steps' },
        { title: 'No hassle', subtitle: 'We handle payment and shipping — just list your dresses and leave the rest to us' },
        { title: 'Better chances of selling', subtitle: 'We review your listing and help make it clean and clear to attract buyers' },
      ],
      buyStepsCta: 'Buying steps',
      sellStepsCta: 'Selling steps',
    },

    buySteps: {
      title: 'Buying steps',
      steps: [
        { title: 'Choose and pay', desc: 'Pick the dress that suits you and complete a secure payment inside the app' },
        { title: 'Your money is protected', desc: 'We hold your payment until you receive the dress and confirm it matches the description' },
        { title: 'Confirm within 3 days', desc: 'You have 3 days from delivery to confirm receipt or raise a dispute' },
        { title: 'Your rights are protected', desc: 'If the dress differs from the description or has clear undisclosed defects, we review the report and refund you' },
        { title: 'Your trust matters', desc: 'We inspect every dress priced over 2,000 [SAR] and verify it matches the description before it reaches you' },
      ],
    },

    sellSteps: {
      title: 'Selling steps',
      steps: [
        { title: 'List your dress', desc: "Photograph the dress clearly and add the details transparently — including documenting any flaws — to earn buyers' trust" },
        { title: 'Quick review', desc: 'Our team reviews the listing before it goes live so it looks clean and clear; if it needs changes, we send you clear notes' },
        { title: 'The dress is purchased', desc: 'The buyer pays the purchase amount to the platform, then we notify you to prepare the dress for shipping' },
        { title: 'Ship within two days', desc: 'We arrange free shipping based on your city — either pickup from your address via our partners, or drop-off at an available shipping branch' },
        { title: 'Get paid', desc: 'Once the buyer receives the dress and confirms it matches, we transfer your payment within 24 hours' },
      ],
    },

    sell: {
      heroTitle: 'Sell your dresses with us',
      heroSubtitle: 'Sell your dress and turn its value into your next look',
      heroCta: 'Start listing',
      howTitle: 'How the platform works',
      ctaTitle: 'Start listing now',
      hesitantTitle: 'Still unsure about selling?',
      hesitantBody: 'Don’t worry — we guide you step by step and answer any question you have',
      hesitantCta: 'Contact us',
    },

    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Is the platform trusted and licensed?',
          a: 'Yes. The platform is registered with the Ministry of Commerce and verified with the Saudi Business Center under authentication number 0000289908.',
        },
        {
          q: 'Which destinations do you ship to?',
          a: 'Our service covers all regions of Saudi Arabia.',
        },
        {
          q: 'What is the commission rate?',
          a: "We take a 10% commission on the dress's sale price, and the net amount is transferred to you within 24 hours after the order is completed.",
        },
        {
          q: 'How does shipping work?',
          a: 'After your dress sells, we arrange shipping at no cost to you based on your city — either the dress is picked up from your address by our shipping partners, or you can drop it off at an available shipping branch.',
        },
        {
          q: 'What is the dispute policy?',
          a: "We work to protect both seller and buyer. After receiving the dress, the buyer can raise a dispute if the dress doesn't match the description or has an undisclosed defect. Our team reviews the dispute; if the issue is confirmed, the dress is returned to the seller and the buyer is refunded. Otherwise the sale is completed and the amount is transferred to the seller.",
        },
      ],
    },

    footer: {
      registeredLine: 'GlamLoop is registered with the Ministry of Commerce',
      crLine: 'Commercial Registration No.: 1010734892',
      paymentLabel: 'Accepted payment methods',
      socialLabel: 'Follow us',
      sbcAlt: 'Saudi Business Center - Ministry of Commerce',
      rights: '© 2026 GlamLoop. All rights reserved.',
    },
  },
};

export const PAYMENT_METHODS = [
  { name: 'mada', src: '/payments/mada.png', maxW: 44 },
  { name: 'Apple Pay', src: '/payments/apple-pay.png', maxW: 42 },
  { name: 'Visa', src: '/payments/visa.png', maxW: 44 },
  { name: 'Mastercard', src: '/payments/mastercard.png', maxW: 34 },
];

// Social icon SVG paths, taken verbatim from the prototype footer.
export const SOCIAL_LINKS = [
  { name: 'WhatsApp', href: 'https://wa.me/', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.01a9.845 9.845 0 01-5.022-1.377l-.36-.214-3.742.982.999-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.1 11.893c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.95 11.95 0 005.708 1.448h.005c6.587 0 11.946-5.334 11.95-11.893a11.82 11.82 0 00-3.478-8.454z' },
  { name: 'Snapchat', href: '#', path: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.225-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.643.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z' },
  { name: 'TikTok', href: '#', path: 'M16.6 5.82A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6a2.6 2.6 0 012.6-2.6c.27 0 .53.04.78.12V9.57a5.74 5.74 0 00-.78-.05 5.77 5.77 0 00-5.77 5.78A5.77 5.77 0 009.86 21a5.77 5.77 0 005.77-5.78V9.01A7.32 7.32 0 0020 10.27V7.18a4.3 4.3 0 01-3.4-1.36z' },
  { name: 'Instagram', href: '#', path: 'M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-2a.75.75 0 110 1.5.75.75 0 010-1.5z' },
];
