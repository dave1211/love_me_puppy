import { motion } from "framer-motion";

const socials = [
  { emoji: "𝕏", label: "X (Twitter)", handle: "@welovetanner25", url: "https://x.com/welovetanner25" },
  { emoji: "📸", label: "Instagram", handle: "@love_me_puppy", url: "https://instagram.com/love_me_puppy" },
  { emoji: "🎵", label: "TikTok", handle: "@love_me_puppy", url: "https://www.tiktok.com/@love_me_puppy" },
  { emoji: "✈️", label: "Telegram", handle: "Join Group", url: "https://t.me/" },
];

const CommunitySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-3">Join the Community</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="gold-card text-center hover:scale-[1.03] transition-transform"
              style={{ transition: "transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            >
              <span className="text-3xl block mb-2">{social.emoji}</span>
              <p className="font-display text-sm text-foreground">{social.label}</p>
              <p className="text-primary/60 text-xs mt-1">{social.handle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
