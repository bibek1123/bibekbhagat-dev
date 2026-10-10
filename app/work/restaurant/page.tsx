import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Restaurant Website Design — Portfolio Example | bibekbhagat.dev",
  description:
    "Portfolio showcase: an atmospheric contemporary restaurant website for an Indian fine-casual dining experience. Demonstrates menu presentation, reservations UX, and hospitality brand design. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/restaurant` },
};

const menuSections = [
  {
    id: "starters",
    label: "Starters",
    items: [
      { name: "Smoked Beetroot Tikki", desc: "Beetroot patty, chaat masala cream, tamarind glaze, crisp lotus root", price: "₹420", tag: "Chef's Pick" },
      { name: "Scallop Ghee Roast", desc: "Chettinad spice, burnt butter, curry leaf oil", price: "₹680", tag: null },
      { name: "Lamb Seekh Crostini", desc: "Pulled lamb seekh, mint labneh, pomegranate, micro herbs", price: "₹560", tag: null },
      { name: "Dal Makhani Croquette", desc: "Slow-cooked dal in a crisp shell, truffle butter dip", price: "₹380", tag: "Vegetarian" },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      { name: "Short Rib Rogan Josh", desc: "72-hour braised rib, Kashmiri spice reduction, saffron pulao", price: "₹1,490", tag: "Signature" },
      { name: "Malabar Coast Prawn Curry", desc: "Coconut-raw mango curry, steamed appam, curry leaf oil", price: "₹1,280", tag: null },
      { name: "Truffle Paneer Butter Masala", desc: "Silken paneer, truffle-infused tomato butter, house naan", price: "₹980", tag: "Vegetarian" },
      { name: "Duck Breast Chettinad", desc: "Pan-seared duck, Chettinad spice crust, black rice risotto", price: "₹1,680", tag: null },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Cardamom Crème Brûlée", desc: "Classic brûlée with green cardamom, rose petal sugar", price: "₹390", tag: null },
      { name: "Gulab Jamun Sundae", desc: "Warm gulab jamun, saffron ice cream, pista crumble", price: "₹420", tag: "Bestseller" },
      { name: "Chocolate Halwa Fondant", desc: "Dark chocolate fondant with halwa centre, almond brittle", price: "₹460", tag: null },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Kashmiri Kahwa Collins", desc: "Kashmiri kahwa, London dry gin, lemon, honey", price: "₹480", tag: null },
      { name: "Kokum Tequila Sour", desc: "Kokum shrub, blanco tequila, lime, egg white", price: "₹520", tag: null },
      { name: "Chaach Spritz", desc: "Spiced buttermilk, prosecco, cucumber, black salt", price: "₹340", tag: "Non-Alcoholic" },
    ],
  },
];

const galleryMoods = [
  { label: "The Main Room", desc: "Warm amber light, raw stone walls, handcrafted tables for 60", accent: "#E8A840",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=75&auto=format&fit=crop",
    imgAlt: "Warm restaurant dining room with amber lighting" },
  { label: "The Kitchen Window", desc: "Open kitchen, live fire, theatre in every plate", accent: "#D4A040",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=75&auto=format&fit=crop",
    imgAlt: "Professional restaurant open kitchen with live fire cooking" },
  { label: "The Terrace", desc: "Al fresco dining under the stars — open Thursday to Sunday", accent: "#9CB870",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=75&auto=format&fit=crop",
    imgAlt: "Beautiful restaurant terrace dining area in the evening" },
];

const openingHours = [
  { days: "Tuesday – Thursday", time: "12:00 PM – 3:00 PM", time2: "7:00 PM – 11:30 PM" },
  { days: "Friday – Saturday", time: "12:00 PM – 3:30 PM", time2: "7:00 PM – 12:30 AM" },
  { days: "Sunday", time: "12:00 PM – 4:00 PM", time2: "Closed evenings" },
  { days: "Monday", time: "Closed", time2: "" },
];

