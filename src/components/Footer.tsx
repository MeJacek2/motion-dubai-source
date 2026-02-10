import logo from "@/assets/motion-tech-logo-big.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Motion Technology" className="h-10" />
        <p className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Motion Technology Autoparts Trading. All Rights Reserved.
        </p>
        <div className="flex gap-4 text-sm text-primary-foreground/60">
          <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
