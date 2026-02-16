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
                <p className="text-steel-light text-sm">info@yetkiengineering.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-metallic/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-metallic" size={20} />
              </div>
              <div>
                <h4 className="font-display text-primary-foreground font-semibold mb-1">Phone</h4>
                <p className="text-steel-light text-sm">+90 (216) 555 0123</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-metallic/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-metallic" size={20} />
              </div>
              <div>
                <h4 className="font-display text-primary-foreground font-semibold mb-1">Location</h4>
                <p className="text-steel-light text-sm">Organize Sanayi Bölgesi, Istanbul, Turkey</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg overflow-hidden border border-steel/20 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3894620051!2d28.731994266464975!3d41.00498225498181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
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
