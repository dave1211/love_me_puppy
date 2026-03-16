import { motion } from "framer-motion";

const VideoSection = () => {
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
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-3">
            Tanner in Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch the world's fluffiest celebrity do his thing 🎬
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Tanner Being Adorable 🐾", id: "dQw4w9WgXcQ" },
            { title: "Fluffy Adventures 🌟", id: "dQw4w9WgXcQ" },
          ].map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="gold-card p-0 overflow-hidden"
            >
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <span className="text-4xl">🎬</span>
              </div>
              <p className="text-center text-foreground font-semibold py-4 px-4">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
