import { motion } from "framer-motion";
import { Wallet, ArrowRightLeft, Heart } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    step: "01",
    title: "Get a Wallet",
    description: "Download Phantom or Solflare and set up your Solana wallet.",
  },
  {
    icon: ArrowRightLeft,
    step: "02",
    title: "Add SOL",
    description: "Buy SOL on an exchange and transfer it to your wallet.",
  },
  {
    icon: Heart,
    step: "03",
    title: "Swap for $CUDDLE",
    description: "Go to Raydium, paste the contract address, and swap SOL for $CUDDLE.",
  },
];

const HowToBuy = () => {
  return (
    <section id="how-to-buy" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            How to Buy
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three steps to join the cuddle pile.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="cuddle-card text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-secondary p-3">
                <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="font-mono-data mb-2 text-xs text-muted-foreground">{item.step}</p>
              <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
