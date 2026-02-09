const footerLinks = {
  Programs: ["Mind", "Body", "Soul", "Career", "Relationships"],
  Company: ["About", "Careers", "Press", "Blog"],
  Support: ["Help Center", "Contact", "Privacy", "Terms"],
};

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <a href="/" className="text-xl font-bold text-foreground">
            Mind<span className="text-gradient">valley</span>
          </a>
          <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
            The world's most powerful life transformation platform.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-foreground mb-4 text-sm">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-muted-foreground text-xs">
          © 2025 Mindvalley. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
