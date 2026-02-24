import { motion } from "framer-motion";
import techCnc from "@/assets/tech-cnc.jpg";
import techScanner from "@/assets/tech-scanner.jpg";
import techCmm from "@/assets/tech-cmm.jpg";
import tech3dPrint from "@/assets/tech-3dprint.jpg";

const technologies = [
  { title: "5-Axis CNC Machining", description: "Multi-axis precision milling and turning centres for complex geometries", image: techCnc },
  { title: "3D Scanning Systems", description: "Industrial structured light and handheld laser scanners for high-accuracy capture", image: techScanner },
  { title: "CMM Inspection", description: "Coordinate measuring machines for certified dimensional verification", image: techCmm },
  { title: "3D Printing & Life Size Models", description: "Industrial additive manufacturing for rapid prototyping and life-size model creation", image: tech3dPrint },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="section-padding bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-metallic text-sm font-semibold tracking-[0.2em] uppercase mb-4">Infrastructure</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Our Technology
          </h2>
          <p className="text-steel-light text-lg max-w-2xl mx-auto">
            Advanced equipment and software powering every project with precision and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={tech.image}
                alt={tech.title}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                  {tech.title}
                </h3>
                <p className="text-steel-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
