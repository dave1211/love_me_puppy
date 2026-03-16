import { motion } from "framer-motion";

const LiveNowSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="gold-card text-center max-w-2xl mx-auto py-12"
        >
          <p className="text-primary/70 font-semibold mb-2">🎉 It's Happening</p>
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">
            $TANNER Is Live Now!
          </h2>
          <p className="text-foreground/60 mb-8 max-w-md mx-auto">
            The fluffiest revolution has begun — grab your $TANNER tokens today! 🐾🚀
          </p>
          <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer" className="gold-button text-lg">
            Buy $TANNER Now! 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveNowSection;
