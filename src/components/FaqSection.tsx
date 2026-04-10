import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is $TANNER?",
    a: "A community meme coin on Solana inspired by Tanner the dog. Anti-rug, LP locked, and contract renounced from day one.",
  },
  {
    q: "Is it safe?",
    a: "LP is locked, contract is renounced, and no mint function exists. All safety mechanisms are verified on-chain. You can verify everything yourself.",
  },
  {
    q: "How do I buy?",
    a: "Get Phantom wallet, buy SOL, go to pump.fun, search $TANNER, and swap. Takes about 5 minutes from start to finish.",
  },
  {
    q: "What is the total supply?",
    a: "1,000,000,000 $TANNER. Fixed forever. No inflation, no surprises.",
  },
  {
    q: "Are there any taxes?",
    a: "Zero. No buy tax, no sell tax. Pure community token with no fees.",
  },
  {
    q: "What is pump.fun bonding?",
    a: "When a token reaches 100% of its bonding curve on pump.fun, liquidity migrates to Raydium automatically. That is our key milestone — once bonded, $TANNER is on Raydium for life.",
  },
  {
    q: "What are the tools?",
    a: "Anti-rug scanner, AI coin analyst (RCC), sniper assistant, and wallet tracker — all free for $TANNER holders. Built to give the community an edge.",
  },
  {
    q: "When merch?",
    a: "Merch store launches post-bond. Keep buying to make it happen. 🚀",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">FAQ</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl overflow-hidden border-0"
                style={{
                  border: "1px solid rgba(245,200,66,0.14)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <AccordionTrigger
                  className="px-5 py-4 text-white text-sm font-semibold text-left hover:no-underline hover:text-white [&[data-state=open]]:text-yellow-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="px-5 pb-4 text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.58)" }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
