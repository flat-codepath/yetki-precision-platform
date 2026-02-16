import { motion } from "framer-motion";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const team = [
  { name: "Mehmet Yılmaz", role: "Founder & Chief Engineer", expertise: "25+ years in precision tooling and mould design", image: team1 },
  { name: "Ayşe Kara", role: "Head of 3D Metrology", expertise: "Specialist in optical scanning and dimensional analysis", image: team2 },
  { name: "Hasan Demir", role: "Senior Manufacturing Engineer", expertise: "CNC programming and advanced machining processes", image: team3 },
  { name: "Can Öztürk", role: "Quality & Inspection Lead", expertise: "GD&T certification and first-article inspection", image: team4 },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-metallic text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our People</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Engineering Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experienced engineers and metrologists dedicated to delivering precision and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden mb-5 shadow-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-metallic text-sm font-semibold mb-1">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
