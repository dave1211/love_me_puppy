import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Liquidity Pool",
    value: 80,
    color: "#F5C842",
    description: "Locked liquidity backing the token price. Community-owned and verified on-chain.",
  },
  {
    name: "Marketing & Community",
    value: 10,
    color: "#FF3EA5",
    description: "Growth campaigns, influencer partnerships, and community rewards.",
  },
  {
    name: "Burned at Launch",
    value: 10,
    color: "#444",
    description: "Permanently removed from circulation at token creation. Gone forever.",
  },
];

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">Tokenomics</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Total Supply: 1,000,000,000 $TANNER — Clean. Simple. Community-first.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ height: "340px" }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius="52%"
                  outerRadius="78%"
                  paddingAngle={4}
                  dataKey="value"
                  animationBegin={200}
                  animationDuration={1000}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#111",
                    border: "1px solid rgba(245,200,66,0.3)",
                    borderRadius: "10px",
                    color: "#fff",
                    fontSize: "13px",
                  }}
                  formatter={(value: number) => [`${value}%`, ""]}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Stat cards */}
          <div className="flex flex-col gap-4">
            {data.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="gold-card"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="font-display text-lg text-white">{item.name}</span>
                  <span className="ml-auto font-display text-2xl" style={{ color: item.color }}>
                    {item.value}%
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center pt-2"
            >
              <div className="text-sm font-bold" style={{ color: "#F5C842" }}>
                0% Team Allocation — This is fully a community token.
              </div>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                No taxes on buy or sell. Pure community memecoin.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
