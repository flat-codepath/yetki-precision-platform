import { motion } from "framer-motion";
import serviceMould from "@/assets/service-mould.jpg";
import serviceScanning from "@/assets/service-scanning.jpg";
import serviceReverse from "@/assets/service-reverse.jpg";
import serviceInspection from "@/assets/service-inspection.jpg";
import serviceDevelopment from "@/assets/service-development.jpg";
import service3dPrinting from "@/assets/service-3dprinting.jpg";
import serviceFrp from "@/assets/service-frp.jpg";

const services = [
  {
    title: "Precision Mould Making",
    description: "High-tolerance mould design and manufacturing for injection moulding, die casting, and sheet metal forming. We deliver tooling that performs consistently across millions of cycles.",
    benefits: ["±0.01mm tolerances", "Multi-cavity tooling", "Full lifecycle support"],
    image: serviceMould,
  },
  {
    title: "3D Scanning & Digitisation",
    description: "Industrial-grade structured light and laser scanning to capture complex geometries with micron-level accuracy. Perfect for quality assurance, reverse engineering, and digital archiving.",
    benefits: ["Sub-50μm accuracy", "Full-field capture", "Certified reporting"],
    image: serviceScanning,
  },
  {
    title: "Reverse Engineering",
    description: "Transforming physical parts into production-ready CAD models. From legacy components to competitor analysis, we reconstruct accurate digital twins for manufacturing.",
    benefits: ["Scan-to-CAD workflow", "Surface & solid modelling", "Legacy part recovery"],
    image: serviceReverse,
  },
  {
    title: "CAD Inspection & Metrology",
    description: "Dimensional verification and GD&T analysis comparing manufactured parts against CAD intent. Comprehensive first-article and production inspection services.",
    benefits: ["GD&T compliance", "Color deviation maps", "Statistical reporting"],
    image: serviceInspection,
  },
  {
    title: "Product Development Support",
    description: "End-to-end engineering support from concept design through prototyping to production. We partner with OEMs and manufacturers to accelerate time-to-market.",
    benefits: ["DFM analysis", "Rapid prototyping", "Production readiness"],
    image: serviceDevelopment,
  },
  {
    title: "3D Printing & Additive Manufacturing",
    description: "Industrial-grade 3D printing for rapid prototyping, functional testing, and low-volume production. From concept models to end-use parts, we deliver precision additive manufacturing with multiple material options.",
    benefits: ["FDM, SLA & SLS", "Rapid turnaround", "Functional prototypes"],
    image: service3dPrinting,
  },
  {
    title: "FRP & Carbon Fibre Moulds",
    description: "Custom fibre-reinforced polymer and carbon fibre mould fabrication for lightweight, high-strength applications. We engineer composite tooling for automotive, aerospace, and industrial sectors.",
    benefits: ["Lightweight & durable", "Custom layup design", "High-temp resistant"],
    image: serviceFrp,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-metallic text-sm font-semibold tracking-[0.2em] uppercase mb-4">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Engineering Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Five core capabilities, one integrated engineering partner. Every service is backed by advanced technology and decades of expertise.
          </p>
        </motion.div>

        <div className="space-y-20 lg:space-y-28">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-elevated group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
