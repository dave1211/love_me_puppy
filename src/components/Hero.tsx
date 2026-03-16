import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import tannerHero from "@/assets/tanner-hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Nav */}
      <nav className="mx-auto flex max-w-4xl items-center justify-between pb-8 md:pb-16">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-2"
        >
          <Heart className="h-6 w-6 text-primary" strokeWidth={1.5} fill="hsl(var(--primary))" />
          <span className="font-display text-xl font-bold text-foreground">$CUDDLE</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-3"
        >
          <a href="#tokenomics" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Tokenomics
          </a>
          <a href="#how-to-buy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How to Buy
          </a>
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90 hover:shadow-layered-lg active:scale-[0.96]"
            style={{ transition: "all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            Buy Now
          </a>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground shadow-layered">
            Live on Solana
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] text-foreground md:text-7xl lg:text-8xl"
        >
          The softest landing
          <br />
          <span className="text-primary">in crypto.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground"
        >
          No rugs, just rugs to lay on. Join the $CUDDLE community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-8 py-3.5 text-base font-medium text-accent-foreground shadow-layered transition-all hover:scale-[1.02] hover:shadow-layered-lg active:scale-[0.96]"
            style={{ transition: "all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            Buy on Raydium
          </a>
          <a
            href="#tokenomics"
            className="rounded-full bg-secondary px-8 py-3.5 text-base font-medium text-secondary-foreground transition-all hover:scale-[1.02] hover:bg-secondary/80 active:scale-[0.96]"
            style={{ transition: "all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            View Tokenomics
          </a>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mt-12 max-w-sm"
        >
          <img
            src={tannerHero}
            alt="Tanner the Cuddle Coin puppy"
            className="animate-float w-full drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
