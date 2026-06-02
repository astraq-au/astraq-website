/**
 * ASTRAQ Store Page
 * Design: Dark industrial style — warm dark background, white text, gold accent
 * Content: Store enquiry form only
 */

import Footer from "@/components/Footer";

const ACCENT_COLOR = "#C9A46A";

export default function Store() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        background: "#3F3432",
      }}
    >
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "100vh",
          paddingTop: "clamp(8rem, 10vw, 12rem)",
          paddingBottom: "clamp(5rem, 8vw, 9rem)",
          background:
            "linear-gradient(180deg, #2E2726 0%, #3F3432 55%, #342B29 100%)",
        }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 42%, rgba(201,164,106,0.12) 0%, transparent 55%)",
          }}
        />

        {/* Subtle dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
          {/* Page title */}
          <div className="text-center mb-12">
            

            <h1
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(3rem, 5.2vw, 6.8rem)",
                lineHeight: 0.95,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "1.2rem",
              }}
            >
              CONTACT US
            </h1>

            <p
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(1.05rem, 1.15vw, 1.45rem)",
                lineHeight: 1.6,
                letterSpacing: "0.03em",
                color: "rgba(255,255,255,0.68)",
              }}
            >
              Tell us what you are interested in, and our team will get back to
              you shortly.
            </p>
          </div>

          {/* Form card */}
          <div className="mx-auto w-full max-w-[720px]">
            <div
              className="rounded-2xl"
              style={{
                background: "rgba(20, 18, 17, 0.72)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.32)",
                padding: "clamp(2rem, 3vw, 3.4rem)",
                backdropFilter: "blur(14px)",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.9rem, 2.2vw, 2.8rem)",
                  lineHeight: 1.1,
                  letterSpacing: "0.03em",
                  color: "#FFFFFF",
                  marginBottom: "0.65rem",
                }}
              >
                Send us a Message
              </h2>

              <p
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(1rem, 1vw, 1.15rem)",
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.58)",
                  marginBottom: "2rem",
                }}
              >
                Please leave your details below. We will contact you with product
                availability and purchase information.
              </p>

              <form className="space-y-7">
  {/* Name */}
  <div>
    <label
      htmlFor="name"
      className="block mb-3"
      style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700,
        fontSize: "1.15rem",
        color: "rgba(255,255,255,0.86)",
      }}
    >
      Name *
    </label>
    <input
      id="name"
      name="name"
      type="text"
      placeholder="Your full name"
      required
      className="w-full rounded-md outline-none transition-all"
      style={{
        height: "58px",
        padding: "0 1.1rem",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.22)",
        color: "#FFFFFF",
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: "1.18rem",
      }}
    />
  </div>

  {/* Email */}
  <div>
    <label
      htmlFor="email"
      className="block mb-3"
      style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700,
        fontSize: "1.15rem",
        color: "rgba(255,255,255,0.86)",
      }}
    >
      Email *
    </label>
    <input
      id="email"
      name="email"
      type="email"
      placeholder="your.email@company.com"
      required
      className="w-full rounded-md outline-none transition-all"
      style={{
        height: "58px",
        padding: "0 1.1rem",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.22)",
        color: "#FFFFFF",
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: "1.18rem",
      }}
    />
  </div>

  {/* Company */}
  <div>
    <label
      htmlFor="company"
      className="block mb-3"
      style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700,
        fontSize: "1.15rem",
        color: "rgba(255,255,255,0.86)",
      }}
    >
      Company
    </label>
    <input
      id="company"
      name="company"
      type="text"
      placeholder="Your company name"
      className="w-full rounded-md outline-none transition-all"
      style={{
        height: "58px",
        padding: "0 1.1rem",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.22)",
        color: "#FFFFFF",
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: "1.18rem",
      }}
    />
  </div>

  {/* Product Interest */}
  <div>
    <label
      htmlFor="product"
      className="block mb-3"
      style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700,
        fontSize: "1.15rem",
        color: "rgba(255,255,255,0.86)",
      }}
    >
      Product Interest *
    </label>
    <select
      id="product"
      name="product"
      required
      className="w-full rounded-md outline-none transition-all"
      defaultValue=""
      style={{
        height: "58px",
        padding: "0 1.1rem",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.22)",
        color: "#FFFFFF",
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: "1.18rem",
      }}
    >
      <option value="" disabled style={{ color: "#111" }}>
        Select a product
      </option>
      <option value="diesel-truck" style={{ color: "#111" }}>
        Diesel Truck
      </option>
      <option value="electric-truck" style={{ color: "#111" }}>
        Electric Truck
      </option>
      <option value="massage-robot" style={{ color: "#111" }}>
        ET-M Massage Robot
      </option>
      <option value="other" style={{ color: "#111" }}>
        Other
      </option>
    </select>
  </div>

  {/* Message */}
  <div>
    <label
      htmlFor="message"
      className="block mb-3"
      style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700,
        fontSize: "1.15rem",
        color: "rgba(255,255,255,0.86)",
      }}
    >
      Message *
    </label>
    <textarea
      id="message"
      name="message"
      placeholder="Tell us about your enquiry..."
      required
      rows={6}
      className="w-full rounded-md outline-none resize-none transition-all"
      style={{
        padding: "1.1rem",
        minHeight: "175px",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.22)",
        color: "#FFFFFF",
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: "1.18rem",
        lineHeight: 1.5,
      }}
    />
  </div>

  {/* Button */}
  <button
    type="submit"
    className="w-full rounded-md transition-all duration-300 hover:opacity-90 active:scale-[0.99]"
    style={{
      height: "62px",
      background: ACCENT_COLOR,
      color: "#1F1A18",
      fontFamily: "'Rajdhani', sans-serif",
      fontWeight: 800,
      fontSize: "1.1rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      border: "none",
      marginTop: "1.8rem",
    }}
  >
    Send Enquiry
  </button>
</form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
