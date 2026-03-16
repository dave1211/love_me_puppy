import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    status: "DONE ✅",
    statusColor: "text-green-400",
    title: "Launch & Foundation",
    items: ["Token launch on Pump.fun", "Website & socials live", "Liquidity locked & contract renounced", "Initial community building"],
  },
  {
    phase: "Phase 2",
    status: "IN PROGRESS 🔥",
    statusColor: "text-primary",
    title: "Community Takeover",
    items: ["1,000+ holders milestone", "Influencer partnerships & raids", "Meme contest campaigns", "CoinGecko & CMC listings"],
  },
  {
    phase: "Phase 3",
    status: "UPCOMING",
    statusColor: "text-muted-foreground",
    title: "Utility Expansion",
    items: ["$TANNER staking rewards", "NFT collection for holders", "Anti-rug scanner tool for community", "Merch store powered by $TANNER"],
  },
  {
    phase: "Phase 4",
    status: "UPCOMING",
    statusColor: "text-muted-foreground",
    title: "Global Domination",
    items: ["CEX listings (Tier 2+)", "Cross-chain bridge", "Tanner DAO governance", "Charity partnerships for dog shelters 🐕"],
  },
  {
    phase: "Phase 5",
    status: "UPCOMING",
    statusColor: "text-muted-foreground",
    title: "Legendary Status",
    items: ["Tier 1 CEX listing", "$TANNER ecosystem fund", "Real-world utility integrations", "The fluffiest token on every chain 🐩👑"],
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-3">Roadmap</h2>
          <p className="text-muted-foreground">From meme to utility — here's where $TANNER is headed 🚀🐾</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="gold-card"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-primary/60 text-sm font-bold uppercase tracking-wider">{phase.phase}</span>
                <span className={`text-xs font-bold uppercase tracking-wider ${phase.statusColor}`}>{phase.status}</span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{phase.title}</h3>
              <ul className="space-y-1.5">
                {phase.items.map((item) => (
                  <li key={item} className="text-foreground/50 text-sm flex items-start gap-2">
                    <span className="text-primary/40 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
