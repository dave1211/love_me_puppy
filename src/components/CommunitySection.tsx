import { motion } from "framer-motion";

const links = [
  {
    icon: "🐦",
    platform: "Twitter / X",
    description: "Follow for updates, raids, and memes",
    cta: "Follow @TannerCoin",
    href: "#",
  },
  {
    icon: "💬",
    platform: "Telegram",
    description: "Join the main community chat",
    cta: "Join Telegram",
    href: "#",
  },
  {
    icon: "🔁",
    platform: "Pump.fun",
    description: "Trade $TANNER on Pump.fun",
    cta: "Trade Now",
    href: "#",
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0c0c0c" }}
    >
      {/* Animated gradient layers */}
      <div
        className="absolute inset-0 pointer-events-none animate-community-glow"
        style={{
          background:
            "radial-gradient(ellipse at 50% 110%, rgba(245,200,66,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(255,62,165,0.04) 0%, transparent 55%)",
          animation: "community-glow 13s ease-in-out infinite reverse",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Join the Pack 🐾
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            We are a community-owned, community-run token. No VCs. No insiders. Just us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {links.map((link, i) => (
            <motion.div
              key={link.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="gold-card flex flex-col items-center text-center gap-5"
              style={{ transition: "all 0.2s ease" }}
            >
              <span className="text-5xl">{link.icon}</span>
              <div>
                <h3 className="font-display text-xl text-white mb-1.5">{link.platform}</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.52)" }}>
                  {link.description}
                </p>
              </div>
              <a href={link.href} className="gold-button text-sm px-6 py-2.5 mt-auto">
                {link.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
