export type Language = "en" | "zh" | "es" | "ar";

export const languageOptions = [
  { code: "en" as Language, label: "English" },
  { code: "zh" as Language, label: "中文" },
  { code: "es" as Language, label: "Español" },
  { code: "ar" as Language, label: "العربية" },
];

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      news: "News",
      store: "Store",
      contact: "Contact",
    },
    hero: {
      title: "Powering the Future of Logistics",
      subtitle: "Mobility Reimagined",
      viewProducts: "View Products",
      learnMore: "Learn More",
    },
  },

  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      products: "产品",
      news: "新闻",
      store: "门店",
      contact: "联系我们",
    },
    hero: {
      title: "驱动未来物流",
      subtitle: "重新定义移动方式",
      viewProducts: "查看产品",
      learnMore: "了解更多",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      products: "Productos",
      news: "Noticias",
      store: "Tienda",
      contact: "Contacto",
    },
    hero: {
      title: "Impulsando el Futuro de la Logística",
      subtitle: "Movilidad Reinventada",
      viewProducts: "Ver Productos",
      learnMore: "Más Información",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      news: "الأخبار",
      store: "المتجر",
      contact: "اتصل بنا",
    },
    hero: {
      title: "نقود مستقبل الخدمات اللوجستية",
      subtitle: "إعادة تصور التنقل",
      viewProducts: "عرض المنتجات",
      learnMore: "اعرف المزيد",
    },
  },
};
