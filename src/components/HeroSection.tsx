import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-surface-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-metallic text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6">
            Precision Engineering & Advanced Manufacturing
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Engineering Solutions
            <br />
            <span className="text-gradient-metallic">Built to Perform</span>
          </h1>
          <p className="text-steel-light text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From concept to production — precision mould making, 3D scanning, reverse engineering, and advanced CAD inspection for demanding industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-gradient-metallic text-accent-foreground px-8 py-4 rounded-md text-base font-semibold hover:opacity-90 transition-opacity shadow-metallic"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="border border-steel-light/30 text-primary-foreground px-8 py-4 rounded-md text-base font-semibold hover:bg-primary-foreground/5 transition-colors"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
