import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-metallic text-sm font-semibold tracking-[0.2em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Start Your Project Today
          </h2>
          <p className="text-steel-light text-lg max-w-2xl mx-auto">
            Tell us about your engineering challenge. Our team responds within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-navy-light border border-steel/20 rounded-md px-4 py-3.5 text-primary-foreground placeholder:text-steel text-sm focus:outline-none focus:ring-2 focus:ring-metallic/50 transition-shadow"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-navy-light border border-steel/20 rounded-md px-4 py-3.5 text-primary-foreground placeholder:text-steel text-sm focus:outline-none focus:ring-2 focus:ring-metallic/50 transition-shadow"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-navy-light border border-steel/20 rounded-md px-4 py-3.5 text-primary-foreground placeholder:text-steel text-sm focus:outline-none focus:ring-2 focus:ring-metallic/50 transition-shadow"
            />
            <textarea
              placeholder="Describe your project requirements..."
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-navy-light border border-steel/20 rounded-md px-4 py-3.5 text-primary-foreground placeholder:text-steel text-sm focus:outline-none focus:ring-2 focus:ring-metallic/50 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-metallic text-accent-foreground px-8 py-4 rounded-md text-base font-semibold hover:opacity-90 transition-opacity shadow-metallic flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-metallic/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-metallic" size={20} />
              </div>
              <div>
                <h4 className="font-display text-primary-foreground font-semibold mb-1">Email</h4>
                <p className="text-steel-light text-sm">arifsayyed@yetkiengineering.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-metallic/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-metallic" size={20} />
              </div>
              <div>
                <h4 className="font-display text-primary-foreground font-semibold mb-1">Phone</h4>
                <p className="text-steel-light text-sm">+91 9505923787</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-metallic/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-metallic" size={20} />
              </div>
              <div>
                <h4 className="font-display text-primary-foreground font-semibold mb-1">Office Address</h4>
                <p className="text-steel-light text-sm">#36 Second Floor Technocrats Industrial Estate,
Balanagar, Kukatpally Industrial Estate, Balanagar,
Hyderabad, Telangana 500037, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-metallic/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-metallic" size={20} />
              </div>
              <div>
                <h4 className="font-display text-primary-foreground font-semibold mb-1">Manufacturing Address</h4>
                <p className="text-steel-light text-sm">Survey No. 150, IDA Bollaram,
Jinnaram Mandal, Medak District,
Hyderabad, Telangana 502325, India</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg overflow-hidden border border-steel/20 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7611.59182112768!2d78.43727450496536!3d17.469479733450136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%2336%20Second%20Floor%20Technocrats%20Industrial%20Estate%2C%20Balanagar%2C%20Kukatpally%20Industrial%20Estate%2C%20Balanagar%2C%20Hyderabad%2C%20Telangana%20500037%2C%20India!5e0!3m2!1sen!2sin!4v1771957114183!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yetki Engineering Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
