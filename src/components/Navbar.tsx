import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Anti-Rug", href: "#safu" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tools", href: "#tools" },
  { label: "Merch", href: "#merch" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: "blur(16px)",
        background: "rgba(10, 10, 10, 0.88)",
        borderBottom: "1px solid rgba(245, 200, 66, 0.12)",
      }}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-display text-xl transition-opacity hover:opacity-80"
          style={{ color: "#F5C842" }}
        >
          <span>🐾</span>
          <span>Love Me Puppy</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.65)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#" className="gold-button text-sm px-5 py-2.5 animate-pulse-glow">
            Buy on Pump.fun
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 transition-colors"
                style={{ color: "rgba(255,255,255,0.8)" }}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] p-0 border-l"
              style={{
                background: "#0d0d0d",
                borderColor: "rgba(245, 200, 66, 0.2)",
              }}
            >
              <div className="flex flex-col gap-1 p-6 pt-12">
                <div className="font-display text-xl mb-6" style={{ color: "#F5C842" }}>
                  🐾 Love Me Puppy
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base py-3 border-b transition-colors"
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      borderColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#" className="gold-button text-sm text-center mt-6">
                  Buy on Pump.fun
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
