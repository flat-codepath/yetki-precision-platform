const Footer = () => {
  return (
    <footer className="bg-surface-dark py-12 border-t border-steel/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="font-display text-xl font-bold text-primary-foreground tracking-tight">
              YETKI<span className="text-metallic">.</span>
            </a>
            <p className="text-steel text-sm mt-2">Precision Engineering & Advanced Manufacturing</p>
          </div>
          <div className="flex items-center gap-8">
            {["Services", "Technology", "Team", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-steel hover:text-metallic transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-steel/10 mt-8 pt-8 text-center">
          <p className="text-steel text-xs">
            © {new Date().getFullYear()} Yetki Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
