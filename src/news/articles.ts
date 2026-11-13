type ArticleTranslation = {
  title: string;
  summary: string;
  lead: string;
  sections: { heading: string; paragraphs: string[] }[];
  captions: string[];
};

type ArticleLocale = "en" | "zh";

export type Article = {
  id: string;
  publishedOn: string;
  content: Record<ArticleLocale, ArticleTranslation>;
  images: string[];
};

const dateFormatters = {
  en: new Intl.DateTimeFormat("en-AU", { dateStyle: "long", timeZone: "UTC" }),
  zh: new Intl.DateTimeFormat("zh-CN", { dateStyle: "long", timeZone: "UTC" }),
};

export function formatPublicationDate(
  publishedOn: string,
  locale: ArticleLocale
) {
  return dateFormatters[locale].format(new Date(publishedOn));
}

export const articles: Article[] = [
  {
    id: "1",
    publishedOn: "2026-11-13",
    content: {
      en: {
        title:
          "ASTRAQ completes chassis assembly for its first heavy-duty truck prototypes",
        summary:
          "ASTRAQ has begun assembling its first heavy-duty truck prototypes and has completed the chassis assembly stage.",
        lead: "ASTRAQ has begun assembling its first heavy-duty truck prototypes and has completed the chassis assembly stage. The axle assemblies and air reservoirs are in place, and the brake air lines have been routed and connected.",
        sections: [
          {
            heading: "Axle installation and vehicle stability",
            paragraphs: [
              "The axles and suspension transmit forces from the road to the chassis frame. During assembly, technicians checked axle positions and the security of the mountings. Correct fitment helps the axles, suspension and frame work together as designed, supporting vehicle stability as loads and road conditions change.",
            ],
          },
          {
            heading: "Brake air supply and vehicle safety",
            paragraphs: [
              "Air reservoirs mounted to the chassis frame store compressed air for the braking system. Technicians routed the air lines along the frame and checked the reservoir brackets and line connections during installation. Correct installation of these components supports a reliable air supply for braking.",
            ],
          },
        ],
        captions: [
          "Heavy-duty truck chassis at the assembly station",
          "Chassis frame and axle assembly",
          "Air reservoirs mounted on the chassis frame",
        ],
      },
      zh: {
        title: "ASTRAQ 首批重卡样车完成底盘装配",
        summary: "ASTRAQ 首批重卡样车已进入组装阶段，现已完成底盘装配。",
        lead: "ASTRAQ 首批重卡样车已进入组装阶段，现已完成底盘装配。车桥总成和储气筒已安装到位，相关制动供气管路也已完成布置和连接。",
        sections: [
          {
            heading: "车桥装配与行驶稳定性",
            paragraphs: [
              "车辆行驶时，来自路面的作用力经车桥和悬架传递至车架。装配人员核对车桥的安装位置，并检查连接部位的固定状态。车桥、悬架与车架按设计配合，有助于车辆在载荷变化和路面起伏时保持稳定。",
            ],
          },
          {
            heading: "制动供气与行车安全",
            paragraphs: [
              "储气筒通过支架固定在车架上，用于储存气压制动系统所需的压缩空气。装配人员沿车架布置供气管路，并检查储气筒支架和管路接头。供气部件的正确安装是制动系统可靠供气的基础。",
            ],
          },
        ],
        captions: [
          "重卡底盘装配工位",
          "车架与车桥装配细节",
          "安装在车架上的储气筒",
        ],
      },
    },
    images: [
      "/images/news/1/astraq-chassis-01.png",
      "/images/news/1/astraq-chassis-02.png",
      "/images/news/1/astraq-chassis-03.png",
    ],
  },
];
