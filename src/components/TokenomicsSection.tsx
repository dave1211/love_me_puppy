import { motion } from "framer-motion";

const tokenomics = [
  { pct: "50%", label: "Liquidity Pool", color: "bg-primary" },
  { pct: "20%", label: "Marketing & Community", color: "bg-primary/70" },
  { pct: "10%", label: "Team", color: "bg-primary/50" },
  { pct: "20%", label: "Burned", color: "bg-primary/30" },
];

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-3">Tokenomics</h2>
          <p className="text-muted-foreground">Total Supply: 1,000,000,000 $TANNER</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
          {tokenomics.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="gold-card text-center"
            >
              <p className="font-display text-3xl text-primary mb-1">{item.pct}</p>
              <p className="text-foreground/60 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm"
        >
          No taxes, pure fun! Inspired by Tanner's fluffy coat – soft and rewarding. 🐩✨
        </motion.p>
      </div>
    </section>
  );
};

export default TokenomicsSection;
