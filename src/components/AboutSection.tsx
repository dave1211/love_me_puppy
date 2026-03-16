import { motion } from "framer-motion";
import tannerFluffy from "@/assets/tanner-fluffy.jpg";
import tannerHero from "@/assets/tanner-hero.jpg";
import tannerPuppy from "@/assets/tanner-puppy.jpg";

const AboutSection = () => {
  const images = [
    { src: tannerFluffy, label: "The Giant Teddy Bear" },
    { src: tannerHero, label: "Red Carpet Star" },
    { src: tannerPuppy, label: "Baby Tanner" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary text-center mb-8">
            About $TANNER
          </h2>
          <div className="gold-card max-w-3xl mx-auto mb-12">
            <p className="text-foreground/80 text-center leading-relaxed">
              Tanner is a 9-year-old fluffy brown poodle from Sydney, Australia, known as the "giant teddy bear" with lots of cuddles and kisses. Living with his dad Wayne, Tanner is becoming a service dog and brings joy to everyone. His Instagram{" "}
              <a href="https://instagram.com/love_me_puppy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                @love_me_puppy
              </a>{" "}
              has over 5,700 followers sharing his adventures.
            </p>
            <p className="text-foreground/80 text-center leading-relaxed mt-4">
              At Love Me Puppy, we believe dogs are family. $TANNER is the meme coin that celebrates the joy and companionship Tanner brings. A Tanner a day keeps the gloomy days away! 🐾
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="gold-card overflow-hidden p-0"
            >
              <div className="aspect-square overflow-hidden">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-foreground/70 font-semibold py-3 px-4">{img.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
