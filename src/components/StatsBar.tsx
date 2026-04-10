import { motion } from "framer-motion";

const stats = [
  { icon: "💰", label: "Total Supply", value: "1,000,000,000" },
  { icon: "✅", label: "Buy / Sell Tax", value: "0%" },
  { icon: "🔒", label: "Liquidity", value: "LP Locked" },
  { icon: "📋", label: "Contract", value: "Renounced" },
];

export default function StatsBar() {
  return (
    <div
      className="relative overflow-hidden py-6"
      style={{
        background: "rgba(245,200,66,0.05)",
        borderTop: "1px solid rgba(245,200,66,0.12)",
        borderBottom: "1px solid rgba(245,200,66,0.12)",
      }}
    >
      {/* Shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none animate-shimmer" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center justify-center gap-1 py-1 px-4 text-center"
            >
              <span className="text-2xl mb-1">{stat.icon}</span>
              <div className="font-display text-xl md:text-2xl" style={{ color: "#F5C842" }}>
                {stat.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
