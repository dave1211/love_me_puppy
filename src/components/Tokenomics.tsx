import { motion } from "framer-motion";
import { Flame, Heart, Globe } from "lucide-react";

const stats = [
  {
    icon: Flame,
    label: "Total Supply",
    value: "1,000,000,000",
    description: "One billion $CUDDLE tokens",
  },
  {
    icon: Heart,
    label: "Tax",
    value: "0%",
    description: "Zero buy/sell tax forever",
  },
  {
    icon: Globe,
    label: "LP Status",
    value: "Burned",
    description: "Liquidity permanently locked",
  },
];

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Tokenomics
          </h2>
          <p className="mt-3 text-muted-foreground">
            Simple. Transparent. Cuddly.
          </p>
        </motion.div>

        <div className="cuddle-container">
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <div className="cuddle-card flex flex-col items-center p-8 text-center">
                  <div className="mb-4 rounded-full bg-secondary p-3">
                    <stat.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="font-mono-data mt-1 text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
