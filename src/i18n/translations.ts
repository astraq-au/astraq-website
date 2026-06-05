export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      store: "Store",
      news: "News",
    },

    home: {
      heroTitle: "Founded in Australia",
      heroSubtitle: "Heavy Transport · Clean Energy · Intelligent Robotics",
      aboutButton: "About Us",
    },

    products: {
      dieselMixer: "Diesel Mixer",
      dieselPrimeMover: "Diesel Prime Mover",
      electricPrimeMover: "Electric Prime Mover",
      electricLightTruck: "Electric Light Truck",
      learnMore: "Learn More",
      buyNow: "Buy Now",

      cleanEnergyTitle: "Clean Energy Infrastructure",
      cleanEnergyDesc:
        "Integrated solar generation, battery storage, and charging services for commercial transport.",

      solarTitle: "Solar-Storage-Charging Integrated Station",

      brandTitle: "Founded in Australia",
      brandSubtitle: "Heavy Transport · Clean Energy · Intelligent Robotics",
      aboutUs: "About Us",
    },

    massageRobot: {
      heroTitle1: "Smarter Massage",
      heroTitle2: "Better Recovery",
      heroSubtitle1: "Advanced robotic therapy for wellness,",
      heroSubtitle2: "rehab and recovery.",
      viewSpecifications: "View Specifications",
      buyNow: "Buy Now",

      therapyFunctions: "Therapy Functions",

      massage: "Massage",
      shockwave: "Magneto Shockwave",
      heat: "Endogenous Heat",

      adaptiveMassageTitle: "Adaptive Robotic Massage",
      adaptiveMassageDesc:
        "Targeted robotic massage helps relax muscles and support daily recovery.",

      shockwaveTitle: "Deep Tissue Stimulation",
      shockwaveDesc:
        "High-frequency stimulation supports deep tissue response and advanced recovery.",

      heatTitle: "Controlled Thermal Support",
      heatDesc:
        "Gentle heat therapy helps promote circulation, relaxation and treatment comfort.",

      capabilitiesTitle: "Intelligent Therapy Capabilities",
      capabilitiesDesc:
        "AI-powered perception, precise execution and intuitive collaboration for better outcomes.",

      acupoint: "Acupoint Recognition",
      control: "Precise Control",
      interaction: "Multi-Modal Interaction",

      applicationTitle: "Application Scenarios",
      applicationDesc:
        "ET-M adapts to a wide range of professional environments, delivering consistent, intelligent therapy that elevates care and drives business growth.",

      therapyRoom: "Physical Therapy Room",
      therapyRoomDesc:
        "Support recovery and mobility with precise, data-driven robotic massage therapy.",

      beautyClinic: "Beauty Clinic",
      beautyClinicDesc:
        "Enhance treatment offerings and elevate client experience with intelligent care.",

      sportsRehab: "Sports Rehabilitation Center",
      sportsRehabDesc:
        "Accelerate athlete recovery and optimize performance with targeted therapy.",
    },
  },

  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      products: "产品",
      store: "商店",
      news: "新闻",
    },

    home: {
      heroTitle: "创立于澳大利亚",
      heroSubtitle: "重型运输 · 清洁能源 · 智能机器人",
      aboutButton: "了解我们",
    },

    products: {
      dieselMixer: "柴油搅拌车",
      dieselPrimeMover: "柴油牵引车",
      electricPrimeMover: "电动牵引车",
      electricLightTruck: "电动轻卡",
      learnMore: "了解更多",
      buyNow: "立即购买",

      cleanEnergyTitle: "清洁能源基础设施",
      cleanEnergyDesc:
        "集成太阳能发电、储能与商用交通充电服务，为未来运输场景提供能源支持。",

      solarTitle: "光储充一体化站",

      brandTitle: "创立于澳大利亚",
      brandSubtitle: "重型运输 · 清洁能源 · 智能机器人",
      aboutUs: "关于我们",
    },

    massageRobot: {
      heroTitle1: "更智能的按摩",
      heroTitle2: "更高效的恢复",
      heroSubtitle1: "面向康养、理疗与康复场景的",
      heroSubtitle2: "先进机器人治疗方案。",
      viewSpecifications: "查看参数",
      buyNow: "立即购买",

      therapyFunctions: "治疗功能",

      massage: "按摩",
      shockwave: "磁震波",
      heat: "内源热",

      adaptiveMassageTitle: "自适应机器人按摩",
      adaptiveMassageDesc:
        "通过精准的机器人按摩，帮助放松肌肉并支持日常恢复。",

      shockwaveTitle: "深层组织刺激",
      shockwaveDesc:
        "高频刺激支持深层组织响应，提升专业康复治疗能力。",

      heatTitle: "可控热疗支持",
      heatDesc:
        "温和热疗有助于促进循环、放松身体并提升治疗舒适度。",

      capabilitiesTitle: "智能治疗能力",
      capabilitiesDesc:
        "结合 AI 感知、精准执行与人机协作，为专业治疗带来更稳定的效果。",

      acupoint: "穴位识别",
      control: "精准控制",
      interaction: "多模态交互",

      applicationTitle: "应用场景",
      applicationDesc:
        "ET-M 可适配多种专业服务环境，提供稳定、智能的治疗体验，提升护理质量并助力业务增长。",

      therapyRoom: "物理治疗室",
      therapyRoomDesc:
        "通过精准、数据驱动的机器人按摩治疗，支持康复与身体活动能力恢复。",

      beautyClinic: "美容诊所",
      beautyClinicDesc:
        "丰富治疗服务内容，提升客户体验，为专业护理场景提供智能支持。",

      sportsRehab: "运动康复中心",
      sportsRehabDesc:
        "通过针对性治疗加速运动恢复，并帮助优化身体表现。",
    },
  },
};

export type Language = keyof typeof translations;