export default function RestaurantPage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#0E0B06" }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(14,11,6,0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(232,168,64,0.1)",
          padding: "0 2rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>The Ember Room</div>
          <div style={{ fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#E8A840", marginTop: "-2px" }}>Mumbai · Contemporary Indian</div>
        </div>

        <div className="hidden md:flex" style={{ gap: "2.5rem" }}>
          {["Menu", "Gallery", "Story", "Reserve"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
              {item}
            </a>
          ))}
        </div>

        <a
          href="#reserve"
          style={{
            padding: "0.5625rem 1.375rem",
            background: "#E8A840",
            color: "#0E0B06",
            fontWeight: 700,
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "0.8125rem",
          }}
        >
          Reserve a Table
        </a>
      </nav>

      {/* ── HERO ── Immersive atmospheric */}
      <section
        style={{
          paddingTop: "68px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Real restaurant atmosphere photography */}
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80&auto=format&fit=crop"
          alt="Contemporary Indian restaurant interior — warm amber candlelight and dramatic dining atmosphere"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Dark overlay for atmosphere and legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,11,6,0.55) 0%, rgba(14,11,6,0.35) 40%, rgba(14,11,6,0.75) 100%)",
          }}
        />
        {/* Ember glow on top of photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(ellipse 60% 40% at 70% 60%, rgba(232,168,64,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Central hero content */}
        <div
          style={{
            position: "relative",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "6rem 2rem 8rem",
            width: "100%",
          }}
        >
          <div style={{ maxWidth: "720px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              <div style={{ width: "40px", height: "1px", background: "#E8A840" }} />
              <span style={{ fontSize: "0.6875rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#E8A840", fontWeight: 600 }}>
                Contemporary Indian · Mumbai
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                color: "white",
                letterSpacing: "-0.04em",
                marginBottom: "2rem",
              }}
            >
              Where Fire
              <br />
              <span style={{ color: "#E8A840", fontStyle: "italic", fontWeight: 700 }}>meets</span>
              <br />
              Spice.
            </h1>

            <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", maxWidth: "480px", marginBottom: "3rem" }}>
              Modern Indian cooking with live-fire techniques — dishes that honour tradition without being bound by it.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#reserve"
                style={{
                  padding: "1rem 2.5rem",
                  background: "#E8A840",
                  color: "#0E0B06",
                  fontWeight: 700,
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "0.9375rem",
                }}
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                style={{
                  padding: "1rem 2.5rem",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 500,
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "0.9375rem",
                }}
              >
                View Menu
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, rgba(232,168,64,0.5))" }} />
          <span style={{ fontSize: "0.5625rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Scroll</span>
        </div>
      </section>

      {/* ── SIGNATURE DISH FEATURE ── */}
      <section style={{ padding: "6rem 0", background: "#0E0B06" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            {/* Dish visual */}
            <div
              style={{
                height: "420px",
                background: "linear-gradient(135deg, #2C1810 0%, #3A2010 50%, #1E0E06 100%)",
                borderRadius: "8px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Plate illustration */}
              <div style={{ textAlign: "center", position: "relative" }}>
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #1A1008 0%, #0E0B06 100%)",
                    border: "2px solid rgba(232,168,64,0.2)",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(232,168,64,0.03)",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🍖</div>
                    <div style={{ fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(232,168,64,0.6)" }}>Signature</div>
                  </div>
                </div>
                {/* Garnish dots */}
                {[
                  { top: "30px", left: "50%", size: "8px", color: "rgba(150,200,80,0.6)" },
                  { top: "60%", left: "15px", size: "6px", color: "rgba(232,168,64,0.5)" },
                  { top: "40%", right: "20px", size: "5px", color: "rgba(200,100,40,0.4)" },
                ].map((dot, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: dot.top,
                      left: dot.left,
                      right: (dot as { right?: string }).right,
                      width: dot.size,
                      height: dot.size,
                      borderRadius: "50%",
                      background: dot.color,
                    }}
                  />
                ))}
              </div>
              {/* Tag */}
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                <div style={{ fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8A840" }}>Signature Dish</div>
                <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "white" }}>Short Rib Rogan Josh</div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <div style={{ width: "32px", height: "1px", background: "#E8A840", marginBottom: "2rem" }} />
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "white", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                72 hours of patience in every plate.
              </h2>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginBottom: "2rem" }}>
                Our short rib is braised for three days in a Kashmiri reduction before it reaches your table. The result is meat that falls apart, a sauce with depth, and a plate that earns its price.
              </p>
              <a href="#menu" style={{ fontSize: "0.875rem", fontWeight: 700, color: "#E8A840", textDecoration: "none" }}>
                See full menu →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" style={{ padding: "5rem 0", background: "#100D07" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
              <div style={{ width: "32px", height: "1px", background: "#E8A840" }} />
              <span style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8A840", fontWeight: 700 }}>À La Carte</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "white", letterSpacing: "-0.03em" }}>The Menu</h2>
          </div>

          {/* Menu tab selector */}
          <div style={{ display: "flex", gap: "0", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "3rem", overflowX: "auto" }}>
            {menuSections.map((section, i) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                style={{
                  padding: "0.875rem 1.5rem",
                  fontSize: "0.8125rem",
                  fontWeight: i === 0 ? 700 : 500,
                  color: i === 0 ? "#E8A840" : "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  borderBottom: i === 0 ? "2px solid #E8A840" : "2px solid transparent",
                  whiteSpace: "nowrap",
                  marginBottom: "-1px",
                }}
              >
                {section.label}
              </a>
            ))}
          </div>

          {menuSections.map((section) => (
            <div key={section.id} id={section.id} style={{ marginBottom: "3rem" }}>
              <h3 style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8A840", fontWeight: 700, marginBottom: "1.5rem" }}>{section.label}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", overflow: "hidden" }}>
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      background: "#100D07",
                      padding: "1.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "2rem",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.375rem" }}>
                        <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white" }}>{item.name}</h4>
                        {item.tag && (
                          <span style={{
                            fontSize: "0.5625rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            padding: "0.125rem 0.5rem",
                            borderRadius: "3px",
                            background: item.tag === "Vegetarian" ? "rgba(100,180,80,0.15)" : "rgba(232,168,64,0.15)",
                            color: item.tag === "Vegetarian" ? "#80C860" : "#E8A840",
                          }}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                    <div style={{ fontWeight: 800, color: "#E8A840", fontSize: "0.9375rem", whiteSpace: "nowrap" }}>{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
            All prices are inclusive of taxes. Prices are indicative for portfolio demonstration purposes.
          </p>
        </div>
      </section>

      {/* ── GALLERY / SPACES ── */}
      <section id="gallery" style={{ padding: "5rem 0", background: "#0E0B06" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
              <div style={{ width: "32px", height: "1px", background: "#E8A840" }} />
              <span style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8A840", fontWeight: 700 }}>Our Spaces</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "white", letterSpacing: "-0.03em" }}>The Atmosphere</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", overflow: "hidden" }}>
            {galleryMoods.map((space) => (
              <div
                key={space.label}
                style={{
                  height: "340px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={space.img}
                  alt={space.imgAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,11,6,0.88) 0%, rgba(14,11,6,0.3) 60%, transparent 100%)" }} />
                <div style={{ position: "relative" }}>
                  <div style={{ fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase", color: space.accent, fontWeight: 700, marginBottom: "0.5rem" }}>Space</div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "white", marginBottom: "0.5rem" }}>{space.label}</h3>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>{space.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="story" style={{ padding: "5rem 0 6rem", background: "#100D07" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <div style={{ width: "40px", height: "1px", background: "#E8A840", margin: "0 auto 2rem" }} />
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "white", letterSpacing: "-0.04em", marginBottom: "2rem" }}>
            The idea was simple.
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>
            India has extraordinary cooking — the diversity of spice, the depth of technique, the stories behind every regional dish. What it rarely gets is the same visual language as the world&apos;s great cuisines.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "rgba(255,255,255,0.5)" }}>
            The Ember Room is our answer to that. Contemporary plates, live fire, and a dining room designed to make the meal feel like an occasion.
          </p>
        </div>
      </section>

      {/* ── HOURS + RESERVE ── */}
      <section id="reserve" style={{ padding: "5rem 0", background: "#0E0B06" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
            {/* Hours */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ width: "24px", height: "1px", background: "#E8A840" }} />
                <span style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8A840", fontWeight: 700 }}>Opening Hours</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", overflow: "hidden" }}>
                {openingHours.map((row) => (
                  <div key={row.days} style={{ background: "#100D07", padding: "1.25rem 1.5rem" }}>
                    <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "white", marginBottom: "0.375rem" }}>{row.days}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{row.time}{row.time2 ? ` · ${row.time2}` : ""}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "1.5rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)" }}>
                📍 Mumbai, Maharashtra
              </div>
            </div>

            {/* Reservation form */}
            <div style={{ background: "#100D07", border: "1px solid rgba(232,168,64,0.15)", borderRadius: "12px", padding: "2.5rem" }}>
              <h2 style={{ fontSize: "1.375rem", fontWeight: 800, color: "white", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>Reserve a Table</h2>
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", marginBottom: "2rem" }}>For same-day enquiries, please reach out directly.</p>

              {/* Form demo */}
              {[
                { label: "Full Name", placeholder: "Your name", type: "text" },
                { label: "Contact Number", placeholder: "For confirmation", type: "tel" },
                { label: "Party Size", placeholder: "2 guests", type: "number" },
                { label: "Preferred Date", placeholder: "", type: "date" },
              ].map((field) => (
                <div key={field.label} style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.375rem" }}>{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "6px",
                      color: "white",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}

              <div style={{ background: "rgba(232,168,64,0.08)", border: "1px solid rgba(232,168,64,0.15)", borderRadius: "6px", padding: "0.875rem", marginBottom: "1.25rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
                <strong style={{ color: "rgba(255,255,255,0.8)" }}>Portfolio demonstration.</strong> This is a fictional restaurant website.{" "}
                <Link href="/#pricing" style={{ color: "#E8A840", fontWeight: 700 }}>Get this kind of website →</Link>
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "0.9375rem",
                  background: "#E8A840",
                  color: "#0E0B06",
                  fontWeight: 700,
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.9375rem",
                }}
              >
                Request Reservation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#080602", padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div>
          <div style={{ fontWeight: 800, color: "white", letterSpacing: "-0.01em" }}>The Ember Room</div>
          <div style={{ fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8A840", marginTop: "2px" }}>Contemporary Indian · Mumbai</div>
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
          Website by{" "}
          <Link href="/" style={{ color: "#E8A840", textDecoration: "none" }}>bibekbhagat.dev</Link>
        </div>
      </footer>
    </div>
  );
}
