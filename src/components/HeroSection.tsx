import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative bg-primary text-primary-foreground overflow-hidden">
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }} />

    <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
      <div className="max-w-3xl">
        <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">
          Precision Bearings & Auto Parts Trading
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Trusted Global Brands.{" "}
          <span className="text-accent">Reliable Supply.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl">
          Motion Technology Autoparts Trading is a Dubai-based trading company supplying high-quality bearings, linear motion systems, and automotive parts sourced from globally recognized manufacturers.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
          >
            <a href="#contact">Request a Quote</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8"
          >
            <a href="#contact">Contact Sales</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
