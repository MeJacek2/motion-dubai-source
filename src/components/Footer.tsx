import { Link } from "react-router-dom";
import logo from "@/assets/motion-tech-logo-big.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Motion Technology" className="h-10 brightness-0 invert" />
        <p className="text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Motion Technology Autoparts Trading FZE. All Rights Reserved.
        </p>
        <div className="flex gap-4 text-sm text-primary-foreground/60">
          <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms-and-conditions" className="hover:text-primary-foreground transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
