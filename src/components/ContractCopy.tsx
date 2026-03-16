import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const CONTRACT_ADDRESS = "SOLANA_CONTRACT_ADDRESS_HERE";

const ContractCopy = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 800);
  };

  return (
    <section className="px-4 pb-12">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <button
            onClick={handleCopy}
            className={`cuddle-card flex w-full cursor-pointer items-center justify-between gap-4 transition-colors duration-200 ${
              copied ? "bg-green-50" : ""
            }`}
            style={{ transition: "all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            <div className="min-w-0 text-left">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Contract Address
              </p>
              <p className="font-mono-data truncate text-sm text-foreground">
                {CONTRACT_ADDRESS}
              </p>
            </div>
            <div className="flex-shrink-0 rounded-full bg-secondary p-2.5">
              {copied ? (
                <Check className="h-4 w-4 text-green-600" strokeWidth={1.5} />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              )}
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContractCopy;
