import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HumanoidRobotPage: React.FC = () => {
  const features = [
   {
  title: "Human-Like Design",
  description:
    "Designed with a humanoid form for natural movement and interaction.",
  image: "/images/human-robot/ET-H-feature1.png",
},
    {
      title: "Precision Manipulation",
      description:
        "Advanced robotic hands enable accurate and flexible interaction.",
      image: "/images/human-robot/ET-H-feature2.png",
    },
    {
      title: "Smart Energy Support",
      description:
        "Built to support future electric mobility and smart infrastructure.",
      image: "/images/human-robot/ET-H-feature3.png",
    },
    {
      title: "Industrial Assistance",
      description:
        "Ready to assist in logistics, inspection, and automated operations.",
      image: "/images/human-robot/ET-H-feature4.png",
    },
  ];

  const applications = [
  {
    title: "Smart Energy Service",
    description:
      "Assisting future electric mobility through intelligent charging support.",
    image: "/images/human-robot/ET-H-application1.png",
  },
  {
    title: "Logistics Automation",
    description:
      "Helping warehouses improve handling, sorting, and operational efficiency.",
    image: "/images/human-robot/ET-H-application2.png",
  },
  {
    title: "Commercial Reception",
    description:
      "Providing guidance, interaction, and support in public commercial spaces.",
    image: "/images/human-robot/ET-H-application3.png",
  },

  {
    title: "Home Assistance",
    description:
      "Supporting daily care, comfort, and personal assistance in modern homes.",
    image: "/images/human-robot/ET-H-application4.png",
  },
];

  const [activeFeature, setActiveFeature] = useState(0);
  const [activeApplication, setActiveApplication] = useState(0);

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveFeature((prev) =>
      prev === 0 ? features.length - 1 : prev - 1
    );
  };
  
  const nextApplication = () => {
  setActiveApplication((prev) => (prev + 1) % applications.length);
};

const prevApplication = () => {
  setActiveApplication((prev) =>
    prev === 0 ? applications.length - 1 : prev - 1
  );
};

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen w-full overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/human-robot/ET-H-hero.png')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 lg:px-20">
            <div className="max-w-3xl pt-20">
              {/*<p className="mb-4 text-sm sm:text-base tracking-[0.35em] uppercase text-white/70">
                ASTRAQ Humanoid Robot
              </p>*/}

              <h1 className="mb-6 leading-tight">


  <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white/90">
   ET-H Robot
  </span>

  <span className="block mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white">
    Built For The Future
  </span>
</h1>

             {/*<p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-white/80">
                ET-H brings intelligent mobility, flexible interaction, and
                practical robotic assistance into real-world commercial and
                industrial environments.
              </p>*/}

              <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:gap-6">
  <a
    href="/specifications/ET-H-Specification.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-10 py-4 text-base font-semibold tracking-wide text-white shadow-lg transition hover:scale-105 hover:bg-white hover:text-black sm:px-12 sm:py-5 sm:text-lg"
  >
    View Specifications
  </a>

  <a
    href="/store"
    className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold tracking-wide text-black shadow-lg transition hover:scale-105 hover:bg-white/85 sm:px-12 sm:py-5 sm:text-lg"
  >
    Buy Now
  </a>
</div>
            </div>
          </div>
        </section>
   {/* Features Section */}
<section className="relative bg-[#f5f5f2] px-3 py-16 sm:px-4 lg:px-6">
  <div className="w-full">
    <div className="mb-8 text-center sm:mb-10 lg:mb-12">
      

      <h2 className="text-3xl font-semibold text-black sm:text-4xl lg:text-5xl">
        Built For The Future
      </h2>
    </div>

    <div
  className="relative mx-auto w-[96vw] overflow-hidden rounded-2xl bg-[#f5f5f2] shadow-2xl"
