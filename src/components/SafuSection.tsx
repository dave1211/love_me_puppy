import { motion } from "framer-motion";

const safuItems = [
  { badge: "LOCKED 🔒", title: "Liquidity Locked", desc: "Liquidity pool is permanently locked, ensuring funds can never be drained. Verified on-chain for full transparency." },
  { badge: "RENOUNCED ✅", title: "Contract Renounced", desc: "Ownership has been fully renounced. No one can modify the contract, change taxes, or mint new tokens. Ever." },
  { badge: "SAFE 🛡️", title: "Anti-Rug Tokenomics", desc: "No mint function. No hidden fees. Max wallet limits in place to prevent whale manipulation. Pure community token." },
  { badge: "AUDITED 🔍", title: "Fully Transparent", desc: "Open-source contract available for anyone to audit. All transactions visible on-chain. Nothing to hide." },
];

const trustItems = ["LP Locked", "Ownership Renounced", "No Mint Function", "Open Source"];

const SafuSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-4"
        >
          <span className="text-primary/70 font-semibold text-sm uppercase tracking-wider">SAFU Verified</span>
          <h2 className="font-display text-3xl md:text-5xl text-primary mt-2 mb-3">Built Anti-Rug From Day One</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            $TANNER is designed so you can invest with confidence. No rugs, no tricks — just fluffy gains. 🐾
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {safuItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="gold-card"
            >
              <span className="text-xs font-bold text-primary/70 uppercase tracking-wider">{item.badge}</span>
              <h3 className="font-display text-xl text-foreground mt-2 mb-2">{item.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="gold-card max-w-2xl mx-auto mt-10 text-center"
        >
          <p className="text-primary/70 font-semibold text-sm mb-3">🛡️ Community Trust Score</p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustItems.map((item) => (
              <span key={item} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SafuSection;
