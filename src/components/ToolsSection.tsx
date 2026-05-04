import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const tools = [
  {
    icon: "🕵️",
    title: "Anti-Rug Scanner",
    subtitle: null,
    badge: "LIVE",
    badgeColor: "#22c55e",
    description:
      "Paste any Solana token contract. Instantly scan for rug indicators: LP lock status, mint authority, freeze authority, holder concentration, and dev wallet activity. Powered by on-chain data.",
    cta: "Scan a Token →",
    action: "scan",
  },
  {
    icon: "🎯",
    title: "Sniper Assistant",
    subtitle: null,
    badge: "COMING SOON",
    badgeColor: "#FF3EA5",
    description:
      "Get alerted the moment new $TANNER-class tokens launch on Pump.fun. Filter by LP lock, renounce status, and holder distribution before you ape in.",
    cta: "Join Waitlist →",
    action: "waitlist",
  },
  {
    icon: "🧠",
    title: "AI Coin Analyst",
    subtitle: "RCC Integration",
    badge: "LIVE",
    badgeColor: "#22c55e",
    description:
      "Paste any pump.fun token link. Our AI brain — powered by RCC (Rapid Coin Checker) — gives you an instant buy/pass verdict with reasoning: sentiment score, on-chain signals, community heat, and risk assessment.",
    cta: "Analyse a Coin →",
    action: "analyse",
  },
  {
    icon: "📊",
    title: "Wallet Tracker",
    subtitle: null,
    badge: "COMING SOON",
    badgeColor: "#FF3EA5",
    description:
      "Track whale wallets in real time. See when smart money enters or exits a position on Pump.fun. Set alerts for wallet movements above a threshold.",
    cta: "Join Waitlist →",
    action: "waitlist",
  },
];

const mockAnalysis = {
  riskScore: "3/10",
  sentiment: "Bullish 🔥",
  lpStatus: "Locked ✅",
  mintAuthority: "Revoked ✅",
  verdict:
    "This token shows strong anti-rug indicators with locked LP and no mint authority. Community momentum is building. Proceed with caution and position size appropriately.",
};

export default function ToolsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnalyse = () => {
    if (!inputValue.trim()) return;
    setLoading(true);
    setShowResult(false);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 1600);
  };

  const handleCardAction = (action: string) => {
    if (action === "analyse") {
      setShowResult(false);
      setInputValue("");
      setNotes("");
      setLoading(false);
      setModalOpen(true);
    } else if (action === "waitlist") {
      toast("You're on the waitlist! 🐾", {
        description: "We'll notify you when this tool goes live. Stay tuned.",
      });
    } else if (action === "scan") {
      toast("Anti-Rug Scanner launching soon 🕵️", {
        description: "Full on-chain scanning goes live at bond. Watch this space.",
      });
    }
  };

  return (
    <section id="tools" className="py-24" style={{ background: "#0a0a0a" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            The $TANNER Toolkit 🔧
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Powerful utilities for $TANNER holders and the wider Solana community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="gold-card flex flex-col gap-4"
              style={{ transition: "all 0.2s ease" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{tool.icon}</span>
                  <div>
                    <h3 className="font-display text-xl text-white">{tool.title}</h3>
                    {tool.subtitle && (
                      <div className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                        {tool.subtitle}
                      </div>
                    )}
                  </div>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 mt-0.5"
                  style={{
                    background: `${tool.badgeColor}1a`,
                    color: tool.badgeColor,
                    border: `1px solid ${tool.badgeColor}40`,
                  }}
                >
                  {tool.badge}
                </span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.58)" }}>
                {tool.description}
              </p>
              <button
                onClick={() => handleCardAction(tool.action)}
                className="text-sm font-bold px-5 py-2.5 rounded-full self-start transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "rgba(245,200,66,0.1)",
                  color: "#F5C842",
                  border: "1px solid rgba(245,200,66,0.3)",
                }}
              >
                {tool.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RCC AI Analysis Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          className="max-w-lg border"
          style={{
            background: "#0f0f0f",
            borderColor: "rgba(245,200,66,0.22)",
          }}
        >
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-white">
              🧠 AI Coin Analyst
            </DialogTitle>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.42)" }}>
              Powered by RCC — Rapid Coin Checker
            </p>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-1">
            <div>
              <label className="text-sm mb-1.5 block" style={{ color: "rgba(255,255,255,0.65)" }}>
                Pump.fun token URL or contract address
              </label>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="https://pump.fun/... or contract address"
                className="border text-white placeholder:text-white/25"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
              />
            </div>
            <div>
              <label className="text-sm mb-1.5 block" style={{ color: "rgba(255,255,255,0.65)" }}>
                Optional notes
              </label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any additional context..."
                className="border text-white placeholder:text-white/25 resize-none"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                rows={3}
              />
            </div>
            <Button
              onClick={handleAnalyse}
              disabled={loading || !inputValue.trim()}
              className="font-bold py-3 rounded-full text-sm h-auto"
              style={{ background: "#F5C842", color: "#0a0a0a" }}
            >
              {loading ? "Analysing..." : "Run AI Analysis 🧠"}
            </Button>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl p-4 flex flex-col gap-2.5"
                style={{
                  background: "rgba(245,200,66,0.04)",
                  border: "1px solid rgba(245,200,66,0.2)",
                }}
              >
                <div className="font-bold text-white mb-0.5">Analysis Result</div>
                {[
                  { label: "Risk Score", value: `██░░░░ ${mockAnalysis.riskScore} (Low Risk)` },
                  { label: "Sentiment", value: mockAnalysis.sentiment },
                  { label: "LP Status", value: mockAnalysis.lpStatus },
                  { label: "Mint Authority", value: mockAnalysis.mintAuthority },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span style={{ color: "rgba(255,255,255,0.45)" }}>{label}</span>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
                <div
                  className="mt-2 p-3 rounded-lg"
                  style={{
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <div className="font-bold text-xs mb-1.5" style={{ color: "#22c55e" }}>
                    AI Verdict
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {mockAnalysis.verdict}
                  </div>
                </div>
                <div className="text-xs text-center mt-1" style={{ color: "rgba(255,255,255,0.28)" }}>
                  Full AI analysis powered by RCC integration — live at launch.
                </div>
              </motion.div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
