import { motion } from "framer-motion";

const steps = [
  { emoji: "👻", step: "Step 1", title: "Get a Phantom Wallet", desc: "Download Phantom Wallet from phantom.app. It's the easiest Solana wallet to get started." },
  { emoji: "💰", step: "Step 2", title: "Fund Your Wallet", desc: "Add SOL to your Phantom Wallet. You can buy SOL directly in-app or transfer from an exchange." },
  { emoji: "🚀", step: "Step 3", title: "Go to Pump.fun", desc: "Visit pump.fun and search for $TANNER. Connect your Phantom Wallet to start buying." },
  { emoji: "🐾", step: "Step 4", title: "Buy $TANNER!", desc: "Enter the amount of SOL you want to swap for $TANNER and confirm. Welcome to the fluffiest community!" },
];

const HowToBuySection = () => {
  return (
    <section id="how-to-buy" className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-3">
            How to Buy $TANNER
          </h2>
          <p className="text-muted-foreground text-lg">
            Get your paws on $TANNER in 4 easy steps! 🐶
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="gold-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-primary/60 text-sm font-bold uppercase tracking-wider">{item.step}</span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" className="gold-button">
            🚀 Buy on Pump.fun
          </a>
          <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="gold-button bg-secondary text-foreground" style={{ boxShadow: "var(--card-shadow)" }}>
            👻 Get Phantom Wallet
          </a>
          <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="gold-button bg-secondary text-foreground" style={{ boxShadow: "var(--card-shadow)" }}>
            📊 DexScreener
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToBuySection;
