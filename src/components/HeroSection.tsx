import { motion } from "framer-motion";
import tannerHero from "@/assets/tanner-hero.jpg";

const tickerItems = [
  "🔥 Pump.fun Live",
  "|",
  "1B Supply",
  "|",
  "🔒 LP Locked",
  "|",
  "✅ Contract Renounced",
  "|",
  "🛡️ Anti-Rug Verified",
  "|",
  "CA: TBA — Launching on Pump.fun Soon",
  "|",
];

const floatingPaws = [
  { top: "12%", left: "4%", delay: "0s", size: "2rem" },
  { top: "22%", left: "91%", delay: "0.7s", size: "1.5rem" },
  { top: "55%", left: "2%", delay: "1.3s", size: "1.8rem" },
  { top: "72%", left: "89%", delay: "0.4s", size: "2.2rem" },
  { top: "80%", left: "14%", delay: "1.9s", size: "1.2rem" },
  { top: "32%", left: "85%", delay: "2.3s", size: "1.6rem" },
  { top: "62%", left: "93%", delay: "0.9s", size: "1.3rem" },
  { top: "18%", left: "42%", delay: "3.2s", size: "1rem" },
  { top: "88%", left: "55%", delay: "1.6s", size: "1.4rem" },
  { top: "45%", left: "96%", delay: "2.7s", size: "1rem" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Floating paw emojis */}
      {floatingPaws.map((paw, i) => (
        <span
          key={i}
          className="paw-emoji"
          style={{
            top: paw.top,
            left: paw.left,
            fontSize: paw.size,
            animationDelay: paw.delay,
          }}
        >
          🐾
        </span>
      ))}

      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(245,200,66,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 flex flex-col items-center text-center gap-7 pt-28 pb-20">
        {/* Tanner hero image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.75, type: "spring", stiffness: 120 }}
        >
          <div
            className="w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden animate-pulse-glow"
            style={{
              border: "3px solid #F5C842",
              padding: "3px",
              boxShadow: "0 0 0 6px rgba(245,200,66,0.08)",
            }}
          >
            <img
              src={tannerHero}
              alt="Tanner the dog"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-none"
            style={{
              color: "#F5C842",
              textShadow: "0 0 60px rgba(245,200,66,0.25)",
            }}
          >
            Love Me Puppy
          </h1>
          <div
            className="font-display text-3xl md:text-4xl mt-3"
            style={{ color: "#FF3EA5" }}
          >
            $TANNER
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-xl max-w-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          The Anti-Rug Memecoin With a Heart. Built on Solana. Bonding on Pump.fun.{" "}
          <span>🐾💖</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#" className="gold-button text-base px-9 py-4 animate-pulse-glow font-bold">
            Buy $TANNER on Pump.fun 🚀
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full px-9 py-4 text-base font-bold transition-all hover:scale-105"
            style={{
              border: "2px solid #F5C842",
              color: "#F5C842",
              background: "transparent",
            }}
          >
            View on Solscan 🔍
          </a>
        </motion.div>

        {/* Live ticker — flat array × 2 so translateX(-50%) is exactly one copy width */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.72, duration: 0.5 }}
          className="w-full max-w-3xl overflow-hidden rounded-xl"
          style={{
            border: "1px solid rgba(245,200,66,0.18)",
            background: "rgba(245,200,66,0.04)",
          }}
        >
          <div className="py-2.5 overflow-hidden">
            <div
              className="animate-marquee text-sm"
              style={{ color: "rgba(255,255,255,0.72)", gap: "2.5rem" }}
            >
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span
                  key={i}
                  style={item === "|" ? { color: "rgba(245,200,66,0.35)" } : undefined}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(245,200,66,0.45)"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
}
