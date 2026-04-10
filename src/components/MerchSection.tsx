import { motion } from "framer-motion";

const products = [
  {
    emoji: "👕",
    name: "Classic $TANNER Hoodie",
    price: "0.5 SOL / $65 USD",
    tagline: "Premium heavyweight. Gold print. 🐾",
  },
  {
    emoji: "👔",
    name: "$TANNER Tee",
    price: "0.2 SOL / $28 USD",
    tagline: "Soft cotton. Classic logo. Wear the brand.",
  },
  {
    emoji: "🐶",
    name: "Tanner Plushie",
    price: "0.3 SOL / $38 USD",
    tagline: "A huggable Tanner for your desk. Limited edition.",
  },
  {
    emoji: "🧢",
    name: "$TANNER Cap",
    price: "0.15 SOL / $20 USD",
    tagline: "Embroidered logo. Dad cap. You know the vibe.",
  },
];

export default function MerchSection() {
  return (
    <section id="merch" className="py-24" style={{ background: "#0c0c0c" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            $TANNER Shop 🛍️
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Rep the Pack. Official $TANNER merch. Every purchase supports the community treasury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="gold-card flex flex-col items-center text-center gap-4 relative"
              style={{ transition: "all 0.2s ease" }}
            >
              {/* Post-Bond badge */}
              <span
                className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(245,200,66,0.1)",
                  color: "#F5C842",
                  border: "1px solid rgba(245,200,66,0.28)",
                }}
              >
                Post-Bond
              </span>

              {/* Product image placeholder */}
              <div
                className="w-28 h-28 rounded-2xl flex items-center justify-center text-5xl"
                style={{
                  background: "rgba(245,200,66,0.06)",
                  border: "1px solid rgba(245,200,66,0.14)",
                }}
              >
                {product.emoji}
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-base text-white">{product.name}</h3>
                <div className="font-bold text-sm" style={{ color: "#F5C842" }}>
                  {product.price}
                </div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {product.tagline}
                </p>
              </div>

              <button
                disabled
                className="text-sm font-medium px-5 py-2 rounded-full w-full cursor-not-allowed"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.35)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Buy Now (Coming Soon)
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          Merch store goes live when $TANNER bonds on pump.fun. Be there. 🚀
        </motion.div>
      </div>
    </section>
  );
}
