import { motion } from "framer-motion";

const cards = [
  {
    icon: "🔒",
    title: "Liquidity Locked",
    description: "LP is permanently locked. Funds cannot be drained. Verified on-chain.",
  },
  {
    icon: "✅",
    title: "Contract Renounced",
    description: "No one can modify the contract, change fees, or mint tokens. Ever.",
  },
  {
    icon: "🚫",
    title: "No Mint Function",
    description: "The supply is fixed at 1 billion $TANNER. No inflation. No surprises.",
  },
  {
    icon: "🔍",
    title: "Fully Transparent",
    description: "Open-source contract. All transactions on-chain. Nothing to hide.",
  },
];

const trustBadges = ["LP Locked", "Renounced", "No Mint", "Open Source", "Verified"];

export default function SafuSection() {
  return (
    <section id="safu" className="py-24" style={{ background: "#0c0c0c" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            Built Anti-Rug From Day One 🛡️
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Every safety mechanism is live, verified, and on-chain. Invest with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="gold-card flex gap-4"
              style={{ transition: "all 0.2s ease" }}
            >
              <span className="text-4xl flex-shrink-0 mt-0.5">{card.icon}</span>
              <div>
                <h3 className="font-display text-xl text-white mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="text-sm font-bold px-5 py-2 rounded-full"
              style={{
                background: "rgba(245,200,66,0.1)",
                border: "1px solid rgba(245,200,66,0.38)",
                color: "#F5C842",
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
