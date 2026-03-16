import { motion } from "framer-motion";
import tannerHero from "@/assets/tanner-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Floating paws */}
      {["🐾", "🐾", "🐾", "🐾", "🐾"].map((paw, i) => (
        <span
          key={i}
          className="paw-emoji absolute"
          style={{
            top: `${15 + i * 18}%`,
            left: `${5 + i * 22}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          {paw}
        </span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative mb-8"
      >
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary animate-pulse-glow">
          <img
            src={tannerHero}
            alt="Tanner the dog"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="font-display text-5xl md:text-7xl text-primary text-center"
      >
        Love Me Puppy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="font-display text-2xl md:text-3xl text-primary/80 mt-2"
      >
        $TANNER
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="text-muted-foreground text-center max-w-md mt-4 text-lg"
      >
        The fluffiest meme coin inspired by the world's most beautiful dog, Tanner! 🐾💖
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="mt-8"
      >
        <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" className="gold-button text-lg">
          Buy $TANNER Now! 🚀
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
