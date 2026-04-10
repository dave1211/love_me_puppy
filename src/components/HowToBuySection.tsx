import { motion } from "framer-motion";
import { Wallet, DollarSign, Search, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: <Wallet size={22} />,
    title: "Get a Solana Wallet",
    description: "Install Phantom or Solflare. Takes 2 minutes.",
  },
  {
    number: 2,
    icon: <DollarSign size={22} />,
    title: "Buy SOL",
    description: "Purchase SOL from any exchange (Coinbase, Binance, Kraken).",
  },
  {
    number: 3,
    icon: <Search size={22} />,
    title: "Go to Pump.fun",
    description: "Visit pump.fun and search for $TANNER or paste the contract address.",
  },
  {
    number: 4,
    icon: <Rocket size={22} />,
    title: "Buy & HODL 🚀",
    description: "Swap your SOL for $TANNER. Welcome to the pack. 🐾",
  },
];

export default function HowToBuySection() {
  return (
    <section id="how-to-buy" className="py-24" style={{ background: "#0c0c0c" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            How to Buy $TANNER 🐾
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="gold-card flex flex-col items-center text-center gap-4"
              style={{ transition: "all 0.2s ease" }}
            >
              {/* Number badge */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display text-xl flex-shrink-0"
                style={{ background: "#F5C842", color: "#0a0a0a" }}
              >
                {step.number}
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)" }}>{step.icon}</div>
              <h3 className="font-display text-lg text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a href="#" className="gold-button text-base px-10 py-4 animate-pulse-glow">
            Buy $TANNER Now on Pump.fun
          </a>
        </motion.div>
      </div>
    </section>
  );
}
