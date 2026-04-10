import { motion } from "framer-motion";
import tannerFluffy from "@/assets/tanner-fluffy.jpg";

const badges = ["Founded by Community", "No Team Tokens", "Built on Solana"];

export default function AboutSection() {
  return (
    <section id="about" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex justify-center"
          >
            <div
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden flex-shrink-0"
              style={{
                border: "2px solid rgba(245,200,66,0.3)",
                boxShadow: "0 0 40px rgba(245,200,66,0.12), 8px 8px 0 #F5C842",
                transform: "rotate(-2deg)",
              }}
            >
              <img
                src={tannerFluffy}
                alt="Tanner the fluffy puppy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
              Meet Tanner.{" "}
              <span style={{ color: "#F5C842" }}>The Dog Who Started It All.</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
              $TANNER was born from one simple truth: the crypto space needed something{" "}
              <em>real</em>. Something you could feel. Tanner is the world&apos;s most loveable
              dog — and this is his coin.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
              No VC dumps. No insider allocations. No hidden mints. Just a community of degens
              who want to ride to the moon alongside the fluffiest dog alive. 🐾
            </p>
            <div className="flex flex-wrap gap-3 mt-1">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="text-sm font-semibold px-4 py-2 rounded-full"
                  style={{
                    border: "1px solid rgba(245,200,66,0.38)",
                    color: "#F5C842",
                    background: "rgba(245,200,66,0.07)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
