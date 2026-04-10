import { motion } from "framer-motion";

const phases = [
  {
    number: 1,
    title: "LAUNCH",
    status: "COMPLETE",
    statusColor: "#22c55e",
    emoji: "✅",
    items: [
      "Token creation & launch on Pump.fun",
      "Website & socials live",
      "LP locked & renounced",
      "Anti-rug verified",
    ],
    active: false,
  },
  {
    number: 2,
    title: "BOND",
    status: "IN PROGRESS",
    statusColor: "#F5C842",
    emoji: "🔥",
    items: [
      "Pump.fun bonding curve completion",
      "Community raid campaigns",
      "Influencer partnerships",
      "First 500 holders",
    ],
    active: true,
  },
  {
    number: 3,
    title: "GROW",
    status: "UPCOMING",
    statusColor: "#666",
    emoji: "🌱",
    items: [
      "1,000+ holders",
      "CoinGecko & CMC listings",
      "Anti-Rug Scanner tool goes live",
      "RCC AI integration launches",
      "Merch store opens",
    ],
    active: false,
  },
  {
    number: 4,
    title: "UTILITY",
    status: "UPCOMING",
    statusColor: "#666",
    emoji: "🔧",
    items: [
      "Sniper assistant launch",
      "Wallet tracker live",
      "NFT collection for $TANNER holders",
      "$TANNER staking rewards",
    ],
    active: false,
  },
  {
    number: 5,
    title: "LEGENDARY",
    status: "UPCOMING",
    statusColor: "#666",
    emoji: "👑",
    items: [
      "Tier 1 CEX listing",
      "$TANNER DAO governance",
      "Cross-chain expansion",
      "Charity partnerships with dog shelters 🐕",
    ],
    active: false,
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">Roadmap 🗺️</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            From meme to utility — here&apos;s the full plan.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical connecting line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-px"
            style={{
              background: "linear-gradient(to bottom, #F5C842 0%, rgba(245,200,66,0.08) 100%)",
            }}
          />

          <div className="flex flex-col gap-0">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="relative pl-16 pb-8 last:pb-0"
              >
                {/* Phase number circle */}
                <div
                  className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center font-display text-lg flex-shrink-0 z-10"
                  style={{
                    background: phase.active ? "#F5C842" : "rgba(245,200,66,0.08)",
                    color: phase.active ? "#0a0a0a" : "#F5C842",
                    border: `2px solid ${phase.active ? "#F5C842" : "rgba(245,200,66,0.25)"}`,
                  }}
                >
                  {phase.number}
                </div>

                {/* Card */}
                <div
                  className="gold-card"
                  style={
                    phase.active
                      ? {
                          border: "1px solid rgba(245,200,66,0.55)",
                          boxShadow: "0 0 24px rgba(245,200,66,0.1)",
                        }
                      : { opacity: 0.78 }
                  }
                >
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-xl">{phase.emoji}</span>
                    <h3 className="font-display text-xl text-white">
                      Phase {phase.number} — {phase.title}
                    </h3>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5"
                      style={{
                        background: `${phase.statusColor}18`,
                        color: phase.statusColor,
                        border: `1px solid ${phase.statusColor}40`,
                      }}
                    >
                      {phase.active && (
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-live-pulse"
                          style={{ background: phase.statusColor }}
                        />
                      )}
                      {phase.status}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        <span className="text-xs mt-0.5" style={{ color: phase.statusColor }}>
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
