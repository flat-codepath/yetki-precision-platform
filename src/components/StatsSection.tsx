import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "±0.01mm", label: "Precision Tolerance" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-navy border-y border-steel/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-metallic mb-2">
                {stat.value}
              </p>
              <p className="text-steel-light text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