>
  {/* Feature Image */}
  <div
    className="h-[70vh] min-h-[420px] w-full bg-contain bg-center bg-no-repeat transition-all duration-500"
    style={{
      backgroundImage: `url(${features[activeFeature].image})`,
    }}
    role="img"
    aria-label={features[activeFeature].title}
  />

  {/* Dark Overlay */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

  {/* Text Content */}
 <div className="absolute bottom-0 left-0 z-20 w-full max-w-5xl px-6 pb-7 sm:px-10 sm:pb-10 lg:px-16 lg:pb-14">
    <h3 className="mb-4 font-semibold leading-tight tracking-tight text-white text-[clamp(2.4rem,4vw,5.8rem)]">
  {features[activeFeature].title}
</h3>

<p className="max-w-4xl leading-relaxed text-white/85 text-[clamp(1rem,1.25vw,1.6rem)]">
  {features[activeFeature].description}
</p>
  </div>

  {/* Left Arrow */}
  <button
    type="button"
    onClick={prevFeature}
    className="absolute left-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:left-8 sm:h-16 sm:w-16 lg:left-10 lg:h-20 lg:w-20"
    aria-label="Previous feature"
  >
    <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
  </button>

  {/* Right Arrow */}
  <button
    type="button"
    onClick={nextFeature}
    className="absolute right-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:right-8 sm:h-16 sm:w-16 lg:right-10 lg:h-20 lg:w-20"
    aria-label="Next feature"
  >
    <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
  </button>

  {/* Bottom Dots */}
  <div className="absolute bottom-6 right-6 z-30 flex gap-2 sm:bottom-8 sm:right-10 lg:bottom-10 lg:right-12">
    {features.map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setActiveFeature(index)}
        className={`h-2 rounded-full transition-all ${
          activeFeature === index
            ? "w-9 bg-white"
            : "w-2 bg-white/45 hover:bg-white/80"
        }`}
        aria-label={`Go to feature ${index + 1}`}
      />
    ))}
  </div>
</div>
  </div>
</section>
{/* Applications Section */}
<section className="relative bg-[#f5f5f2] px-3 py-16 sm:px-4 lg:px-6">
  <div className="w-full">
    <div className="mb-8 text-center sm:mb-10 lg:mb-12">
      

      <h2 className="text-3xl font-semibold text-black sm:text-4xl lg:text-5xl">
        Expanding Into Everyday and Industrial Scenarios
      </h2>
    </div>

    <div className="relative mx-auto w-[96vw] overflow-hidden rounded-2xl bg-[#f5f5f2] shadow-2xl">
      {/* Application Image */}
      <div
        className="h-[70vh] min-h-[420px] w-full bg-contain bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url(${applications[activeApplication].image})`,
        }}
        role="img"
        aria-label={applications[activeApplication].title}
      />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 z-20 w-full max-w-5xl px-6 pb-7 sm:px-10 sm:pb-10 lg:px-16 lg:pb-14">
        <h3 className="mb-4 font-semibold leading-tight tracking-tight text-white text-[clamp(2.4rem,4vw,5.8rem)]">
          {applications[activeApplication].title}
        </h3>

        <p className="max-w-4xl leading-relaxed text-white/85 text-[clamp(1rem,1.25vw,1.6rem)]">
          {applications[activeApplication].description}
        </p>
      </div>

      {/* Left Arrow */}
      <button
        type="button"
        onClick={prevApplication}
        className="absolute left-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:left-8 sm:h-16 sm:w-16 lg:left-10 lg:h-20 lg:w-20"
        aria-label="Previous application"
      >
        <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={nextApplication}
        className="absolute right-5 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/65 text-white shadow-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black sm:right-8 sm:h-16 sm:w-16 lg:right-10 lg:h-20 lg:w-20"
        aria-label="Next application"
      >
        <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
      </button>

      {/* Bottom Dots */}
      <div className="absolute bottom-6 right-6 z-30 flex gap-2 sm:bottom-8 sm:right-10 lg:bottom-10 lg:right-12">
        {applications.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveApplication(index)}
            className={`h-2 rounded-full transition-all ${
              activeApplication === index
                ? "w-9 bg-white"
                : "w-2 bg-white/45 hover:bg-white/80"
            }`}
            aria-label={`Go to application ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>

       {/* Closing Summary Section */}
<section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
  <div className="mx-auto flex w-full max-w-[1800px] flex-col items-center text-center">
    <h2 className="mb-7 max-w-[1500px] text-[clamp(2.2rem,4vw,5.5rem)] font-semibold leading-[1.08] tracking-tight text-white">
      A humanoid robotic platform built for practical real-world use.
    </h2>

    <p className="max-w-[1500px] text-[clamp(1rem,1.25vw,1.6rem)] leading-relaxed text-white/65">
      ET-H is designed to connect intelligent robotics with everyday service,
      mobility, logistics, energy support, and industrial automation scenarios.
      It brings a human-like form, adaptable task capability, and future-ready
      robotic assistance into real operating environments.
    </p>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
};

export default HumanoidRobotPage;