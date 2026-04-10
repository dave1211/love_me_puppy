const navLinks = [
  { label: "About", href: "#about" },
  { label: "Anti-Rug", href: "#safu" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Tools", href: "#tools" },
  { label: "Merch", href: "#merch" },
  { label: "Community", href: "#community" },
  { label: "FAQ", href: "#faq" },
];

const socials = [
  { icon: "🐦", label: "Twitter", href: "#" },
  { icon: "💬", label: "Telegram", href: "#" },
  { icon: "🔁", label: "Pump.fun", href: "#" },
];

export default function FooterSection() {
  return (
    <footer
      style={{
        background: "#070707",
        borderTop: "1px solid rgba(245,200,66,0.14)",
      }}
    >
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo + tagline */}
          <div>
            <div className="font-display text-xl mb-2" style={{ color: "#F5C842" }}>
              🐾 Love Me Puppy | $TANNER
            </div>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
              The anti-rug memecoin with a heart. Built on Solana.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.78)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4 md:justify-end">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-2xl transition-opacity"
                style={{ opacity: 0.55 }}
                aria-label={social.label}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-8 text-center text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.28)",
          }}
        >
          © 2025 $TANNER. Community token. Not financial advice. DYOR. 🐾
        </div>
      </div>
    </footer>
  );
}
