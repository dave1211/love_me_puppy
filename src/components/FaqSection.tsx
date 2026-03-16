import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is $TANNER?", a: "$TANNER is a community-driven meme coin on the Solana blockchain, inspired by Tanner — a fluffy brown poodle from Sydney, Australia. It celebrates the joy dogs bring to our lives." },
  { q: "How do I buy $TANNER?", a: "Get a Phantom Wallet, fund it with SOL, then visit Pump.fun to swap SOL for $TANNER. It's that simple!" },
  { q: "What are the tokenomics?", a: "Total supply is 1 billion $TANNER. 50% goes to the liquidity pool, 20% to marketing & community, 10% to the team, and 20% is burned. Zero tax on all transactions." },
  { q: "Is $TANNER safe? Can it be rugged?", a: "Liquidity is permanently locked, the contract is renounced, there's no mint function, and the code is open source. $TANNER is built anti-rug from day one." },
  { q: "Who is behind $TANNER?", a: "$TANNER is a community-driven project inspired by Tanner the poodle and his owner Wayne from Sydney, Australia." },
  { q: "Will $TANNER be listed on exchanges?", a: "CEX listings are planned in the roadmap. First CoinGecko and CMC, then Tier 2 and eventually Tier 1 exchanges." },
  { q: "How can I join the $TANNER community?", a: "Follow us on Twitter @welovetanner25, Instagram @love_me_puppy, and join our Telegram group!" },
  { q: "Does $TANNER have any utility?", a: "Utility is being developed including staking rewards, an NFT collection, an anti-rug scanner tool, and a merch store." },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

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
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-3">FAQ</h2>
          <p className="text-muted-foreground">Got questions? We've got answers. 🐩</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03, ease: [0.23, 1, 0.32, 1] }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="gold-card w-full text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <h3 className="font-display text-base text-foreground">{faq.q}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-primary/50 flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  strokeWidth={1.5}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-2 text-foreground/50 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
